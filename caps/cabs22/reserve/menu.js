function go_slide() {
	window.location.href='http://localhost/cabs22/file.html';
}
function go_weather() {
	window.location.href='http://localhost/cabs22/weather.php';
}
function go_calendar() {
	window.location.href='http://localhost/cabs22/fullcalendar-4.1.0/demos/google-calendar.html';
}
function go_game() {
	window.location.href='http://localhost/cabs22/game.html';
}
function go_alarm() {
  window.location.href='http://localhost/cabs22/alarm.html';
}

function go_exit() {
  window.location.href='http://localhost/cabs22/exit.php';
}
var html = "<input type='button' class='button' value='slide' onclick='go_slide()'></input>" +
"<input type='button' class='button' value='weather' onclick='go_weather()'></input>" +
"<input type='button' class='button' value='calendar' onclick='go_calendar()'></input>" +
"<input type='button' class='button' value='game' onclick='go_game()'></input>" +
"<input type='button' class='button' value='alarm' onclick='go_alarm()'></input>" +
"<input type='button' class='button' value='exit' onclick='go_exit()'></input>" +
"<span style='float:right; color:black' id='count'></span>";


const backImage = document.getElementById('backImage');
const header = document.getElementById('header');
const body = document.querySelector('body');
header.innerHTML = html;




