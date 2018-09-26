<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
include '_inc/dbconn.php';
class DB_Functions {   
    public function iscioExisted($email){
        $sql="SELECT * FROM CIO WHERE cio='$email'";
        include '_inc/dbconn.php';
        $result=mysqli_query($con,$sql);
        $rws=  mysqli_fetch_array($result);
        if($rws['cio']){
            return true;
        }else return false;
    }
}
?>