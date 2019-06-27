
<!DOCTYPE html>
<html>
<head>
<title>HELLO</title>
<meta name="viewport" content="width=device-width, initial-scale=0.8">
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-116609316-1"></script>
<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script>
<link rel="stylesheet" type="text/css" href="./body.css?version=23244222"/>
<link rel="stylesheet" type="text/css" href="./header.css?version=22142222"/>
<link rel="stylesheet" type="text/css" href="./backImage.css?version=14222"/>
<style>
  #pop{
      width:100px; height:300px; background:#rgba(255,255,255,0.3); color:#fff; 
      position:absolute; top:100px; left:10px; text-align:center; 
      visibility: hidden;
      overflow:auto;
      overflow-x:hidden;
    }
</style>
</head>
<body>
  <div id="container">
  <iframe src='./alarm.html' style='display:none;' ></iframe>
      <img id="backImage"></img>
      <div id="header">
         <script src='./menu.js?version=19142922222222999'></script>
         <script src='./time.js?version=23332222232223'></script>
      </div>
      <div id="pop"> 
        <button id="closePop" class="button" onclick="closePop()">close</button><br/>
      </div>
    <div class="center">
    </div>
</div>
<script src='./pop.js?version=123'></script>
<script>
  let W_width = window.innerWidth + 20;
  let W_height = window.innerHeight + 20; 
  let image2 = new Image();
  image2.src = "./slideshowimages/woman-3075704_1280.jpg";
  image2.style.width = (W_width) +"px";
  image2.style.height = (W_height) + "px";
  document.getElementById("backImage").prepend(image2);
</script>
<script>
var photoarray = new Array();
var image;
<?php
if ($handle = opendir('./slideshowimages')) {
  $counter = 1;
  while (false !== ($entry = readdir($handle))) {

      if ($entry != "." && $entry != ".." && $entry !="@eaDir") {

          echo "photoarray.push('slideshowimages/" . $entry . "');";

          $counter++;
      }
  }
  closedir($handle);
  }
 ?>
  var imgList;
  let imageTag = document.getElementById("backImage"); 
   for(i = 0; i<photoarray.length; i++) { 
        pop.innerHTML += "<a href='javascript:test("+i+")'><img src='"+photoarray[i]+"' width='100' height='70'></img></a><br>";
   }
 window.setInterval(function(){
     //get a random image
    random = Math.floor(Math.random() * photoarray.length);
    photo = photoarray[random];
    let imageEffect;
    let imgOpacity= 0;
    // when preload is complete, apply the image to the div
      function imageChange() {
      
        imageEffect = setInterval(function() {
          imgOpacity += 0.1;
          imageTag.style.opacity = "" + imgOpacity; 
          if(imgOpacity >= 1) {
            clearInterval(imageEffect);
            imgOpacity = 1;
            }
          },100);
        imageTag.style.width = parseInt(W_width,10)-20+"px";
        imageTag.style.height = parseInt(W_height,10)-20 + "px";
        imageTag.src = photo;
      }
  
    imageChange();
    setTimeout(function() {
      imageEffect = setInterval(function() {
         imgOpacity -= 0.1;
          imageTag.style.opacity = "" + imgOpacity; 
          if(imgOpacity <= 0) {
            clearInterval(imageEffect);
            imgOpacity = 0;
            }
          },100);
    }, 10000);
  }, 11000);
</script>
<script>
    function test(i) {
      imageTag.src = photoarray[i];
      pop.style.visibility = "hidden";
    }
</script>
</body>
