<?php
error_reporting(E_ALL ^ E_DEPRECATED);
$serverName="localhost";
$dbusername="root";
$dbpassword="0143";
$dbname="feedback";
$con=mysqli_connect($serverName,$dbusername,$dbpassword)/* or die('the website is down for maintainance')*/;
mysqli_select_db($con,$dbname) or die(mysqli_error($con));
?>