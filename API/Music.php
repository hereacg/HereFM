<?php
header("Content-type: application/json");
//header('Access-Control-Allow-Origin: /');
$Playtype = $_POST['Playtype'];
$ID = $_POST['id'];
$GoID = $_POST['goid'];
require_once("conn.php");
if($mysqli){
if(!$GoID && (!$Playtype || $Playtype == '0')){
$sqlecho = 	"select * from MusicList order by rand() limit 1";
}
if($GoID && (!$Playtype || $Playtype == '0')){
$sqlecho = 	"select * from MusicList where MusicID=".$GoID;
}
if($GoID && $Playtype=='1'){
$sqlecho = 	"select * from MusicList where MusicID=".$GoID;
}
if(!$GoID && $Playtype=='1'){
$sqlecho = 	"select * from MusicList order by rand() limit 1";
}
if($ID && $Playtype == '2'){
$sqlecho = "SELECT * FROM MusicList WHERE ID =".$ID." ORDER BY RAND() LIMIT 1";
}
//if($ID && $GoID && $Playtype == '2'){
//$sqlecho = "select * from MusicList where MusicID=".$GoID;
//}

if($sqlecho){
mysqli_query($mysqli,"set names utf8");
$sql = $sqlecho;
$result=mysqli_query($mysqli,$sql); // 执行查询语句
while ($sqlinfo = mysqli_fetch_array($result)){
$ID = $sqlinfo["ID"];
$MusicID = $sqlinfo["MusicID"];
$Title = $sqlinfo["Title"];
$AnimeName = $sqlinfo["AnimeName"];
$A128 = $sqlinfo['A128'];
$A320 = $sqlinfo['A320'];
$SQ = $sqlinfo['WuSun'];
$highurl = $sqlinfo["highurl"];
$slogo = $sqlinfo["slogo"];
$Bg = $sqlinfo["Bg"];
$Statusr = $sqlinfo["Status"];
$Top = $sqlinfo["Top"];
}

switch ($Statusr){
case "0":
	$Status = "[ED]";
	break;
case "1":
	$Status = "[OP]";
	break;
case "2":
	$Status = "[插曲]";
	break;
case "3":
	$Status = "[BGM]";
	break;
case "4":
	$Status = "[角色歌]";
	break;
case "5":
	$Status = "[单曲]";
	break;
case "6":
	$Status = "[其他]";
	break;
default:
	$Status = "[其他]";
}

if($A128 && (!$A320 && !$SQ)){
	$eif = "1";
}else
if($A320 && (!$A128 && !$SQ)){
	$eif = "2";
}else
if($SQ && (!$A128 && !$A320)){
	$eif = "3";
}else
if($A128 && $SQ && !$A320){
	$eif = "4";
}else
if($A320 && $SQ && !$A){
	$eif = "5";
}else
if($A128 && $A320  && !$SQ){
	$eif = "6";
}else
if($A128 && $A320 && $SQ){
	$eif = "7";
}

switch ($eif){
case "1":
	$DownMusic = "<span style='font-size:12px;margin-left:10px;'>下载:<a href='".$A128."' target=\'_blank\'>128Kbps</a>&nbsp;";
	break;
case "2":
	$DownMusic = "<span style='font-size:12px;margin-left:10px;'>下载:<a href='".$A320."' target=\'_blank\'>320Kbps</a>&nbsp;";
	break;
case "3":
	$DownMusic = "<span style='font-size:12px;margin-left:10px;'>下载:<a href='".$SQ."' target=\'_blank\'>无损音质</a>&nbsp;";
	break;
case "4":
	$DownMusic = "<span style='font-size:12px;margin-left:10px;'>下载:<a href='".$A128."' target=\'_blank\'>128Kbps</a>&nbsp;<a href='".$SQ."' target=\'_blank\'>无损音质</a>&nbsp;";
	break;
case "5":
	$DownMusic = "<span style='font-size:12px;margin-left:10px;'>下载:<a href='".$A320."' target=\'_blank\'>320Kbps</a>&nbsp;<a href='".$SQ."' target=\'_blank\'>无损音质</a>&nbsp;";
	break;
case "6":
	$DownMusic = "<span style='font-size:12px;margin-left:10px;'>下载:<a href='".$A128."' target=\'_blank\'>128Kbps</a>&nbsp;<a href='".$A320."' target=\'_blank\'>320Kbps</a>&nbsp;";
	break;
case "7":
	$DownMusic = "<span style='font-size:12px;margin-left:10px;'>下载:<a href='".$A128."' target=\'_blank\'>128Kbps</a>&nbsp;<a href='".$A320."' target=\'_blank\'>320Kbps</a>&nbsp;<a href='".$SQ."' target=\'_blank\'>无损音质</a>&nbsp;";
	break;
default:
	$DownMusic = "<span style='font-size:12px;margin-left:10px;'>下载:<a hre='javascript:'>暂无</a>&nbsp;";
}
		$echo = json_encode(array('title'=>$AnimeName, 'name'=>$Status."".$Title."".$DownMusic, 'id'=>$ID, 'url'=>'/500', 'highurl'=>$highurl, 'slogo'=>$slogo, 'bg'=>$Bg, 'MusicID'=>$MusicID, 'animeurl'=>'', 'top'=>$Top));
	    echo $echo;
mysqli_free_result($result);

mysqli_close($mysqli);
}

}