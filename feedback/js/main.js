(function ($) {
    invalid_fields_on_page=  0;
    
   var e=0,p=0
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
	}else if(content.length <=4){
		valid = false;
		invalid_fields_on_page++;
		console.log("Password should have atleast 5 characters");
		message = "Password should have atleast 5 characters";
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
        var email= $(".login").find(".email").val();
        var password= $(".login").find(".password").val();
        $(this).find(".register11").removeClass('has-error').addClass('has-success');
        $(this).find(".register11").addClass('glyphicon-refresh').addClass('glyphicon-refresh-animate');
        $.get("login.php",{email:email,pass:password},function(data){
            var result = JSON.parse(data);
            if(result.success){
                localStorage.setItem("id",result.id);
                $(".register11").removeClass('has-error').addClass('has-success').removeClass('glyphicon-remove');
            $(".register11").removeClass('glyphicon-refresh').addClass('glyphicon-ok').removeClass('glyphicon-refresh-animate');
                location.assign("main.html");
            }else{
                $(".register11").removeClass('has-success').addClass('has-error');
                $(".register11").removeClass('glyphicon-refresh').addClass('glyphicon-remove').removeClass('glyphicon-refresh-animate');
                $("#signup-message").html(result.message);
            }
        });
        }
    });

    
    
})(jQuery);