<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>weather</title>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="https://www.gstatic.com/firebasejs/5.9.1/firebase.js"></script>
	<link rel="stylesheet" type="text/css" href="./body.css?version=2322112"/>
	<link rel="stylesheet" type="text/css" href="./keyboard.css" />
	<script type="text/javascript" src="./keyboard.js" charset="UTF-8"></script>
	<link rel="stylesheet" type="text/css" href="./header.css?version=231312322"/>
	<style>
	.svg{
		 filter: invert(1.0);
	}
	  #pop{
      width:50px; height:400px; background:#rgba(255,255,255,0.5); color:#fff; 
      position:absolute; top:100px; left:10px; text-align:left; 
      visibility: hidden;
    }
	table{
		width:-webkit-calc(100% - 130px);
		height:100px;
		margin-left:70px;
		text-align:center;
		border: 2px solid #337ab7;
		
	}
	#tb1{
		position: absolute;
	    top: 0;
	    bottom: 0;
	    left: 0;
	    right: 0;
	    height: 60%;
	    margin: auto;
	    background-color:black;
	}
	
	</style>
	<script>
	var area = "Jinju"
    function closePop() {
      document.all['pop'].style.visibility = "hidden";
    }
  </script>
  <script>
  function mouseClick() {
      document.all['pop'].style.visibility = "visible";
  }
  </script>
	<script src="./weather.js?version=22223223"></script>
   <script>		
  function changeArea(id) {
  	  area = id;
  	  weather();
  	  document.all['pop'].style.visibility = "hidden";
  }
  
   </script>

</head>
<body onload="weather()" >
		<div id="header" ></div>
		<span onclick="mouseClick()">
		<div id="pop">
        <a id="close" style="width:100px; margin:auto;">
          <a href="javascript:closePop();" style="color:black"><b>CLOSE</b></a><br><br>
          <input type="button" class="button" id="Jinju" value="진주" onclick="javascript:changeArea(id)"></br>
           <input type="button" class="button" id="Busan" value="부산" onclick="javascript:changeArea(id)"></br>
            <input type="button" class="button" id="Seoul" value="서울" onclick="javascript:changeArea(id)"></br>
             <input type="button" class="button" id="Yeosu" value="여수" onclick="javascript:changeArea(id)"></br>
        </div>
      	</div>
		<script src='./menu.js?version=122209124252'></script>
		<script src='./time.js?version=2331223'></script>
		<div id="tb" >
		<table bgcolor="#337ab7"  style="margin-top:75px">
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
		</div>
		<iframe src='./alarm.html' style='display:none;' ></iframe>
		</span>
</body>

</html>
