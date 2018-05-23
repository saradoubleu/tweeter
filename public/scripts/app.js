/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];


var $tweet = createTweetElement(tweetData);

console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet);
//takes in tweet JSON and displays it



function renderTweets(){
// loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container

    var $html = $('<div></div>');
  tweets.forEach((tweet)=> {
    var oneTweet = createTweetElement(tweet);
    $('.tweet-container').append($(oneTweet));
}


function createTweetElement (tweet){
 let $tweet = $('<article>').addClass('tweet');
$tweet.html(

      <div class="header">
      <img class="avatar" src="${tweet.user.avatars.small}"" width="80px" height="80px">
      <div class="username">
      ${tweet.user.name}
      </div>
      <div class="userHandle">
      ${tweet.user.handle}
      </div>
      </div>
      <div class="main">
      <div class="text">
      ${tweet.content.text}
      </div>
      </div>
      <div class="footer">
      <div class="time">
      10 days ago
          <i class="fab fa-accessible-icon"></i>
          <i class="fas fa-balance-scale"></i>
          <i class="fas fa-child"></i>
      </div>
      </div>`)
      return $tweet;

}



renderTweets(data);
