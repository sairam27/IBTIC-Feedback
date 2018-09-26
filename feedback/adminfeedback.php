<?php
include '_inc/dbconn.php';
include 'adminfun.php';
$db= new DB_functions();
$response = array("success" => FALSE);
if(!empty($_GET['id'])){
        $var = mysqli_real_escape_string($con,$_GET['id']);
        $sql="select * from admin where name='$var'";
        $result=mysqli_query($con,$sql);
        $rws=  mysqli_fetch_array($result);
        if($rws['name']==$var){
    $sql="select * from feedback";
    $result=mysqli_query($con,$sql);
    $sai =array();
    if($result!=null){
        while($users=mysqli_fetch_assoc($result)){
			$sai[]=$users;
			}
            $sai["success"] = TRUE;
            $sai["message"] = "Succcess Retrival";
			echo json_encode($sai);
        
    }else{
			// user failed to store
            $response["success"] = FALSE;
            $response["message"] = "Unknown error occurred in retrival!";
            echo json_encode($response);
		}	
        }else{
            $response["success"] = FALSE;
            $response["message"] = "admin auth failed";
            echo json_encode($response);
        }
}else{
    $response["success"] = FALSE;
            $response["message"] = "param missing";
            echo json_encode($response);
}
?>