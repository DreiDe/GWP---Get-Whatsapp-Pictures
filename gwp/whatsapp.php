<?php
//$pdo = new PDO('mysql:host=localhost;dbname=whatsapp', '****', '******');
//$pdo->exec("set names utf8");
if(isset($_POST['user'])){
	$arr = json_decode($_POST['user']);
	define('UPLOAD_DIR', 'pics/');
	for($i = 0; $i < count($arr); $i += 3){
/* 	$statement = $pdo->prepare("Insert into user (number, url, base64) values (?, ?, ?)");
	$statement->execute(array($arr[$i], $arr[$i + 1], $arr[$i + 2])); */
	$img = $arr[$i + 2];
	$img = str_replace('data:image/jpeg;base64,', '', $img);
	$img = str_replace(' ', '+', $img);
	$data = base64_decode($img);
	$file = UPLOAD_DIR . $arr[$i] . date("d_m_Y__H_i_s"). '.jpg';//save image
	file_put_contents($file, $data);
	}
}
echo "success";
	exit();
?>
