<?php
	header('Access-Control-Allow-Origin:*');
	header("Content-Type: text/html;charset=utf-8"); 
	$html = file_get_contents("http://api.map.baidu.com/place/v2/suggestion?query=".$_GET["name"]."&region=北京市&city_limit=true&output=json&ak=XFeubRChZyPQu28e06U1jGsz3C4lgLNh");
	echo $html;
	// $ch = curl_init();
	// curl_setopt($ch, curlpot, value)

?>