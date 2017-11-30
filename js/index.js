
// Form Validation
$.validator.setDefaults({
	submitHandler: function() {
		alert("submitted!");
	}
});

$().ready(function() {

	// validate signup form on keyup and submit
	$("#signupForm").validate({

		highlight: function(element) {
			$(element).parents("div.input_fields").addClass("error_wrapper");
		},
		unhighlight: function(element) {
			$(element).parents("div.input_fields").removeClass("error_wrapper");
		},
		
		rules: {
			firstname: "required",
			gender: "required",
			dateofbirth: {
				required: true,
			},
			email: {
				required: true,
				email: true
			},
			mobilenumber: "required",
			customerid: "required",
			membership: "required"
		},
		messages: {
			firstname: "Please enter your firstname",
			gender: "Please enter your gender",
			dateofbirth: {
				required: "Please enter your date of birth"
			},
			email: {
				required: "Please enter a valid email address"
			},
			mobilenumber: {
				required: "Please enter your mobile number",
				minlength: "Your mobile number must be at least 10 characters long"
			},
			customerid: "Please enter your customer ID",
			membership: "Please specify your type of membership"
		}
	});

	// propose username by combining first- and lastname
//	$("#username").focus(function() {
//		var firstname = $("#firstname").val();
//		var lastname = $("#lastname").val();
//		if (firstname && lastname && !this.value) {
//			this.value = firstname + "." + lastname;
//		}
//	});
});

// ========================================================================================= //

// Panel Slider
$(document).ready(function() {  
	
	// Desktop
    $('#desktop_click').click(function()
    {
        $("#panel").animate({width:'toggle'},250);     
    });
  
	// Mobile
    $('#mobile_click').click(function()
    {
        $("#panel").animate({height:'toggle'},250);     
    });
});

// ========================================================================================= //

// Icon Toggle for Panel Slider
$(document).ready(function() {
	
	// Desktop
	$(".desktop_swop").on("click", function(){
	  $(this).find($(".desktop_swop a")).toggleClass('close open');
	});
	
	// Mobile
	$(".mobile_swop").on("click", function(){
	  $(this).find($(".mobile_swop a")).toggleClass('up down');
	});		
	
});

// ========================================================================================= //

// Form Reset
function myFunction() {
	document.getElementById("signupForm").reset();
}