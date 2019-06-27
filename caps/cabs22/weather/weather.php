<!DOCTYPE html>
<html>
<head>
	<meat charset="utf-8"/>
	<title>weather</title>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<style>
	body{
	background-color: #d6d6d6;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	}
	.svg{
		 filter: invert(1.0);
	}
	table{
		width:600px;
		margin:auto;
		text-align:center;
		border: 2px solid #337ab7;
	}
	</style>
	<script>
		function weather() {
			var apiURI = "http://openweathermap.org/data/2.5/weather?q=Seoul,kr&appid=b6907d289e10d714a6e88b30761fae22";
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
	</script>
</head>
<body onload="weather()">
		<table  bgcolor="#337ab7" style="margin-top:60px">
		<!--
			<tr>
				<td colspan="2"><font size="10" color="white"><strong>Today's weather</strong></font></td>
			</tr>
		-->
			<tr>
				<td rowspan="3"  style="padding-top:10px;"><div id="left"></div></td>
				<td align="right" style=" padding-right:10px; padding-top:10px;" ><div id="temp"  ></div></td>
			</tr>
			
			<tr>
				<td align="right" style=" padding-right:10px;"> <div id="weather" ></div></td>
			</tr>
			
			<tr>
				<td align="right" style=" padding-right:10px; padding-bottom:10px;"><div id="section" ></div></td>
			</tr>
			
			<tr>
				<table bgcolor="white">
					<tr >
						<td width="33%" style=" padding-top:5px; padding-bottom:10px;"><div id="wind_speed"  ></div></td>
						<td width="33%" style=" padding-top:5px; padding-bottom:10px;"><div id="humidity"  ></div></td>
						<td width="33%" style=" padding-top:5px; padding-bottom:10px;"><div id="clouds"  ></div></td>
					</tr>
					
				</table>
				
			</tr>
		</table>
</body>
</html>
