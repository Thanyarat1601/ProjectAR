
<?php
include "database_connection.php";
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
