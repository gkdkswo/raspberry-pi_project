import RPi.GPIO as GPIO
import time
import sys
import os

GPIO.setmode(GPIO.BCM)

GPIO.setup(18,GPIO.IN)


while True:
	if GPIO.input(18) == GPIO.HIGH:
		#print("Motion Detected")
		os.system("sudo bash -c 'echo 0 > /sys/class/backlight/rpi_backlight/bl_power'")
	else:
		#print("No signal")
		os.system("sudo bash -c 'echo 1 > /sys/class/backlight/rpi_backlight/bl_power'")
	time.sleep(1)
