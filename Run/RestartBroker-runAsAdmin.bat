net stop "Magic xpa 4.11 Broker"
timeout /T 10
taskkill /IM MgxpaRuntime.exe /F
timeout /T 10
net start "Magic xpa 4.11 Broker"
pause
