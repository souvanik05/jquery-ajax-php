<?php
header("Access-Control-Allow-Origin: *");
include 'db.php';
$name=$_POST['tweet'];
echo $name;
return $name;
mysqli_close($conn);

?>