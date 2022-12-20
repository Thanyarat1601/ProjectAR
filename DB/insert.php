<?php  

include "database_connection.php";


  if(!empty($_FILES))  {
    $newname =  $_FILES['0']['name'];
  
    if(move_uploaded_file($_FILES['0']['tmp_name'], $newname )){}
  }else{  
        echo 'ไม่มีไฟล์ภาพ';  
  }

$x=$_POST['data'];
$d=json_decode($x);

  $sql = "INSERT INTO `tree`(`ID`, `thainame`, `engname`, `properties`, `picture`)
  VALUES ('{$d->ID}',
        '{$d->thainame}',
        '{$d->engname}',
        '{$d->properties}',
        '{$newname}');";


 try{
 //  echo "start";
 if ($conn->query($sql)== TRUE) {
  echo "111";
} else {
  echo "1064";
}

$conn->close(); 
}catch ( mysqli_sql_exception $e){
  echo $e->getCode();
}

?>
