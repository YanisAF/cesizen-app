@echo off
chcp 65001 >nul
echo [CesiZen] Lancement avec Java 21...
set JAVA_HOME=C:\Program Files\Java\jdk-21
set PATH=%JAVA_HOME%\bin;%PATH%

echo [CesiZen] Demarrage de l'emulateur...
start "" emulator -avd Pixel_4 -gpu swiftshader_indirect -no-snapshot

echo [CesiZen] Attente du demarrage de l'emulateur (30 secondes)...
timeout /t 30 /nobreak

echo [CesiZen] Lancement NativeScript...
ns run android --no-hmr
