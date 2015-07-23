<?php

$conn = mysql_connect("localhost","root","");
$db = mysql_select_db("fun");
mysql_query("insert into image (inert) VALUES (7)");
//$id = mysql_insert_id();
$upload_dir = "upload/";
$img = $_POST['hidden_data'];
$img = str_replace('data:image/png;base64,', '', $img);
$img = str_replace(' ', '+', $img);
$data = base64_decode($img);
$get=mysql_query("SELECT id FROM image
                  ORDER BY id DESC 
                  LIMIT 1");
$row = mysql_fetch_assoc($get);
$max_id = intval($row['id']);
$file = $upload_dir .$max_id. ".png";

$success = file_put_contents($file, $data);
print $success ? $file : 'Unable to save the file.';
mysql_close();
?>