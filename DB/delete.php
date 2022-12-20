<?php

//delete.php

include "database_connection.php";

$x = file_get_contents("php://input");
$d = json_decode($x);
$sql = "DELETE FROM `tree` WHERE ID like '{$d->YYY}'";

try{
    if ($conn->query($sql) === TRUE) {
      echo  "124";
      //json_encode ("New record created successfully");
    } else {
      echo  "587";
    }
    
    //  echo"end";
    $conn->close();
     }
    catch(mysqli_sql_exception $e ){
      echo $e->getCode();
     }
    ?>