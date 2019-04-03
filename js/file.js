(function ($) {
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
    var rate1 = parseInt($("#rate").val());
    function sairam(id){
        switch(id){
            case 1:$(".one h5").html("AI Based Email Segregation/Routing System");
                $(".one h5").css('font-size','14px');
                break;
            case 2: $(".one h5").html("LLMS e-Proposal App");$(".one h5").css('font-size','14px');
                break;
                case 3: $(".one h5").html("Yono");$(".one h5").css('font-size','14px'); 
                break;
                case 4: $(".one h5").html("Personal Electronic card(PEC)");
                        $(".one h5").css('font-size','14px');
                break;
                case 5: $(".one h5").html("Global attestation platform for authentic identities and credentials");$(".one h5").css('font-size','14px'); 
                break;
                case 6: $(".one h5").html("Canara DiYA");$(".one h5").css('font-size','14px'); 
                break;
                case 7: $(".one h5").html("CANDI BRANCH");$(".one h5").css('font-size','14px'); 
                break;
                case 8: $(".one h5").html("UNFIFCATION OF CORE BANKING involving Retail");$(".one h5").css('font-size','14px'); 
                break;
                case 9: $(".one h5").html("Decision Intelligence using satelite big data analytics for agricultural credit lending in india");$(".one h5").css('font-size','14px'); 
                break;
                case 10: $(".one h5").html("TruBot,a multi-skilled Bot that can automate tedious processes and systems in banks");$(".one h5").css('font-size','14px'); 
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