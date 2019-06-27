function go_slide() {
	window.location.href='http://localhost/cabs2/slide.php';
}
function go_weather() {
	window.location.href='http://localhost/cabs2/weather.php';
}
function go_calendar() {
	window.location.href='http://localhost/cabs2/fullcalendar-4.1.0/demos/google-calendar.html';
}
function go_game() {
	window.location.href='http://localhost/cabs2/game.html';
}
function go_alarm() {
  window.location.href='http://localhost/cabs2/alarm.html';
}
var html = "<input type='button' class='button' value='slide' onclick='go_slide()'></input>" +
"<input type='button' class='button' value='weather' onclick='go_weather()'></input>" +
"<input type='button' class='button' value='calendar' onclick='go_calendar()'></input>" +
"<input type='button' class='button' value='game' onclick='go_game()'></input>" +
"<input type='button' class='button' value='alarm' onclick='go_alarm()'></input>" +
"<span id='count'></span>";

const backImage = document.getElementById('backImage');
const header = document.getElementById('header');
const body = document.querySelector('body');
header.innerHTML = html;

let menuFlag = false;
function menuOn(event) {
  console.log(event);
	if(!menuFlag) {
        document.all['header'].style.visibility = "visible";
        menuFlag = true;
      } else {
        document.all['header'].style.visibility = "hidden";
        menuFlag = false;
      }
}

body.addEventListener('click', menuOn);
//document.getElementById("header").innerHTML = html;