var photoarray = new Array();
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
 window.setInterval(function(){
     //get a random image
    random = Math.floor(Math.random() * photoarray.length);
    photo = photoarray[random];

    // create a new Image object
    var img_tag = new Image();

    // when preload is complete, apply the image to the div
    img_tag.onload = function() {

        document.body.style.background = "#009ACD url('"+photo+"') no-repeat center center fixed ";
        document.body.style.backgroundSize = "cover";
    }

    // setting 'src' actually starts the preload
    img_tag.src = photo;

  }, 15000);