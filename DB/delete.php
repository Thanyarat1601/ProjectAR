<?php

//delete.php

include "database_connection.php";

$x = file_get_contents("php://input");
$d = json_decode($x);
$sql = "DELETE FROM `new_table2` WHERE ID like '{$d->YYY}'";

try{
    if ($conn->query($sql) === TRUE) {
      echo  "ลบข้อมูลเสร็จเรียบร้อย";
      //json_encode ("New record created successfully");
    } else {
      echo  "ลบข้อมูลล้มเหลว";
    }
    
    //  echo"end";
    $conn->close();
     }
    catch(mysqli_sql_exception $e ){
      echo $e->getCode();
     }
    ?>