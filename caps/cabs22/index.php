<!DOCTYPE html>
<html>
<head>
<title>sync</title>
<meta name="viewport" content="width=device-width, initial-scale=0.8">
</head>
<body>
<?php
  system("sudo rclone copy remote:images /var/www/html/slideshowimages");
  header('Location:http://localhost/menu.html');
?>
<script>
</body>
</html>
