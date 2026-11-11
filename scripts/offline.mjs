import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const dist = new URL("../dist/", import.meta.url);
const directory = fileURLToPath(dist);
const files = (await readdir(dist, { recursive: true, withFileTypes: true }))
  .filter((entry) => entry.isFile() && entry.name !== "sw.js" && !entry.name.startsWith("."))
  .map((entry) =>
    relative(directory, join(entry.parentPath, entry.name)).replaceAll(
      "\\",
      "/",
    ),
  )
  .sort();
const hash = createHash("sha256");
for (const file of files)
  hash.update(file).update(await readFile(new URL(file, dist)));
const cache = "zombie404-" + hash.digest("hex").slice(0, 16);
const script = `
const CACHE = ${JSON.stringify(cache)} + ':' + self.registration.scope;
const PRECACHE = ${JSON.stringify(files.map((file) => "./" + file))};
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(PRECACHE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    for (const name of await caches.keys()) {
      if (name !== CACHE && name.startsWith('zombie404-') && name.endsWith(':' + self.registration.scope)) await caches.delete(name);
    }
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || !request.url.startsWith(self.registration.scope)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const home = new URL(self.registration.scope);
    const url = new URL(request.url);
    if (request.mode === 'navigate' && (url.pathname === home.pathname || url.pathname === home.pathname + 'index.html')) {
      try {
        const response = await fetch(request);
        if (response.ok) return response;
      } catch { /* Open the packaged build while offline. */ }
      return (await cache.match(new URL('./index.html', home))) ?? Response.error();
    }
    return (await cache.match(request)) ?? fetch(request);
  })());
});
`;
await writeFile(new URL("sw.js", dist), script);
