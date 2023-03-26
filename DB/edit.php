<?php
Include "database_connection.php";

try {
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $x = $_POST['data'];
    $d = json_decode($x);

    $sql = "SELECT * FROM `tree` WHERE `ID` = {$d->ID} ";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $NDK = $row['picture'];
    } else {
        $NDK = "";
    }

    // Check if there is a new file uploaded
    if (isset($_FILES['0']) && $_FILES['0']['error'] == UPLOAD_ERR_OK) {
        $newname = $_FILES['0']['name'];
        // Remove the old file
        if (!empty($NDK) && file_exists($NDK)) {
            unlink($NDK);
        }
        // Move the new file to the server
        move_uploaded_file($_FILES['0']['tmp_name'], $newname);
        $sql = "UPDATE `tree` SET 
            `thainame` = '{$d->thainame}',
            `engname` = '{$d->engname}',
            `properties` = '{$d->properties}',
            `picture` = '{$newname}'
            WHERE `ID` = {$d->ID} ";
    } else {
        // No new file uploaded, only update the text fields
        $sql = "UPDATE `tree` SET 
            `thainame` = '{$d->thainame}',
            `engname` = '{$d->engname}',
            `properties` = '{$d->properties}'
            WHERE `ID` = {$d->ID} ";
    }

    if ($conn->query($sql) == TRUE) {
        echo "up";
    } else {
        echo "down";
    }

    $conn->close();
} catch (mysqli_sql_exception $e) {
    echo $e->getCode();
}
?>
