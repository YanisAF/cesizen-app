@echo off
chcp 65001 >nul
echo [CesiZen] Setup initial...

set JAVA_HOME=C:\Program Files\Java\jdk-21
set PATH=%JAVA_HOME%\bin;%PATH%

echo [CesiZen] Java :
java -version
echo.

if exist platforms rmdir /s /q platforms
echo [CesiZen] npm install...
call npm install

echo [CesiZen] ns platform add android...
call ns platform add android

echo.
echo [CesiZen] Patch gradle-wrapper vers 8.7...
set W=platforms\android\gradle\wrapper\gradle-wrapper.properties
echo distributionBase=GRADLE_USER_HOME> "%W%"
echo distributionPath=wrapper/dists>> "%W%"
echo distributionUrl=https\://services.gradle.org/distributions/gradle-8.13-bin.zip>> "%W%"
echo zipStoreBase=GRADLE_USER_HOME>> "%W%"
echo zipStorePath=wrapper/dists>> "%W%"
echo [CesiZen] OK wrapper patche

echo.
echo ============================================
echo  Setup termine !
echo  Maintenant lance : run.bat
echo ============================================
pause
