<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$data = json_decode(file_get_contents("php://input"), true);

if($data["password"] == "password" && $data["username"] == "username"){
    echo json_encode(["msg"=>"Nice you are logged in"]);
}else{
    echo json_encode(["msg"=>"Try again"]);
}

