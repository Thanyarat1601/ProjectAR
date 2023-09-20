<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "plants";

// Establish database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get search query parameter
$search = isset($_GET['search']) ? $_GET['search'] : '';

// Build SQL query based on search query parameter
if ($search == '') {
  $sql = "SELECT * FROM `new_table`";
} else {
  $sql = "SELECT * FROM new_table WHERE ID LIKE '%{$search}%' OR thainame LIKE '%{$search}%' OR engname LIKE '%{$search}%' OR properties LIKE '%{$search}%' OR treetyyy LIKE '%{$search}%'";
}

// Execute SQL query
$result = $conn->query($sql);

// Build JSON response
$rows = array();
while ($row = $result->fetch_assoc()) {
    // แปลงข้อมูล BLOB เป็น base64
    if (!empty($row['qrcodeofar'])) {
        $row['qrcodeofar'] = base64_encode($row['qrcodeofar']);
    }
    $rows[] = $row;
}
$json_response = json_encode($rows);

// Close database connection
$conn->close();

// Return JSON response
header('Content-Type: application/json');
echo $json_response;
?>
