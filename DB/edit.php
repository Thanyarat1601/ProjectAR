<?php
Include "database_connection.php";

try{
  

/*$x = file_get_contents("php://input");*/
$x = $_POST['data'];
$d = json_decode($x);
  $sql = "SELECT * FROM `tree` WHERE `ID` = '{$d->ID}' ";
  $result = $conn->query($sql);
  $NDK = "" ;
    while($r = $result->fetch_assoc()) {
     $NDK = $r['picture'];
    }

    if (unlink($NDK)){  //ลำดับวิธีการอัปเดตข้อมูล/เปลี่ยนรูปภาพ
      if(!empty($_FILES)) {
        $newname =  $_FILES['0']['name'];
      
        if(move_uploaded_file($_FILES['0']['tmp_name'], $newname)){}
      }else{  
            echo 'ไม่มีไฟล์ภาพ';  
      }
           
    $sql = "UPDATE `tree` SET 
      `thainame`  ='{$d->thainame}',
      `endgame`   ='{$d->engname}',
      `properties`='{$d->properties}',
      `picture`='{$newname}'
      WHERE `ID`= '{$d->ID}' ";
    
    if ($conn->query($sql)== TRUE) {
        echo "up";
    } else {
        echo "down";
      }
      
      $conn->close(); 
    
    }else{
      echo ("error");
      }
    }catch ( mysqli_sql_exception $e){
        echo $e->getCode();
      }
 
  ?>