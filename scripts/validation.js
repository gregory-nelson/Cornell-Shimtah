$(document).ready(function () {
  $("#join").on("submit", function() {
    var formValid = true;

    if( $("#name").prop("validity").valid ) {
        $("#nameError").addClass("hidden");
    }
    else {
      $("#nameError").removeClass("hidden");
      formValid = false;
    }
    if( $("#email").prop("validity").valid ) {
        $("#emailError").addClass("hidden");
    }
    else {
      $("#emailError").removeClass("hidden");
      formValid = false;
    }
    if( $("#class").val() === "" ) {
     $("#yearError").removeClass("hidden");
       formValid = false;
   }
   else {
       $("#yearError").addClass("hidden");
   }
    return formValid;

  });
});
