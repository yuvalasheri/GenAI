@echo off
setlocal enabledelayedexpansion

for %%F in ("%CD%\..") do set "project_folder=%%~nF"

C:
cd \%project_folder%\AngularProject\%project_folder%
ng build --base-href /%project_folder%/ --output-path \%project_folder%\Application
pause
