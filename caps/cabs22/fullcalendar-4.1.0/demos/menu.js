function go_slide() {
	window.location.href='http://localhost/cabs/slide.php';
}
function go_weather() {
	window.location.href='http://localhost/cabs/weather.php';
}
function go_calendar() {
	window.location.href='http://localhost/cabs/fullcalendar-4.1.0/demos/google-calendar.html';
}
function go_game() {
	window.location.href='http://localhost/cabs/index.html';
}
var html = "<input type='button' value='slide' onclick='go_slide()'></input>" +
"<input type='button' value='weather' onclick='go_weather()'></input>" +
"<input type='button' value='calendar' onclick='go_calendar()'></input>" +
"<input type='button' value='game' onclick='go_game()'></input>" +
"<span id='count'></span>";

document.getElementById('header').innerHTML = html;
//document.getElementById("header").innerHTML = html;