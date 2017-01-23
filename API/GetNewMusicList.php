<?php
header("Content-type: application/json");
//header("Access-Control-Allow-Origin:  /");
require_once("conn.php");
$page = $_GET['Page'];//第几页
$nmu = "50";//条数
$pagenum = $nmu;//每页几条
$start = ($page - 1) * $pagenum;
$sql="SELECT ID,MusicID,Title,AnimeName,A128,A320,WuSun,Top,ITop,Time,Status,Bg FROM MusicList order by MusicID desc LIMIT $start,$pagenum";
mysqli_query($mysqli,"set names utf8");
$result=mysqli_query($mysqli,$sql);

// 关联数组
  $i = 0;
	while($row=mysqli_fetch_array($result,MYSQLI_ASSOC)){

			$echo[$i]=$row;
			$i++;

	}
  if(!$mysqli){
  echo "[]";
  }else{
	if(!$echo){
	echo "[]";
	}else{
		echo json_encode($echo);
	}
  }

// 释放结果集
mysqli_free_result($result);

mysqli_close($mysqli);