<?php
header('content-type:text/html;charset="utf8"');
$result = array("code"=>0,"message"=>"");

$conn = mysql_connect("localhost","root","147258");
if(!$conn){
	$result["code"]=0;
	$result["message"]="服务器繁忙请稍后重试";
	echo json_encode($result);
	exit;
}
$name =  $_POST['username'];
$password =  $_POST['password'];


if(!$name){
	$result["code"]=1;
	$result["message"]="用户名不能为空";
	echo json_encode($result);
	exit;
}
if(!$password){
	$result["code"]=2;
	$result["message"]="密码不能为空";
	echo json_encode($result);
	exit;
}

mysql_set_charset("utf8");
mysql_select_db("test");
$md5pwd = md5(md5($password));
$sesql ="select * from user where username='{$name}' and password='{$md5pwd}'";
$res = mysql_query($sesql);
$row = mysql_fetch_assoc($res);
if(!$row){
	$result["code"]=4;
	$result["message"]="用户密码不一致";
	echo json_encode($result);
	exit;
}



	$result["message"] = "登录成功";
		//返回到前台
	echo json_encode($result);

	mysql_close($conn);
?>