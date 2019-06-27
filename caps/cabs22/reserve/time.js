const firebaseConfig = {
  apiKey: "AIzaSyC1Os6RIdcGyw48Iho-cZ3CLoFOe-tQGSk",
  authDomain: "react-test-9ecdd.firebaseapp.com",
  databaseURL: "https://react-test-9ecdd.firebaseio.com",
  projectId: "react-test-9ecdd",
  storageBucket: "react-test-9ecdd.appspot.com",
  messagingSenderId: "55998361358"
  //appId: "1:55998361358:web:f317b234a0db42f4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const climateRef = firebase.database().ref('climate/');

function startTime() 
{
    
    var timeadd = 'AM';
    var today = new Date();
    var h = today.getHours();
    let temp = '';
    let humi = '';

    if(h > 12){
      h = h - 12;
      timeadd = 'PM';
    }
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    climateRef.on('value', (snapshot) => {
      temp = snapshot.val().temp;
      humi = snapshot.val().humi;
  })

    document.getElementById('count').innerHTML =
    
    temp + '&#176C ' + humi + '%&nbsp&nbsp&nbsp&nbsp' +
    h + ":" + m + ":" + s + " " + timeadd;
    var t = setTimeout(startTime, 500);

    

}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

startTime();