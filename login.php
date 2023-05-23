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

$error_message = '';

if (isset($_POST['username']) && isset($_POST['password'])) {
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Check if username or password is empty
  if (empty($username) || empty($password)) {
    $_SESSION['error_message'] = "Please enter your username and password.";
    header('Location: login.html');
    exit;
  } else {
    // Prepare and execute the query
    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();

    // Check if the query returned a result
    $result = $stmt->get_result();
    if ($result->num_rows > 0) {
      $_SESSION['logged_in'] = true;
      header('Location: ./DB/indexDB.html');
      exit;
    } else {
      $_SESSION['error_message'] = "Incorrect username or password. Please try again.";
      $_SESSION['error_class'] = "invalid";
      header('Location: login.html');
      exit;
    }
    
    // Close the statement
    $stmt->close();
  }
}

// Close the database connection
$conn->close();
?>
