
const pop = document.getElementById('pop');
  
let popUp = false;
function openPop(event) {
      console.log(event);
      pop.style.visibility = "visible";
  }
function closePop() {
  pop.style.visibility = "hidden";
}

document.getElementById('header').addEventListener('click', openPop);