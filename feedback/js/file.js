(function ($) {
    var id = localStorage.getItem("id");
    if(id==null ){
    location.assign("index.html");
    alert("Dude You think u can access pages without login hahah...!");
    }
     $('#rate').barrating('show', {
            theme: 'bars-1to10'
        });
    function sai(){
        var presentationid = parseInt($(".one p").text());
        var rate1 = parseInt($("#rate").val());
        var array=[presentationid,rate1]; 
        var present = presentationid; 
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
            sai();
            
        }
    var rate1 = parseInt($("#rate").val());
    function sairam(id){
        switch(id){
            case 1:$(".one h5").html("Robotic Decision Making Using Deep learning based Computer vision");
                $(".one h5").css('font-size','14px');
                break;
            case 2: $(".one h5").html("LOAN LIFE-CYCLE MANAGEMENT SYSTEM (LLMS)");$(".one h5").css('font-size','14px');
                break;
                case 3: $(".one h5").html("SIVA-SBI Intelligent Voice Assistant");$(".one h5").css('font-size','14px'); 
                break;
                case 4: $(".one h5").html("A predictive Analytics Solution designed for strengthening the credit monitoring practices in banks and other financial institutions");
                        $(".one h5").css('font-size','12px');
                break;
                case 5: $(".one h5").html("UPI on NFC");$(".one h5").css('font-size','14px'); 
                break;
                case 6: $(".one h5").html("Integrated Risk and finance using Oracle Financial Services Analytical Applications(OFSAA) platform");$(".one h5").css('font-size','14px'); 
                break;
                case 7: $(".one h5").html("Financial Inclusion for Masses");$(".one h5").css('font-size','14px'); 
                break;
                case 8: $(".one h5").html("UCO NetAssist");$(".one h5").css('font-size','14px'); 
                break;
                case 9: $(".one h5").html("Big Data Applications for Banks");$(".one h5").css('font-size','14px'); 
                break;
                case 10: $(".one h5").html("UCO SECURE-Mobile App");$(".one h5").css('font-size','14px'); 
                break;
        }
    }
    
    $("#right").each(function(index){
       $(this).on('click',function(){
        var x = parseInt($(".one p").text());
        if(x==10){location.assign("overall.html");}   
        sai();     
        if(x>=10)return false;   
        var resu = x+1;
        if(resu==10)$(".submit1").show();   
        $(".one p").html(resu);
        sairam(resu);  
        var a =JSON.parse(localStorage.getItem(resu));   
        if(a){
           $("#rate").val(a[1]);
        $('#rate').barrating('set', a[1]);
        }else{
            $("#rate").val(null);
            $('#rate').barrating('clear');    
            sai();
        }
       });  
    });
    $("#right1").each(function(index){
       $(this).on('click',function(){
        var x = parseInt($(".one p").text());
           if(x==10){location.assign("overall.html");}
           
           sai();  
        if(x>=10)return false;
         
        var resu = x+1;
        if(resu==10)$(".submit1").show();   
        $(".one p").html(resu);
        sairam(resu);   
        var a =JSON.parse(localStorage.getItem(resu));   
        if(a){
           $("#rate").val(a[1]);
            $('#rate').barrating('set', a[1]); 
        }else{
            $("#rate").val(null);
            $('#rate').barrating('clear');    
          sai();
        }
       });  
    });
    $("#left").each(function(index){
       $(this).on('click',function(){
        var x = parseInt($(".one p").text());
        sai();     
        if(x<=1)return false;   
        var resu = x-1;
        if(resu<10)$(".submit1").hide();     
        $(".one p").html(resu);
        sairam(resu);   
        var a =JSON.parse(localStorage.getItem(resu));   
        if(a){
            $("#rate").val(a[1]);
            $('#rate').barrating('set', a[1]);    
            sai();
        }else{
            $("#rate").val(null);
            $('#rate').barrating('clear');    
            sai();
        }   
       });  
    });
     $(document).on('click','#logout',function(){
        localStorage.clear();
        location.assign("index.html");
    });
   
    
    
})(jQuery);