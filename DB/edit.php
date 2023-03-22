<?php
Include "database_connection.php";

try{
  $conn = new mysqli($servername, $username, $password, $dbname);
  
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

/*$x = file_get_contents("php://input");*/
$x = $_POST['data'];
$d = json_decode($x);

$sql = "SELECT * FROM `tree` WHERE `ID`= {$d->ID} ";
  $result = $conn->query($sql);
  $NDK = "" ;
    while($r = $result->fetch_assoc()) {
     $NDK = $r['picture'];
    }
//เอารูปเก่าออก
//เอาข้อมูลรูปใหม่ใส่
  


    if (unlink($NDK)){  //ลำดับวิธีการอัปเดตข้อมูล/เปลี่ยนรูปภาพ 
      if(!empty($_FILES)) {
        $newname =  $_FILES['0']['name'];
      
        if(move_uploaded_file($_FILES['0']['tmp_name'], $newname)){}
      }else{  
            echo 'ไม่มีไฟล์ภาพ';  
      }
      
           
    $sql = "UPDATE `tree` SET 
      `thainame`='{$d->thainame}',
      `engname`='{$d->engname}',
      `properties`='{$d->properties}',
      `picture`='{$newname}'
      WHERE `ID`= {$d->ID} ";
    echo $sql;
    if ($conn->query($sql)== TRUE) {
        echo "up"; echo $sql;
    } else {
        echo "down"; echo $sql;
      }
      
      $conn->close(); 
    
    }else{
      echo "error"; echo $sql;
      }
    }catch ( mysqli_sql_exception $e){
        echo $e->getCode(); echo $sql;
      }

  ?>