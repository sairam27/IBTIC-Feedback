<?php
include '_inc/dbconn.php';
include 'adminfun.php';
$db= new DB_functions();
$response = array("success" => FALSE);
if(!empty($_GET['id']) && !empty($_GET['array'])){
        $var = mysqli_real_escape_string($con,$_GET['id']);
        $array = mysqli_real_escape_string($con,$_GET['array']);
        $data = json_decode($_GET['array']);
        $sql="select * from admin where name='$var'";
        $result=mysqli_query($con,$sql);
        $rws=  mysqli_fetch_array($result);
        $result1 = "";
        if($rws['name']==$var){
            
            for($a=1;$a<=sizeof($data);$a++){
                
                $d = $data[$a-1];
                echo $d;
            }
            
        /*$sql="select Pid from topics where ";
        $result=mysqli_query($con,$sql);
        if(mysqli_num_rows($result)>0){
            while($rws=  mysqli_fetch_assoc($result)){
            
            }
        }else{
            echo "0 results";
        }*/
            
            for($a=1;$a<=sizeof($data);$a++){
                
                /*$d = $data[$a-1];
                $sql1="INSERT INTO topics(Pid,Topic)VALUES('p$a','$d')";
                $result1=mysqli_query($con,$sql1);*/
            }
        if($result1){
            $response["success"] = TRUE;
            $response["message"] = "saved Successfully..!";
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