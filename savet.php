<?php
include '_inc/dbconn.php';
include 'adminfun.php';
$db= new DB_functions();
$response = array("success" => FALSE);
if(!empty($_GET['array'])){
        $data = json_decode($_GET['array']);
        $var  = mysqli_real_escape_string($con,$data[0]);
        $main_data=array();
        for($c=1;$c<count($data);$c++){
            $Pid = mysqli_real_escape_string($con,$data[$c]->Pid);
            $Topic =  mysqli_real_escape_string($con,$data[$c]->Topic);
            $main_data[$c-1] = array();
            $main_data[$c-1]['Pid'] = $Pid;
            $main_data[$c-1]['Topic'] = $Topic;
        }
        $sql="select * from admin where name='$var'";
        $result=mysqli_query($con,$sql);
        $rws=  mysqli_fetch_array($result);
        $result2 = "";
        $rest3 = "";
        $rest6 = "";
        $rest7 = "";
        $check = true;
        if($rws['name']==$var){
            for($e=0;$e<count($data)-1;$e++){
                $pid = $main_data[$e]['Pid'];
                 $p = 'p'.$pid;
                $topic = $main_data[$e]['Topic'];
                 $sql="select Pid from topics where Pid='$p'";
                 $result=mysqli_query($con,$sql);
                 if(mysqli_num_rows($result)>0){
                     $sql="update topics set Topic ='$topic' where Pid='$p'";
                     $result2=mysqli_query($con,$sql);
                 }else{
                     $sql="Insert into topics(Pid,Topic) values('$p','$topic')";
                     $rest3=mysqli_query($con,$sql);
                 }    
                if(isset($result2) || isset($rest3)){
                    $check=true;
                }else{
                    $check=false;
                }
            }
            if($check){
                $response["success"] = TRUE;
                $response["message"] = "Successfully submited";
                echo json_encode($response);     
            }else{
                $response["success"] = FALSE;
                $response["message"] = "Failed to save";
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
?>