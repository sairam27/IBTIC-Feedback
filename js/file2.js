(function ($) {
    "use strict";
    var id = localStorage.getItem("id");
    $("#topic1").html("1. "+localStorage.getItem("p"+1));
    $("#topic2").html("2. "+localStorage.getItem("p"+2));
    $("#topic3").html("3. "+localStorage.getItem("p"+3));
    $("#topic4").html("4. "+localStorage.getItem("p"+4));
    $("#topic5").html("5. "+localStorage.getItem("p"+5));
    $("#topic6").html("6. "+localStorage.getItem("p"+6));
    $("#topic7").html("7. "+localStorage.getItem("p"+7));
    $("#topic8").html("8. "+localStorage.getItem("p"+8));
    $("#topic9").html("9. "+localStorage.getItem("p"+9));
    $("#topic10").html("10. "+localStorage.getItem("p"+10));
    if (id == null ){
    location.assign("index.html");
    alert("Dude You think u can access pages without login hahah...!");
    }
    $("#left").each(function(index){
       $(this).on('click',function(){
        location.assign("main.html");
       });  
    });
    $('.sai').barrating('show',{
        theme: 'bars-1to10',
        showvalues: true,
        showSelectedrating: false
    });

    for(var a=1;a<=10;a++){ 
    var x =JSON.parse(localStorage.getItem(a));
        if(x){
           var y = x[1];
        $('#rate'+a).barrating('set', Math.floor(y));
        $("#rate"+a).barrating('readonly',true);    
        $("#rate"+a).val(y);    
        }else{
           $("#rate"+a).val(1);
            $('#rate'+a).barrating('set', 1);    
        }
      
    }
var a=0;
    $(document).on('click','.sabut',function(){
        $("#spin").removeClass("fa-check");
        $(this).find("p").html("Submitting");
        $("#spin").addClass("fa-spinner fa-spin");
        var id = localStorage.getItem("id");
        var  p = [];
        p[0] = id;
        for(var a=1;a<=10;a++){
            var z = JSON.parse(localStorage.getItem(a));
            var x = z[0];
            if(x && (z[1]!=null)){
            p[a] = z[1];
            }else{
                p[a]=8;
            }
        }
        localStorage.setItem("p",p);
        var jsonString = JSON.stringify(p);
        $.get("submit.php",{data: jsonString},function(dat){
           var result= JSON.parse(dat);
            if(result.success){
              $("#spin").removeClass("fa-spinner fa-spin");
              $(".sabut").find("p").html("Submitted");
             $("#spin").addClass("fa-check");
               localStorage.clear();
                location.assign("index.html");
            }else{
                $.alert("Failed to submit",{type:'success',closeTime: 2500});
            }
        });
        
    });
})(jQuery);