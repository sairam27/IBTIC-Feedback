<?php
include '_inc/dbconn.php';
include 'adminfun.php';
$db= new DB_functions();
$response = array("success" => FALSE);
function array_median($array) {
  // perhaps all non numeric values should filtered out of $array here?
  $iCount = count($array);
  if ($iCount == 0) {
      $a = 0;
      return $a;
  }
    
  // if we're down here it must mean $array
  // has at least 1 item in the array.
  $middle_index = floor($iCount / 2);
  sort($array, SORT_NUMERIC);
  $median = $array[$middle_index]; // assume an odd # of items
  // Handle the even case by averaging the middle 2 items
  if ($iCount % 2 == 0) {
    $median = ($median + $array[$middle_index - 1]) / 2;
  }
  return $median;
}

if(!empty($_GET['id'])){
        $var = mysqli_real_escape_string($con,$_GET['id']);
        $sql="select * from admin where name='$var'";
        $result=mysqli_query($con,$sql);
        $rws=  mysqli_fetch_array($result);
        if($rws['name']==$var){
            for($a=1;$a<=10;$a++){
                $sai = 'p'.$a;
                $sql="select AVG($sai) as average from feedback where $sai != 8";
                 $result=mysqli_query($con,$sql);
                foreach($result as $row) {
                    global ${'r'.$a};
                    ${'r'.$a} = round($row['average'],4);
                }
            }
             for($a=1;$a<=10;$a++){
                $sai = 'p'.$a;
                $sql="select SUM($sai) as average from feedback where $sai != 8";
                 $result=mysqli_query($con,$sql);
                foreach($result as $row) {
                    global ${'x'.$a};
                    ${'x'.$a} = round($row['average'],4);
                }
             }
            for($a=1;$a<=10;$a++){
                $sai = 'p'.$a;
                $sql="select $sai from feedback where $sai != 8";
                 $result=mysqli_query($con,$sql);
                 global ${"column".$a};
                ${"column".$a} =array();
                while($row = mysqli_fetch_array($result)){
                ${"column".$a}[] = $row[$sai];
                }
             }
            
            $raghu = array();
            for($a=1;$a<=10;$a++){
              $raghu[] =  array_median(${"column".$a}); 
                
            }
            $sai =array();
            $sai[0]=$r1;
            $sai[1]=$r2;
            $sai[2]=$r3;
            $sai[3]=$r4;
            $sai[4]=$r5;
            $sai[5]=$r6;
            $sai[6]=$r7;
            $sai[7]=$r8;
            $sai[8]=$r9;
            $sai[9]=$r10;
            $sai[10]=$x1;
            $sai[11]=$x2;
            $sai[12]=$x3;
            $sai[13]=$x4;
            $sai[14]=$x5;
            $sai[15]=$x6;
            $sai[16]=$x7;
            $sai[17]=$x8;
            $sai[18]=$x9;
            $sai[19]=$x10;
            $g=0;
            for($n=20;$n<=29;$n++){
                $sai[$n]=$raghu[$g];
                $g++;
            }
            $highmean = array();
            $highsum = array();
            for($i=0;$i<10;$i++){
            $highmean[$i]=$sai[$i]; 
            }
            $maxs = array_keys($highmean, max($highmean));
            for($i=10;$i<20;$i++){
            $highsum[$i]=$sai[$i];
            }
            $maxs1 = array_keys($highsum, max($highsum));
            $maxs2 = array_keys($raghu, max($raghu));
            $sai["mean"] = $maxs;
            $sai["sum"] = $maxs1;
            $sai["median"] = $maxs2;
            $sai["success"] = TRUE;
            $sai["message"] = "Succcess Retrival";
            echo json_encode($sai);
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