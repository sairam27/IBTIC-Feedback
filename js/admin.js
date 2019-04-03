(function($){
    var n = localStorage.getItem("id");
    var topics=1;
    if(n==null){
        alert("HAHAHHAHAHA");
        location.assign("adminlogin.html");
    }
    $("#sortable").sortable();
    
    invalid_fields_on_page=  0;
    $("#loginForm").hide();
    $("#cios").hide();
    $("#fed").hide();
    $("#resut").hide();
    $("#topic").hide();
    
    $(document).on('click','#addtop',function(){
        $("#cios").hide();
        $("#fed").hide();
        $("#loginForm").hide();
        $("#resut").hide();
        $("#topic").toggle();
        $("#signup-message").hide();
    });
    $(document).on('click','#additem',function(){
        var row='';
        row+='<li><span class="fa fa-align-justify"></span><input  class="form-control email" id="top'+ ++topics +'" type="text" autocomplete="off" /></li>';
        $("#sortable").append(row);
    });
    $(document).on('click','#sortable li input',function(){
    $('#sortable li input').removeClass('selected');
    $(this).addClass('selected');
    });
    $(document).on('click','#edititem',function(){
        var a = $("#sortable").find("li input.selected").val();
        alert(a);
    });
    $(document).on('click','#deleteitem',function(){
        var a = $("#sortable").find("li input.selected").parent().remove();
    });
    $('#saveitem').each(function(index){
    $(this).on('click',function(){
        $("#sortable li input").each(function(){
            var x = $(this).parent().index();
            var valu = $(this).val();
            var b=  [x+1,valu];
            localStorage.setItem((x+1),JSON.stringify(b));
        });
        var sai = localStorage.getItem("id");
        var m=[];
        m[0]=sai;
        for(var i=1;i<=$("#sortable li").length;i++){
            var z = JSON.parse(localStorage.getItem(i));
            var pid=z[0];
            var topic = z[1];
            var a = JSON.stringify(z);
            m[i]=a;
            localStorage.setItem("m",m);
            var n= JSON.stringify(m);
            console.log(n);
        }
        /*$.get("savet.php",{id:sai,array:z},function(data){
            var result = JSON.parse(data);
            if(result.success)
                {
                    alert("Saved Successfully");
                }
            else{
                alert("Problem Saving...!");
            }
        });*/
    });
    });
    $(document).on('click','#delete',function(){
        $(this).find(".register15").removeClass('has-error').addClass('has-success');
        $(this).find(".register15").addClass('glyphicon-refresh').addClass('glyphicon-refresh-animate');
        $(".cso tbody").find('tr').each(function(){
           var row = $(this);
           if (row.find('input[type="checkbox"]').is(':checked')) {
            var cemail = row.find(".cemail").text();
            var sai = localStorage.getItem("id");   
             $.get("delete.php",
                    {
                    id:sai,
                    cemail:cemail
                    },function(data)
                    {
                        var result = JSON.parse(data);
                        if(result.success)
                        {
                            var message1="CIO deleted successfully"
                            row.remove();
                            $('#signup-message9').html(message1);
                            $(".register15").removeClass('has-error').addClass('has-success').removeClass('glyphicon-remove');
                            $(".register15").removeClass('glyphicon-refresh').addClass('glyphicon-ok').removeClass('glyphicon-refresh-animate');
                        }else
                        {
                             $(".register15").removeClass('has-success').addClass('has-error');
                $(".register15").removeClass('glyphicon-refresh').addClass('glyphicon-remove').removeClass('glyphicon-refresh-animate');
                            $('#signup-message9').html(result.message);
                        }
                    });  
        } 
        });
    });
    $(document).on('click','#addcio',function(){
        $("#cios").hide();
        $("#fed").hide();
        $("#resut").hide();
         $("#loginForm").toggle();
        $("#topic").hide();
    });
    $(document).on('click','#logout',function(){
        localStorage.clear();
        location.assign("adminlogin.html");
    });
    $(document).on('click','#res',function(){
        $("#cios").hide();
        $("#fed").hide();
        $("#loginForm").hide();
        $("#resut").toggle();
        $("#topic").hide();
        $("#signup-message").hide();
        var content = '';
        $(this).find(".register14").removeClass('has-error').addClass('has-success');
        $(this).find(".register14").addClass('glyphicon-refresh').addClass('glyphicon-refresh-animate');
        $.get("adminres.php",{id:localStorage.getItem("id")},function(data){
            var result=JSON.parse(data);
            if(result.success){
                var content='';
                content += '<tr>';
            content += '<td>Mean</td>';
            content += '<td>'+ result['0'] +'</td>';
            content += '<td>'+ result['1'] +'</td>';
            content += '<td>'+ result['2'] +'</td>';
            content += '<td>'+ result['3'] +'</td>';
            content += '<td>'+ result['4'] +'</td>';
            content += '<td>'+ result['5'] +'</td>';
            content += '<td>'+ result['6'] +'</td>';    
            content += '<td>'+ result['7'] +'</td>';
            content += '<td>'+ result['8'] +'</td>';
            content += '<td>'+ result['9'] +'</td>';
            content += '</tr>';
                content += '<tr>';
            content += '<td>Sum</td>';
            content += '<td>'+ result['10'] +'</td>';
            content += '<td>'+ result['11'] +'</td>';
            content += '<td>'+ result['12'] +'</td>';
            content += '<td>'+ result['13'] +'</td>';
            content += '<td>'+ result['14'] +'</td>';
            content += '<td>'+ result['15'] +'</td>';
            content += '<td>'+ result['16'] +'</td>';    
            content += '<td>'+ result['17'] +'</td>';
            content += '<td>'+ result['18'] +'</td>';
            content += '<td>'+ result['19'] +'</td>';
            content += '</tr>';
                content += '<td>Median</td>';
            content += '<td>'+ result['20'] +'</td>';
            content += '<td>'+ result['21'] +'</td>';
            content += '<td>'+ result['22'] +'</td>';
            content += '<td>'+ result['23'] +'</td>';
            content += '<td>'+ result['24'] +'</td>';
            content += '<td>'+ result['25'] +'</td>';
            content += '<td>'+ result['26'] +'</td>';    
            content += '<td>'+ result['27'] +'</td>';
            content += '<td>'+ result['28'] +'</td>';
            content += '<td>'+ result['29'] +'</td>';
            content += '</tr>';  
        $("#resul").html(content);
            var men = '';
             var lenmean = Object.keys(result.mean).length;
             for(var i=0;i<(lenmean);i++){
                 men+='p'+(result.mean[i]+1)+'<br>'
             }
            var su ='';   
            var lensum = Object.keys(result.sum).length;
             for(var i=0;i<(lensum);i++){
                 su+='p'+((result.sum[i]-10)+1)+'<br>'
             }
            var med = '';
              var lenmed = Object.keys(result.median).length;
             for(var i=0;i<(lenmed);i++){
                 med+='p'+(result.median[i]+1)+'<br>'
             }  
        $(".meanres h5").html(men);$(".meanres h5").css('font-size','17px');   
                $(".sumres h5").html(su);$(".sumres h5").css('font-size','17px');   
                $(".medianres h5").html(med);$(".medianres h5").css('font-size','17px');   
                
        $(".register14").removeClass('has-error').addClass('has-success').removeClass('glyphicon-remove');
        $(".register14").removeClass('glyphicon-refresh').addClass('glyphicon-ok').removeClass('glyphicon-refresh-animate');  
            }
        });
    });
    $(document).on('click',"#viewfeedback",function(){
        $("#signup-message").hide();
        $("#cios").hide();
        $("#loginForm").hide();
        $("#resut").hide();
        $("#fed").toggle();
        $("#topic").hide();
        var content = '';
        $(this).find(".register13").removeClass('has-error').addClass('has-success');
        $(this).find(".register13").addClass('glyphicon-refresh').addClass('glyphicon-refresh-animate');
        $.get("adminfeedback.php",{id:localStorage.getItem("id")},function(data){
         var json = jQuery.parseJSON(data);
         var len = Object.keys(json).length;
            var a=0;
            for(var i=0;i<(len-2);i++){
            content += '<tr>';
            content += '<td>' + ++a + '</td>';
            content += '<td class="cemail">' + json[i].CIO + '</td>';
            content += '<td>' + ram(json[i].p1); +'</td>';
            content += '<td>' + ram(json[i].p2); + '</td>';
            content += '<td>' + ram(json[i].p3); + '</td>';
            content += '<td>' + ram(json[i].p4); + '</td>';
            content += '<td>' + ram(json[i].p5); + '</td>';
            content += '<td>' + ram(json[i].p6); + '</td>'; 
            content += '<td>' + ram(json[i].p7); + '</td>';
            content += '<td>' + ram(json[i].p8); + '</td>';
            content += '<td>' + ram(json[i].p9); + '</td>';
            content += '<td>' + ram(json[i].p10); + '</td>';    
            content += '</tr>';
                function ram(sai){
                    if(sai==8){
                        return "null";}
                    else{ return sai;}
                }
            }   
        $("#feedcio").html(content);
        $(".register13").removeClass('has-error').addClass('has-success').removeClass('glyphicon-remove');
        $(".register13").removeClass('glyphicon-refresh').addClass('glyphicon-ok').removeClass('glyphicon-refresh-animate'); 
    });
   });
    $(document).on('click','#listcio',function(){
        $("#signup-message").hide();
        $("#loginForm").hide();
        $("#resut").hide();
        $("#fed").hide();
        $("#topic").hide();
         $("#cios").toggle();
        $(this).find(".register12").removeClass('has-error').addClass('has-success');
        $(this).find(".register12").addClass('glyphicon-refresh').addClass('glyphicon-refresh-animate');
        var content = '';
        $.get("adminlist.php",{id:localStorage.getItem("id")},function(data){
         var json = jQuery.parseJSON(data);
         var len = Object.keys(json).length;
            var b=0;
            for(var i=0;i<(len-2);i++){
            content += '<tr>';
            content += '<td class="cid">' + ++b + '</td>';
            content += '<td class="cemail">' + json[i].cio + '</td>';
            content += '<td class="cpassword">' + json[i].password+ '</td>';
            content += '<td class="cbank">' + json[i].bank + '</td>';
            content += '<td><input type="checkbox"/></td>' ; 
            content += '</tr>';
            }
        $("#allcios").html(content);
        $(".register12").removeClass('has-error').addClass('has-success').removeClass('glyphicon-remove');
        $(".register12").removeClass('glyphicon-refresh').addClass('glyphicon-ok').removeClass('glyphicon-refresh-animate');    
    });
    });
     var e=0,p=0;
    $(document).on('blur','#email',function(){
	var content = $(this).val();
         var message ='';
      var validArray = content.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
       var valid=true;     
    if(content.length == 0){
		valid = false;
		invalid_fields_on_page++;
		console.log("Enter field ");
		message = "Enter Your email"; //made change
	}else if(validArray == null){
		valid = false;
		invalid_fields_on_page++;
		console.log("inalid text input");
		message = "Invalid email";//made change
		//console.log(invalidArray);
	}else{
		 e=1;// No errors!
	}
        $("#signup-message").html(message);
    if(valid){
        $(this).attr('data-validation',true);
        $(this).css('border','');
        $("#signup-message").css('color','green');
    }  else{
        $(this).attr('data-validation',true);
        $(this).css('border','1px solid red');
        $("#signup-message").css('color','red');
    }  
});
    
$(document).on('blur','#password',function(){
	var content = $(this).val();
	var message = '';
	/*Check for punctuation. See if there is a better way*/
	invalidArray = content.match(/[^0-9A-Za-z_ ]/g);
	var valid = true;

	if(content.length == 0){
		valid = false;
		invalid_fields_on_page++;
		console.log("Enter password ");
		message = "Enter Password";
	}else if(invalidArray != null){
		valid = false;
		invalid_fields_on_page++;
		console.log("Enter only Alpgabets, digits and underscore");
		console.log(invalidArray);
		message = "Enter only Alpgabets, digits and underscore";
	}else if(content.length < 4){
		valid = false;
		invalid_fields_on_page++;
		console.log("Password should have atleast 8 characters");
		message = "Password should have atleast 8 characters";
	}else{
		p=1;// No errors!
	}

	$("#signup-message").html(message);

if(valid){
    $(this).css('border','');
    $(this).attr('data-validation',true);
    $("#signup-message").css('color','green');
  }else{
    	$(this).css('border','1px solid red');
    	$(this).attr('data-validation',false);
        $("#signup-message").css('color','red');
  }

});   
    $(document).on('click','.sairam',function(){
        if(e==1 && p==1){
        $("#signup-message").show();    
      var email  = $("#email").val();
      var password = $("#password").val();
      var bank = $("#bank").val();
        $(this).find(".register11").removeClass('has-error').addClass('has-success');
        $(this).find(".register11").addClass('glyphicon-refresh').addClass('glyphicon-refresh-animate');
        $.get("admin.php",{email:email,pass:password,bank:bank},function(data){
            var result = JSON.parse(data);
            if(result.success){
                $("#signup-message").html(result.message);
                $(".register11").removeClass('has-error').addClass('has-success').removeClass('glyphicon-remove');
                $(".register11").removeClass('glyphicon-refresh').addClass('glyphicon-ok').removeClass('glyphicon-refresh-animate');
            }else{
                localStorage.setItem("sai","hello");
                $(".register11").removeClass('has-success').addClass('has-error');
                $(".register11").removeClass('glyphicon-refresh').addClass('glyphicon-remove').removeClass('glyphicon-refresh-animate');
                $("#signup-message").html(result.message);
            }
        });
        }
    });
})(jQuery);