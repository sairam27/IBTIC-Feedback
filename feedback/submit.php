<?php
include '_inc/dbconn.php';
$response = array("success" => TRUE);
if(!empty($_GET['data'])){
    $data = json_decode($_GET['data']);
    $id = $data[0];
    $sql="SELECT cio from CIO where id = '$id'";
    $result=mysqli_query($con,$sql);
    $rws=  mysqli_fetch_array($result);
    $cio = $rws['cio'];
    $sql="SELECT * FROM feedback where CIO='$cio'";
    $result=mysqli_query($con,$sql);
    $rws1=  mysqli_fetch_array($result);
    $rest3 =false;
    
    if(!empty($rws1)){
   for($a=1;$a<=10;$a++){
    $sai = 'p'.$a;
    $ram = $data[$a];
    $sql="update feedback set $sai='$ram' where CIO='$cio'";
    $result2=mysqli_query($con,$sql);
    }    
    }else{
   for($a=1;$a<=10;$a++){
    $ram = $data[$a];
    $sai = 'p'.$a;   
    $sql="Insert into feedback(CIO,$sai) values('$cio','$ram')";
    $rest3=mysqli_query($con,$sql);   
    }
    }
    if(isset($result2) || isset($rest3)){
                $response["success"] = TRUE;
                $response["message"] = "Successfully submited";
                echo json_encode($response);     
    }else{
        $response["success"] = FALSE;
                $response["message"] = "insertion error";
                echo json_encode($response);
    }
    
}else{
    $response["success"] = FALSE;
                $response["message"] = "error storing data";
                echo json_encode($response);    
}
?>