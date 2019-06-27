		function weather() {
			var apiURI = "http://openweathermap.org/data/2.5/weather?q="+area+",kr&appid=b6907d289e10d714a6e88b30761fae22";
			$.ajax({
				url:apiURI,
				dataType:"json",
				type:"GET",
				async:"false",
				success: function(data) {
					var weather = data.weather[0].main;
					var temp = data.main.temp;
					var humidity = data.main.humidity;
					var wind_speed = data.wind.speed;
					var clouds = data.clouds.all;
					var section = data.name + "," + data.sys.country;
					
					var weatherImg;
					
					/*var tempImg = "./weather/wi-celsius.svg";*/
					var humidityImg = "./weather/wi-humidity2.svg";
					var wind_speedImg = "./weather/wi-strong-wind2.svg";
					var cloudsImg = "./weather/wi-cloud2.svg";
						
					
					var weathericon= data.weather[0].icon;
					
					if(weathericon == "01d"){
						weatherImg = "./weather/wi-day-sunny.svg";
					}
					else if(weathericon == "01n"){
						weatherImg = "./weather/wi-night-clear.svg";
					}
					else if(weathericon == "02d"){
						weatherImg = "./weather/wi-day-cloudy.svg";
					}
					else if(weathericon == "02n"){
						weatherImg = "./weather/wi-night-alt-cloudy.svg";
					}
					else if(weathericon == "03d"){
						weatherImg = "./weather/wi-cloud.svg";
					}
					else if(weathericon == "03n"){
						weatherImg = "./weather/wi-cloud.svg";
					}
					else if(weathericon == "04d"){
						weatherImg = "./weather/wi-cloudy.svg";
					}
					else if(weathericon == "04n"){
						weatherImg = "./weather/wi-cloudy.svg";
					}
					else if(weathericon == "09d"){
						weatherImg = "./weather/wi-showers.svg";
					}
					else if(weathericon == "09n"){
						weatherImg = "./weather/wi-showers.svg";
					}
					else if(weathericon == "10d"){
						weatherImg = "./weather/wi-day-rain.svg";
					}
					else if(weathericon == "10n"){
						weatherImg = "./weather/wi-night-alt-rain.svg";
					}
					else if(weathericon == "11d"){
						weatherImg = "./weather/wi-thunderstorm.svg";
					}
					else if(weathericon == "11n"){
						weatherImg = "./weather/wi-thunderstorm.svg";
					}
					else if(weathericon == "13d"){
						weatherImg = "./weather/wi-snow.svg";
					}
					else if(weathericon == "13n"){
						weatherImg = "./weather/wi-snow.svg";
					}
					else if(weathericon== "50d"){
						weatherImg = "./weather/wi-windy.svg";
					}
					else if(weathericon == "50n"){
						weatherImg = "./weather/wi-windy.svg";
					}
					

				
					var left = "<img src='" + weatherImg + "' width='150' height='150' class='svg'>";
					
					var temp = "<font size='6' color=white>"+temp+"&#176C";
					
					var weather = "<font size='6' color=white><strong>"+weather;
					
					var section = "<font size='6' color=white><i>"+section;
					
					var humidity = "<img src='" + humidityImg + "' width='50' height='50' class='icon'></br>"+"<font size='4' color=#337ab7><strong>"+humidity+"%";
					
					var wind_speed = "<img src='" + wind_speedImg + "' width='50' height='50'></br>"+"<font size='4' color=#337ab7><strong>"+wind_speed+"m/s";
					
					var clouds = "<img src='" + cloudsImg + "' width='50' height='50'></br>"+"<font size='4' color=#337ab7><strong>"+clouds+"%";
					
					document.getElementById("left").innerHTML = left;
					document.getElementById("temp").innerHTML = temp;
					document.getElementById("weather").innerHTML = weather;
					document.getElementById("section").innerHTML = section;
					document.getElementById("humidity").innerHTML = humidity;
					document.getElementById("wind_speed").innerHTML = wind_speed;
					document.getElementById("clouds").innerHTML = clouds;
		}
	})
}