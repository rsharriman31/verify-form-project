$(document).ready( function () {

  $("#contact-form").on(“submit”, function() {
 var valid = true;
  
    if ( $(“#name”).prop(“validity”).valid ) {
     $(“#name_error”).addClass(‘hidden’);
    } else {
     $(“#name_error”).removeClass(‘hidden’);
    valid = false;
    }
 
    if ( $(“#email”).prop(“validity”).valid ) {
     $(“#email_error”).addClass(‘hidden’);
    } else {
     $(“#email_error”).removeClass(‘hidden’);
    valid = false;
    }

  return valid;
  });

});
