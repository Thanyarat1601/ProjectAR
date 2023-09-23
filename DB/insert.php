<?php  
include "database_connection.php";

if (isset($_FILES['imageinput']) && isset($_FILES['qrcodeinput'])) {
    $newname = $_FILES['imageinput']['name'];
    $qrcodeNewname = $_FILES['qrcodeinput']['name'];

    if (move_uploaded_file($_FILES['imageinput']['tmp_name'], $newname) &&
    move_uploaded_file($_FILES['qrcodeinput']['tmp_name'], $qrcodeNewname)) {
    // Upload ไฟล์ภาพและไฟล์ QR Code เรียบร้อย
} else {
    echo 'ไม่สามารถอัปโหลดไฟล์ได้';
}
} else {
echo 'ไม่มีไฟล์ภาพ';
}

$x = $_POST['data'];
$d = json_decode($x);
// รับค่า ENUM จากตาราง treetyyy
$treetyyy = $d->treetyyy;

$sql = "INSERT INTO new_table (ID, thainame, engname, properties, picture, qrcodeofar, treetyyy)
      VALUES ('{$d->ID}',
              '{$d->thainame}',
              '{$d->engname}',
              '{$d->properties}',
              '{$newname}',
              '{$qrcodeNewname}',
              '{$treetyyy}');";  

try {
    if ($conn->query($sql) === TRUE) {
        echo "เพิ่มข้อมูลเรียบร้อย";
    } else {
        echo "เกิดข้อผิดพลาดในการเพิ่มข้อมูล: " . $conn->error;
    }
    $conn->close();
} catch (mysqli_sql_exception $e) {
    echo $e->getCode();
}
?>
