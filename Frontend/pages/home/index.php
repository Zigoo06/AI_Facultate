<?php
// Initialize the session
session_start();
//verificare daca nu exista user logat
if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
  header("location: ../login-page/login.php");
  exit;
}
?>

<!DOCTYPE html>
<html>

<head>
  <title>Home</title>
  <link rel="icon" href="../../common/images/favicon.png" />
  <link rel="stylesheet" href="styles.css" />
  <script src="index.js"></script>
</head>

<body>
  <iframe src="../../common/header/header.html" frameborder="0" class="header"></iframe>
  <div class="background"></div>
  <div class="footer"></div>
</body>

</html>