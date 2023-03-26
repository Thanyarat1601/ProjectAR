<?php
include "database_connection.php";

try {
    // Check if POST data exists
    if (!isset($_POST['data'])) {
        throw new Exception('Missing POST data');
    }

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $x = $_POST['data'];
    $d = json_decode($x);

    // Check if JSON data is valid
    if ($d === null) {
        throw new Exception('Invalid JSON data');
    }

    // Check if required fields exist
    if (!isset($d->thainame) || !isset($d->engname) || !isset($d->properties) || !isset($d->ID)) {
        throw new Exception('Missing required fields');
    }

    $sql = "SELECT * FROM tree WHERE ID = {$d->ID} ";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $NDK = $row['picture'];
    } else {
        $NDK = "";
    }

    // Create uploads directory if not exist
    if (!file_exists('uploads/')) {
        mkdir('uploads/');
    }

    // Check if there is a new file uploaded
    if (isset($_FILES['0']) && $_FILES['0']['error'] == UPLOAD_ERR_OK) {
        $target_dir = "uploads/";
        $target_file = $target_dir . basename($_FILES["0"]["name"]);
        $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

        // Allow only image files
        if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif") {
            echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
            exit;
        }
        if (!empty($NDK) && file_exists($NDK)) {
            unlink($NDK);
        }
        // Move the new file to the server
        $newname = $target_file;
        if (!move_uploaded_file($_FILES['0']['tmp_name'], $target_file)) {
            throw new Exception('Failed to move uploaded file');
        }
        $newname = $target_dir . basename($_FILES["0"]["name"]);
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
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}

?>
