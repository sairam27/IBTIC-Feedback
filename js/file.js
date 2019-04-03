(function ($) {
    "use strict";
    var id = localStorage.getItem("id");
    if(id==null ){
    location.assign("index.html");
    alert("Dude You think u can access pages without login hahah...!");
    }
     $('#rate').barrating('show', {
            theme: 'bars-1to10',
            showvalues: true,
            showSelectedrating: false
        });
    function sai(x){
        var rate1 = parseInt($("#rate").val());
        var array=[x,rate1]; 
        var present = x; 
        localStorage.setItem(present,JSON.stringify(array));
    }
    var presentationid = parseInt($(".one p").text());
    var a =JSON.parse(localStorage.getItem(presentationid));   
        if(a){
           $("#rate").val(a[1]);
        $('#rate').barrating('set', a[1]);
        }else{
            $("#rate").val(null);
            $('#rate').barrating('clear');
            sai(presentationid);
            
        }
    $.get("topics_client.php",{id:localStorage.getItem("id"),mail:localStorage.getItem("mail")},function(data){
            var json = jQuery.parseJSON(data);
            var len = Object.keys(json).length;
        for(var v=0; v<(len-2);v++){
            var row='';
            var pd = json[v].Pid;
            var topic = json[v].Topic;
            localStorage.setItem(pd,topic);
            }
        sairam(1);
    });
    var rate1 = parseInt($("#rate").val());
    function sairam(id){
        switch(id){
            case 1:$(".one h5").html(localStorage.getItem("p"+1));
                $(".one h5").css('font-size','14px');
                break;
            case 2: $(".one h5").html(localStorage.getItem("p"+2));$(".one h5").css('font-size','14px');
                break;
                case 3: $(".one h5").html(localStorage.getItem("p"+3));
                        $(".one h5").css('font-size','14px'); 
                break;
                case 4: $(".one h5").html(localStorage.getItem("p"+4));
                        $(".one h5").css('font-size','14px');
                break;
                case 5: $(".one h5").html(localStorage.getItem("p"+5));$(".one h5").css('font-size','14px'); 
                break;
                case 6: $(".one h5").html(localStorage.getItem("p"+6));$(".one h5").css('font-size','14px'); 
                break;
                case 7: $(".one h5").html(localStorage.getItem("p"+7));$(".one h5").css('font-size','14px'); 
                break;
                case 8: $(".one h5").html(localStorage.getItem("p"+8));$(".one h5").css('font-size','14px'); 
                break;
                case 9: $(".one h5").html(localStorage.getItem("p"+9));$(".one h5").css('font-size','14px'); 
                break;
                case 10: $(".one h5").html(localStorage.getItem("p"+10));$(".one h5").css('font-size','14px'); 
                break;
        }
    }
    
    $("#right").each(function(index){
       $(this).on('click',function(){ 
        var x = parseInt($(".one p").text());
        if(x==10){location.assign("overall.html");}   
        sai(x);     
        if(x>=10)return false;   
        var resu = x+1;
        if(resu==10)$(".submit1").show();   
        $(".one p").html(resu);
        sairam(resu);  
        var a =JSON.parse(localStorage.getItem(resu));   
        if(a){
           $("#rate").val(a[1]);
        if(a[1]==null)
               $('#rate').barrating('clear'); 
            else
             $('#rate').barrating('set', a[1]);
        }else{
            $("#rate").val(null);
            $('#rate').barrating('clear');    
            sai(resu);
        }
       });  
    });
    $("#right1").each(function(index){
       $(this).on('click',function(){ 
        var x = parseInt($(".one p").text());
           if(x==10){location.assign("overall.html");}
           sai(x);  
        if(x>=10)return false;
        var resu = x+1;
        if(resu==10)$(".submit1").show();   
        $(".one p").html(resu);
        sairam(resu);   
        var a =JSON.parse(localStorage.getItem(resu));   
        if(a){
           $("#rate").val(a[1]);
            if(a[1]==null)
               $('#rate').barrating('clear'); 
            else
             $('#rate').barrating('set', a[1]); 
        }else{
            $("#rate").val(null);
            $('#rate').barrating('clear');    
          sai(resu);
        }
       });  
    });
    $("#left").each(function(index){
       $(this).on('click',function(){
        var x = parseInt($(".one p").text());     
        if(x<=1)return false;   
        var resu = x-1;
        if(resu<10)$(".submit1").hide();     
        $(".one p").html(resu);
        sairam(resu);   
        var a =JSON.parse(localStorage.getItem(resu));   
        if(a){
            $("#rate").val(a[1]);
            if(a[1]==null)
               $('#rate').barrating('clear'); 
            else
             $('#rate').barrating('set', a[1]);    
        }else{
            $("#rate").val(null);
            $('#rate').barrating('clear');    
        }   
       });  
    });
     $(document).on('click','#logout',function(){
        localStorage.clear();
        location.assign("index.html");
    });
   
    
    
})(jQuery);