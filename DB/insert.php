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

  $sql = "INSERT INTO `new_table2` (`ID`, `thainame`, `engname`, `properties`, `picture`,`treetyyy`)
  VALUES ('{$d->ID}',
        '{$d->thainame}',
        '{$d->engname}',
        '{$d->properties}',
        '{$newname}',
        '{$$d->treetyyy}' );";


try{
 //  echo "start";
 if ($conn->query($sql)== TRUE) {
  echo "เพิ่มข้อมูลเรียบร้อย";
} else {
  echo "เกิดข้อผิดพลาดในการเพิ่มข้อมูล";
}

$conn->close(); 
}catch ( mysqli_sql_exception $e){
  echo $e->getCode();
}

?>