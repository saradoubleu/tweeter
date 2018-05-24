/* displays the number of characters remaining within the input field*/

//DOCUMENT READY
$(document).ready(function() {
  //selector binds the event to the handler
  //.new-tweet for CLASS and # for name
  //for this form. keyup will trigger the execution of this callback function
  $('.new-tweet').on('keyup', '#newTweet textarea', function() {

    var maxLength = 140;
    var length = $(this).val().length;
    length = maxLength - length;
    //this will target and specify what area of the document to scan
    var counter1 = $(this).siblings('span');

    counter1.text(length);

    if (length < 0) {
      counter1.css("color", "red");
    } else {
      counter1.css("color", "black");
    }
  });
});