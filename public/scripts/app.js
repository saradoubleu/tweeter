/*
TEST IF APP IS VULNERABLE TO XSS

 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//Twitter Data
// const data = [{
//   "user": {
//     "name": "Newton",
//     "avatars": {
//       "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//       "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//       "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//     },
//     "handle": "@SirIsaac"
//   },
//   "content": {
//     "text": "If I have seen further it is by standing on the shoulders of giants"
//   },
//   "created_at": 1461116232227
// }, {
//   "user": {
//     "name": "Descartes",
//     "avatars": {
//       "small": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
//       "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
//       "large": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
//     },
//     "handle": "@rd"
//   },
//   "content": {
//     "text": "Je pense , donc je suis"
//   },
//   "created_at": 1461113959088
// }, {
//   "user": {
//     "name": "Johann von Goethe",
//     "avatars": {
//       "small": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
//       "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
//       "large": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
//     },
//     "handle": "@johann49"
//   },
//   "content": {
//     "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
//   },
//   "created_at": 1461113796368
// }];

// //INSERT DATA INTO COLLECTION CALLED TWEETS
// db.tweets.insertOne(
//    {{
//      "user": {
//        "name": "Newton",
//        "avatars": {
//          "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//          "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//        },
//        "handle": "@SirIsaac"
//      },
//      "content": {
//        "text": "If I have seen further it is by standing on the shoulders of giants"
//      },
//      "created_at": 1461116232227
//    }, {
//      "user": {
//        "name": "Descartes",
//        "avatars": {
//          "small": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
//          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
//          "large": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
//        },
//        "handle": "@rd"
//      },
//      "content": {
//        "text": "Je pense , donc je suis"
//      },
//      "created_at": 1461113959088
//    }, {
//      "user": {
//        "name": "Johann von Goethe",
//        "avatars": {
//          "small": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
//          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
//          "large": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
//        },
//        "handle": "@johann49"
//      },
//      "content": {
//        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
//      },
//      "created_at": 1461113796368
//    }
//  }
// )
//TO TEST A IF THE ADDTION WORKED TRY THIS COMMAND IN MONGO - INITIAL OUTPUT WILL BE EMPTY TO DISPLAY IT'S A NEW DB WITH NOTHING IN IT
//db.tweets.find()


//JQuery variable called tweet calls this function and inputs the
// var $tweet = createTweetElement(data);

// //handles the event of submitting a button; can only be attached to forms
// $('#newTweet').submit(function(){
//   //prevents the default behaviour going to a different screen on submit
//   event.preventDefault();
//   console.log($(this).serialize());
//   console.log(this);
// });


function createTweetElement(tweet) {
  let $tweet = $('<article>').addClass('tweet');

  //construct these new elements with these new values
  $tweet.html(
    `<div class="header">
      <div class="username">
        ${tweet.user.name}
      </div>
      <img class="avatar" src="${tweet.user.avatars.small}">
      <div class="userHandle">
        ${tweet.user.handle}
      </div>
      <div class="text">
        ${tweet.content.text}

      </div>
    </div>
    <div class="footer">
      <div class="time">
        10 days ago
        <i class="fab fa-font-awesome-flag" />
        <i class="fas fa-retweet" />
        <i class="fas fa-heart" />
      </div>
    </div>`);

  return $tweet;
}


function renderTweets(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container

  tweets.forEach((tweet) => {
    // if(${tweet.user.content} === null || ${tweet.user.content} === null){
    //
    // }else{
    var oneTweet = createTweetElement(tweet);
    $('.all-tweets').append(oneTweet);
    // }
  });
}


//load the tweets  in this function from new tweet
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

$(document).ready(function() {
  loadTweets();
  // console.log(loadTweets);

  // handles the event of submitting a button;
  // can only be attached to forms
  $('#newTweet').submit(function() {
    //prevents the default behaviour going to a different screen on submit
    event.preventDefault();

    var test = $(this).serialize();
    console.log(test)
});
});
