function go_slide() {
	window.location.href='http://192.168.103.79/cabs22/file.html';
}
function go_weather() {
	window.location.href='http://192.168.103.79/cabs22/weather.php';
}
function go_calendar() {
	window.location.href='http://192.168.103.79/cabs22/fullcalendar-4.1.0/demos/google-calendar.html';
}
function go_game() {
	window.location.href='http://192.168.103.79/cabs22/game.html';
}
function go_alarm() {
  window.location.href='http://192.168.103.79/cabs22/alarm.html';
}

function go_exit() {
  window.location.href='http://192.168.103.79/cabs22/exit.php';
}
var html = "<input type='button' class='button' value='slide' onclick='go_slide()'></input>" +
"<input type='button' class='button' value='weather' onclick='go_weather()'></input>" +
"<input type='button' class='button' value='calendar' onclick='go_calendar()'></input>" +
"<input type='button' class='button' value='game' onclick='go_game()'></input>" +
"<input type='button' class='button' value='alarm' onclick='go_alarm()'></input>" +
"<input type='button' class='button' value='youtube' onclick='javascript:youtubeOnOff()'></input>" +
"<input type='button' class='button' value='exit' onclick='go_exit()'></input>" +
"<div id='yotubeFrame' style='position: absolute; right:10%; visibility:hidden'>" +
	"<input id='searchWindow' style='border-radius: 10px' type='text' value='' class='keyboardInput'/>" +
	"<button id='search' onclick='search()' class='button'>search</button>" +
	"<div id='youtube'></div></div>" +
	"<span style='float:right; color:black' id='count'></span>";


const backImage = document.getElementById('backImage');
const header = document.getElementById('header');
const body = document.querySelector('body');
header.innerHTML = html;

const searchWindow = document.getElementById('searchWindow');
            const youtube = document.getElementById('youtube');
            function getWorkList() {
                const url = localStorage.getItem('youtubeURL');
                youtube.innerHTML = "<iframe src=\'" + url + "\'>";
                console.log(url);
            }
            function search() {
                const url = 'https://www.youtube.com/embed?listType=search&list=' + searchWindow.value +'?autoplay=1';
				localStorage.setItem('youtubeURL', url);
				youtube.innerHTML = "<iframe src=\'" + url + "\'>";
            }
            getWorkList();

const youtubeFrame = document.getElementById('youtubeFrame');
function youtubeOnOff() {
	if(document.getElementById('yotubeFrame').style.visibility === 'hidden') {
		document.getElementById('yotubeFrame').style.visibility = 'visible'
	} else {
		document.getElementById('yotubeFrame').style.visibility = 'hidden'
	}
}


