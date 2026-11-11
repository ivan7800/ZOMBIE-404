
const CACHE = "zombie404-4b8390af305a7669" + ':' + self.registration.scope;
const PRECACHE = ["./assets/barlow-condensed-latin-700-normal-Dmwat-ge.woff","./assets/barlow-condensed-latin-700-normal-v1xN8_Wq.woff2","./assets/ibm-plex-mono-latin-400-normal-CvHOgSBP.woff","./assets/ibm-plex-mono-latin-400-normal-DMJ8VG8y.woff2","./assets/index-Dqa3zi4B.js","./assets/index-ojN2cVEN.css","./icon-192.png","./icon-512.png","./index.html","./licenses/Barlow-OFL.txt","./licenses/IBM-Plex-OFL.txt","./licenses/Phaser-MIT.txt","./manifest.webmanifest"];
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
