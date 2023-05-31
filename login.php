<?php
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

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Check if username or password is empty
    if (empty($username) || empty($password)) {
      echo "error";
    } else {
      // Prepare and execute the query
      $stmt = $conn->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
      $stmt->bind_param("ss", $username, $password);
      $stmt->execute();

      // Check if the query returned a result
      $result = $stmt->get_result();
      if ($result->num_rows > 0) {
        echo "success";
      } else {
        echo "error";
      }

      // Close the statement
      $stmt->close();
    }
  }
}

// Close the database connection
$conn->close();
?>

