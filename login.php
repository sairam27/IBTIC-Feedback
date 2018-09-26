<?php 
        include '_inc/dbconn.php';
        $response = array("success" => TRUE);
        if(!empty($_GET['email']) && !empty($_GET['pass'])){
            $email = mysqli_real_escape_string($con,$_GET['email']);
            $pass= mysqli_real_escape_string($con,$_GET['pass']);
            $sql="SELECT * FROM CIO WHERE cio='$email' and password='$pass'";
            $result=mysqli_query($con,$sql);
            $rws=  mysqli_fetch_array($result);
            $username=  mysqli_real_escape_string($con,$_GET['email']);
            $password=  mysqli_real_escape_string($con,$_GET['pass']);
            if($username==$rws['cio'] && $password==$rws['password']) {
            $response["success"] = TRUE;
            $response["id"] = $rws["Id"];
            $response["message"] = "Logging in";
            echo json_encode($response);
            }
            else{
                $response["success"] = FALSE;
                $response["message"] = "Login credentials are wrong. Please try again!";
                echo json_encode($response);      
            }
            }else{
            $response["success"] = FALSE;
                $response["message"] = "Login credentials are wrong. Please try again!";
                echo json_encode($response);    
        }
            ?>