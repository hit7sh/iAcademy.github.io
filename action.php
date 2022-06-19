<?php
$server_name = "localhost";
$username = "root";
$password = "";
$database_name = "iAcademyDatabase";

$conn = mysqli_connect($server_name, $username, $password, $database_name);
if (!$conn) {
    die("Connection Failed :(");
}

if (isset($_POST['save'])) {
    $username = $_POST['Name'];
    $email = $_POST['Email'];
    $phno = $_POST['Number'];
    $branch = $_POST['Branch'];
    $year = $_POST['Year'];
    $college = $_POST['College'];

    $sql_query = "INSERT INTO students (username, email, phno, branch, year, college) 
      VALUES ('$username', '$email', '$phno', '$branch', '$year', '$college')";

    if (mysqli_query($conn, $sql_query)) {
        echo "successfully entered into database";
    } else {
        echo "Error with database!! ";
    }
    mysqli_close($conn);
}
