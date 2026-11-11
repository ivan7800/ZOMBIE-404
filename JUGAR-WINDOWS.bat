@echo off
setlocal
cd /d "%~dp0"

if not exist "dist\index.html" (
  echo No encuentro dist\index.html. Este ZIP esta incompleto.
  pause
  exit /b 1
)

where node >nul 2>&1
if errorlevel 1 (
  echo Falta Node.js. Instala Node.js 22 o superior y vuelve a abrir este archivo.
  echo https://nodejs.org/
  pause
  exit /b 1
)

for /f %%V in ('node -p "Number(process.versions.node.split('.')[0])"') do set "NODE_MAJOR=%%V"
if not defined NODE_MAJOR (
  echo No he podido detectar la version de Node.js.
  pause
  exit /b 1
)
if %NODE_MAJOR% LSS 22 (
  echo Necesitas Node.js 22 o superior. Detectado: %NODE_MAJOR%.
  pause
  exit /b 1
)

set "PORT=4040"
set "GAME_URL=http://127.0.0.1:%PORT%/"

echo Iniciando ZOMBIE-404. Deja abierta la ventana del servidor mientras juegas.
start "ZOMBIE-404 - servidor local (cierrala para detenerlo)" /D "%~dp0" cmd /k node scripts\play.mjs %PORT%

powershell -NoProfile -ExecutionPolicy Bypass -Command "$u='%GAME_URL%'; for($i=0;$i -lt 40;$i++){ try{ $r=Invoke-WebRequest -UseBasicParsing -TimeoutSec 1 $u; if($r.StatusCode -eq 200){ Start-Process $u; exit 0 } } catch{}; Start-Sleep -Milliseconds 250 }; exit 1"
if errorlevel 1 (
  echo No se pudo confirmar que el servidor arrancara. Revisa la ventana del servidor.
  pause
  exit /b 1
)

echo El juego se ha abierto en el navegador. Cierra la ventana del servidor para salir.
endlocal
