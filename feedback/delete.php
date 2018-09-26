<?php
include '_inc/dbconn.php';
include 'adminfun.php';
$db= new DB_functions();
$response = array("success" => FALSE);
if(!empty($_GET['id']) && !empty($_GET['cemail'])){
        $var = mysqli_real_escape_string($con,$_GET['id']);
        $cemail = mysqli_real_escape_string($con,$_GET['cemail']);
        $sql="select * from admin where name='$var'";
        $result=mysqli_query($con,$sql);
        $rws=  mysqli_fetch_array($result);
        if($rws['name']==$var){
        $sql1="delete from cio where cio='$cemail'";
        $result1=mysqli_query($con,$sql1);
        $sql2="delete from feedback where CIO='$cemail'";
        $result2=mysqli_query($con,$sql2);    
        if($result1 && $result2){
            $response["success"] = TRUE;
            $response["message"] = "deleted Sucessfully";
            echo json_encode($response);
        }else{
            $response["success"] = FALSE;
            $response["message"] = "Unknown Error occured Contact Developer.";
            echo json_encode($response);
        }    
        }else{
            $response["success"] = FALSE;
            $response["message"] = "admin auth failed";
            echo json_encode($response);
        }
}else{
        $response["success"] = FALSE;
            $response["message"] = "parameter missing.!";
            echo json_encode($response);
}