import sys
import Adafruit_DHT
import time
import pyrebase

sensor = Adafruit_DHT.DHT11
pin = 17

config = {
    "apiKey": "AIzaSyC1Os6RIdcGyw48Iho-cz3CLoFOe-tQGSK",
    "authDomain": "react-test-9ecdd.firebaseapp.com",
    "databaseURL": "https://react-test-9ecdd.firebaseio.com",
    "storageBucket": "react-test-9ecdd.appspot.com",
}

firebase = pyrebase.initialize_app(config)
db = firebase.database()
while True:
    humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)
    #humidity = "" + humidity
    #temperature = "" + temperature
    data = {
    "temp": temperature,
    "humi": humidity
    }
    if humidity is not None and temperature is not None:
        print('Temp={0:0.1f}*  Humidity={1:0.1f}%'.format(temperature, humidity))
        db.child("climate").set(data)
    else:
        print('Failed to get reading. Try again!')
        sys.exit(1)
    time.sleep(1)
