import time
import spidev
import sys
import os

spi=spidev.SpiDev()
spi.open(0,0)
spi.max_speed_hz = 1350000
def read_spi_adc(adcChannel):
	adcValue=0
	buff=spi.xfer2([1,(8+adcChannel)<<4,0])
	adcValue=((buff[1]&3)<<8)+buff[2]
	return adcValue
	
while True:
	adcChannel=0
	adcValue=read_spi_adc(adcChannel)
	if adcValue<300:
		os.system("sudo bash -c 'echo 200 > /sys/class/backlight/rpi_backlight/brightness'")
	elif adcValue<400:
		os.system("sudo bash -c 'echo 160 > /sys/class/backlight/rpi_backlight/brightness'")
	elif adcValue<600:
		os.system("sudo bash -c 'echo 120 > /sys/class/backlight/rpi_backlight/brightness'")
	elif adcValue<800:
		os.system("sudo bash -c 'echo 100 > /sys/class/backlight/rpi_backlight/brightness'")
	elif adcValue<1000:
		os.system("sudo bash -c 'echo 70 > /sys/class/backlight/rpi_backlight/brightness'")
	else:
		os.system("sudo bash -c 'echo 30 > /sys/class/backlight/rpi_backlight/brightness'")	
	#print("light %d"%adcValue)
	time.sleep(1)
