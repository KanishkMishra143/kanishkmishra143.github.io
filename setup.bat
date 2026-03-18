@echo off
echo ==============================
echo Portfolio Project Setup
echo ==============================

echo.
echo Checking Node installation...
node -v >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
echo Node.js is not installed. Please install it first.
pause
exit /b
)

echo.
echo Installing dependencies (ci)...
npm ci

IF %ERRORLEVEL% NEQ 0 (
echo.
echo npm ci failed. Falling back to forced install...
npm install -f
)

echo.
echo Starting dev server...
npm run dev

pause

