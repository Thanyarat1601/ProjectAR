<?php
session_start();

// Connect to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "plants";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['username']) && isset($_POST['password'])) {
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Prepare and execute the query
  $stmt = $conn->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
  $stmt->bind_param("ss", $username, $password);
  $stmt->execute();

  // Check if the query returned a result
  $result = $stmt->get_result();
  if ($result->num_rows > 0) {
    $_SESSION['logged_in'] = true;
    header('Location: indexDB.html');
    exit;
  } else {
    $error_message = 'Incorrect username or password';
  }

  // Close the statement and database connection
  $stmt->close();
  $conn->close();
}
?>