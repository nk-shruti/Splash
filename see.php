<?php
session_start();
$conn = mysql_connect("localhost","root","");
$db = mysql_select_db("fun");
$get=mysql_query("SELECT id FROM image
                  ORDER BY id DESC 
                  LIMIT 1");
$row = mysql_fetch_assoc($get);
$max_id = intval($row['id']);
$_SESSION['id'] = $max_id;
?>
<html>
<head>
<style>
#imgshow
{
	position:absolute;
	left:20px;
	top:20px;
	width:100%;
	height:100%;
	

}
.image
{

position:relative;
	left:40px;
	top:40px;
	width:100x;
	height:100px;
	


}
.image:hover
{
	
	
	
}

	
	body
{
   background-image:url('lol.jpg');
   background-repeat:no-repeat;
  background-size: cover;

}


</style>
</head>
<body>

<div id="imgshow"> 



</div>
<script>

var js_var = <?php echo $_SESSION['id'] ?>;

var i = js_var; 
for(i=1;i<=js_var;i++)
{
	var img = document.createElement("img");     
	var imgParent = document.getElementById("imgshow");
	img.id = "img" + i;
	img.className = "image";
	img.src="upload/" + i + ".png";
	imgParent.appendChild(img);
	
}



</script>

</body>

</html>