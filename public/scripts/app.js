function createTweetElement(tweet) {
  let $tweet = $('<article>').addClass('tweet');

  //construct these new elements with these new values
  $tweet.html(
    `
    <div class="header">
        <div class="icon"><img class="avatar" src="${tweet.user.avatars.small}"></div>
        <div class="username"><b>${tweet.user.name}</b></div>
        <div class="userHandle"> ${tweet.user.handle}</div>
    </div>
    <div class="text">${tweet.content.text}</div>
    <div class="footer">
      <div class="time">10 days ago
      <div class="share"><i class="fas fa-flag"></i> <i class="fas fa-retweet"></i> <i class="fas fa-heart"></i>
</div>
      </div>
    </div>`);
  return $tweet;
}

//render the created tweets
function renderTweets(tweets) {
  console.log('render')
  $('.all-tweets').html('');
  tweets.forEach((tweet) => {
    var oneTweet = createTweetElement(tweet);
    $('.all-tweets').prepend(oneTweet);
  });
}


//load loadTweets from the specified url
    function loadTweets() {
        $.ajax({
          url: 'http://localhost:8080/tweets',
          method: 'GET',
          success: function(data) {
            console.log('Success: ', data);
            renderTweets(data);
          }
        });
    }

function formValidation(){
  var msg;

  var resp = document.forms["newTweet"]["text"].value;

    if (resp === 0 || resp === "") {
        msg = "Uh Oh! Looks like you forgot to enter a message!";
        document.getElementById("err").innerHTML = msg;

    }else if (resp.length > 140) {
      msg = "140 characters or less!";
      document.getElementById("err").innerHTML = msg;
    }else {
      document.getElementById("err").innerHTML = "";
    }
}

$(document).ready(function() {
  loadTweets();
  $('#newTweet').submit(function() {
    event.preventDefault();

    var data = $(this).serialize();
    $('#text').val('');


    $.post('tweets', data, function (response) {
      renderTweets(response);
      $('#text').val('');
    });


  });
  $( "#compose" ).click(function() {
    $( ".new-tweet" ).slideToggle( "slow", function() {
    });
  });
});
