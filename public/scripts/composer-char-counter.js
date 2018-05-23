/* displays the number of characters remaining within the input field*/

//DOCUMENT READY
$(document).ready(function() {
  //selector binds the event to the handler
  $('.new-tweet').on('keyup', '#newTweet textarea', function(){

// var minLength = 0;
var maxLength = 140;


var length = $(this).val().length;
length = maxLength - length;

var counter1 = $(this).siblings('span');

counter1.text(length);

if(length < 0)
  {
    counter1.css("color", "red");
  } else {
counter1.css("color", "black");
  }


});
});
