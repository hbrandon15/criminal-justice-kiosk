#!/bin/bash
	
xset s noblank
xset s off
xset -dpms

while true; do
	#clean up previously running apps
	killall -TERM chromium-browser 2>/dev/null;
	killall -TERM matchbox-window-manager 2>/dev/null;

	sleep 2; 

	killall -9 chromium-browser 2>/dev/null;
	killall -9 matchbox-window-manager 2>/dev/null;

	unclutter -idle 0.5 -root &

	sed -i 's/"exited_cleanly":false/"exited_cleanly":true/' /home/pi/.config/chromium/Default/Preferences
	sed -i 's/"exit_type":"Crashed"/"exit_type":"Normal"/' /home/pi/.config/chromium/Default/Preferences

	/usr/bin/chromium-browser --kiosk --noerrdialogs --disable-infobars --incognito https://hbrandon15.github.io/criminal-justice-kiosk/
done;
