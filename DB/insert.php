<?php  

include "database_connection.php";

try{
  $conn = new mysqli($servername, $username, $password, $dbname);
  
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  
  if(!empty($_FILES))  {
    $newname =  $_FILES['0']['name'];
  
    if(move_uploaded_file($_FILES['0']['tmp_name'], $newname )){}
  }else{  
        echo 'ไม่มีไฟล์ภาพ';  
  }

$x=$_POST['data'];
$d=json_decode($x);

  $sql = " INSERT INTO `plants` (`ID`, `thainame`, `endgame`, `properties`, `picture`)
  VALUES ('{$d->ID}',
         '{$d->thainame}',
         '{$d->endgame}',
        '{$d->properties}',
        '{$newname}');";


 
 //  echo "start";
 if ($conn->query($sql)== TRUE) {
  echo "111";
} else {
  echo "1064";
}

$conn->close(); 
}
catch ( mysqli_sql_exception $e){
  echo $e->getCode();
}

?>
