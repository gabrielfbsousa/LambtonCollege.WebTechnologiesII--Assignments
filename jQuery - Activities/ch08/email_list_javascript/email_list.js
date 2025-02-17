$(document).ready(function() {
	// add span element after each input elemen
	$(":text, :password").after("<span>*</span>");
		
	// move focus to first text box
	$("#email_1").focus();
	
	// the handler for the click event of a submit button
	$("#email_form").submit(
		function(event) {
			var isValid = true;
			
			// validate the email entry with a regular expression
			var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
			var email = $("#email_1").val();
			if (email == "") { 
				$("#email_1").next().text("This field is required.");
				isValid = false;
			} else if ( !emailPattern.test(email) ) {
				$("#email_1").next().text("Must be a valid email address.");
				isValid = false;
			} else {
				$("#email_1").next().text("");
			} 

			// validate the second email entry
			var email2 = $("#email_2").val();
			if (email2 == "") { 
				$("#email_2").next().text("This field is required.");
				isValid = false; 
			} else if (email !== email2 ) { 
				$("#email_2").next().text("Must equal first email entry.");
				isValid = false;
			} else {
				$("#email_2").next().text("");
			}
			
			// validate the first name entry
			var first_name = $("#first_name").val().trim();
			if (first_name == "") {
				$("#first_name").next().text("This field is required.");
				isValid = false;
			} 
			else {
			 	$("#first_name").val(first_name);
				$("#first_name").next().text("");
			}
			
			// validate the last name entry
			var lastName = $("#last_name").val().trim();
			if (lastName == "") {
				$("#last_name").next().text("This field is required.");
				isValid = false;
			} 
			else {
				$("#last_name").val(lastName);
				$("#last_name").next().text("");
			}
			
			// validate the state entry
			var state = $("#state").val();
			if (state == "") {
				$("#state").next().text("This field is required.");
				isValid = false;
			} else if ( state.length != 2 ) {
				$("#state").next().text("Use 2-character code.");
				isValid = false;
			}
			else {
				$("#state").next().text("");
			}	
			
			//Validate Zipcode entry
			var zipcode = $("#zip").val();
			if(zipcode == ""){
				$("#zip").next().text("This field is required");
				isValid = false;
			} else if (zipcode.length != 5) {
				$("#zip").next().text("Use a 5-character zipcode");
				isValid = false;
			} else {
				$("#zip").next().text("");
			}
						
			// prevent the default action of submitting the form if any entries are invalid 
			if (isValid == false) {
			 	event.preventDefault();
			}
		} // end function
	);	// end submit
}); // end ready