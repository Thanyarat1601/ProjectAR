<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tree";



$conn = new mysqli($servername, $username, $password, $dbname);
$d = json_decode(file_get_contents("php://input"));

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);

}



 
?>