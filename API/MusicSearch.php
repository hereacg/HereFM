<?php
header("Content-type: application/json");
//header("Access-Control-Allow-Origin:  /");
$Data = $_POST['Data'];
if(isset($Data)){
require_once("conn.php");
$sql="SELECT * FROM MusicList WHERE Title LIKE '%".$Data."%' OR AnimeName LIKE '%".$Data."%' OR KeyWord LIKE '%".$Data."%' order by Title asc, AnimeName asc, KeyWord asc";
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
}else{
echo "[]";
}