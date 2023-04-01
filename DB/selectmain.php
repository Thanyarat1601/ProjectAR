<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "plants";


$conn = new mysqli($servername, $username, $password, $dbname);
$d = json_decode(file_get_contents("php://input"));

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);

}
$x = file_get_contents("php://input");
$d = json_decode($x);
if(($d->search==1)){
    $a = 1;
}else{
    $a = "ID Like'{$d->search}' ";
}
$sql = "SELECT * FROM `tree` WHERE {$a}";

$result = $conn->query($sql);


$rows = array();
while($r = $result->fetch_assoc()){
    $rows[] = $r;
}
  print json_encode($rows);
  $conn->close();

?>