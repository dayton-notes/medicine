@echo off
setlocal

REM --- Source and destination base paths ---
set SRC=C:\Users\adayt\iCloudDrive\iCloud~md~obsidian\Medicine
set DEST=C:\Users\adayt\medicine\content

echo Copying selected Medicine folders...

REM --- Copy each folder individually, excluding index.md ---
robocopy "%SRC%\00-Admin"        "%DEST%\00-Admin"        /E /XF index.md
robocopy "%SRC%\01-Body Systems" "%DEST%\01-Body Systems" /E /XF index.md
robocopy "%SRC%\02-Pharmacology" "%DEST%\02-Pharmacology" /E /XF index.md
robocopy "%SRC%\03-Diagnostics"  "%DEST%\03-Diagnostics"  /E /XF index.md
robocopy "%SRC%\04-Clinical"     "%DEST%\04-Clinical"     /E /XF index.md
robocopy "%SRC%\05-Workflows"    "%DEST%\0-Workflows"     /E /XF index.md
robocopy "%SRC%\Images"          "%DEST%\Images"          /E /XF index.md

echo Folder sync complete.

REM --- Git operations ---
cd /d C:\Users\adayt\medicine

echo Adding changes...
git add -A

echo Checking for changes...
git diff --cached --quiet
if %errorlevel% equ 0 (
    echo No changes detected. Skipping commit and push.
    goto end
)

echo Pulling latest changes before pushing...
git pull --rebase

echo Committing...
git commit -m "Auto-update: synced Medicine folders"

echo Pushing...
git push

echo All done.
pause
