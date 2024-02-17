# Alarm-Clock-App
Display current time in 12-hour format
Set an alarm by entering the hour and minute values.
Display a list of set alarms
Delete alarms from the list
Trigger alerts when the alarm time matches the current time

Usage
To use the JavaScript alarm clock, follow these steps:
Open the index.html file in a web browser.

The current time will be displayed at the top of the page.
select the desired alarm time from the options for hour and minute.
Select either 'AM' or 'PM' from the dropdown for specifying the time period.
Click the "Set Alarm" button to add the alarm to the list below.
The set alarms will be displayed in a list format with a "Delete" button next to each alarm.
To delete an alarm, click the corresponding "Delete" button.
When the current time matches any of the set alarm times, a ringtone will ring.

Code Explanation
The displayTime() function is responsible for displaying the current time in 12-hour format and is called every second using setInterval.
viewAlarmlist() function is for listing all the alarms.
remove() function is for removing the alarm on clicking of delete button.
clearAlarm() function is for stopping the alarm.

Browser Compatibility
This JavaScript alarm clock is compatible with modern web browsers that support JavaScript.
