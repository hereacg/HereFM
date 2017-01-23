<?php
$db_host = 'localhost';
$db_name = 'JJFM';
$db_user = 'JJFM';
$db_pwd = '';

//面向对象方式
$mysqli = new mysqli($db_host, $db_user, $db_pwd, $db_name);
//面向对象的昂视屏蔽了连接产生的错误，需要通过函数来判断
if(mysqli_connect_error()){
    echo mysqli_connect_error();
}
//设置编码
$mysqli->set_charset("utf8");//或者 $mysqli->query("set names 'utf8'")
//关闭连接
$mysqli->close();

//面向过程方式的连接方式

$mysqli = mysqli_connect($db_host, $db_user, $db_pwd, $db_name);
//判断是否连接成功
//if(!$mysqli ){
//    echo mysqli_connect_error();
//}
//关闭连接
//mysqli_close($mysqli);