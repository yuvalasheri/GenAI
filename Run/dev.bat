@echo off
setlocal enabledelayedexpansion

cd /d "%~dp0"

for %%F in ("%CD%\..") do set "project_name=%%~nF"
for %%I in ("%CD%\..") do set "project_folder=%%~fI"

Start c:\xpa411\MgxpaStudio.exe @%project_folder%\ini\%project_name%.ini