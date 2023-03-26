<?php
include "database_connection.php";

try {
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Sanitize user input
    $thainame = mysqli_real_escape_string($conn, $d->thainame);
    $engname = mysqli_real_escape_string($conn, $d->engname);
    $properties = mysqli_real_escape_string($conn, $d->properties);

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
        $target_dir = "uploads/";
        $target_file = $target_dir . basename($_FILES["0"]["name"]);
        $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

        // Allow only image files
        if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif") {
            echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
            exit;
        }

        // Check if the file was uploaded successfully
        if (!is_uploaded_file($_FILES['0']['tmp_name'])) {
            echo "Sorry, there was an error uploading your file.";
            exit;
        }

        if (!empty($NDK) && file_exists($NDK)) {
            unlink($NDK);
        }

        // Move the new file to the server
        $newname = $target_file;
        if (!move_uploaded_file($_FILES['0']['tmp_name'], $target_file)) {
            echo "Sorry, there was an error uploading your file.";
            exit;
        }

        $sql = "UPDATE `tree` SET 
            `thainame` = '{$thainame}',
            `engname` = '{$engname}',
            `properties` = '{$properties}',
            `picture` = '{$newname}'
            WHERE `ID` = {$d->ID} ";
    } else {
        // No new file uploaded, only update the text fields
        $sql = "UPDATE `tree` SET 
            `thainame` = '{$thainame}',
            `engname` = '{$engname}',
            `properties` = '{$properties}'
            WHERE `ID` = {$d->ID} ";
    }

    if ($conn->query($sql) == TRUE) {
        echo "up";
    } else {
        echo "down";
    }

    $conn->close();
} catch (mysqli_sql_exception $e) {
   



?>
