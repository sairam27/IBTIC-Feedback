<?php
include '_inc/dbconn.php';
include 'adminfun.php';
$db= new DB_functions();
$response = array("success" => FALSE);
if(!empty($_GET['email']) && !empty($_GET['pass']) && !empty($_GET['bank'])){
    $email = mysqli_real_escape_string($con,$_GET['email']);
    $pass= mysqli_real_escape_string($con,$_GET['pass']);
    $bank = mysqli_real_escape_string($con,$_GET['bank']);
    if($db->iscioExisted($email)){
    $response["success"] = FALSE;
    $response["message"] = "user already existes";
    echo json_encode($response);
    }else{
    $sql="insert into CIO(cio,password,bank) values('$email','$pass','$bank')";
    $sql2="insert into feedback(CIO,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10) values('$email','8','8','8','8','8','8','8','8','8','8')";	
    $result=mysqli_query($con,$sql);
    $result2=mysqli_query($con,$sql2);
    if($result && $result2){
    $response["success"] = TRUE;
    $response["message"] = "Added successfully";
    echo json_encode($response);
    }    
    }
    
}else{
    $response["success"] = FALSE;
    $response["message"] = "Required parameters (name, email or password) is missing!";
    echo json_encode($response);
}

?>