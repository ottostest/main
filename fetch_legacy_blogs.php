<?php
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT title, SUBSTRING(content, 1, 100) AS excerpt FROM blogs ORDER BY date DESC LIMIT 5 OFFSET 1";
$result = $conn->query($sql);

$blogs = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $blogs[] = $row;
    }
}

echo json_encode($blogs);

$conn->close();
?>
