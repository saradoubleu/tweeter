"use strict";

// Simulates the kind of delay we see with network or filesystem operations
// const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      db.collection("tweeter").insertOne(newTweet, callback);

      // simulateDelay(() => {
      //   db.tweets.push(newTweet);
      //   callback(db.tweets, false);
      // });
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      db.collection("tweeter").find().toArray(callback);

      // simulateDelay(() => {
      //   const sortNewestFirst = (a, b) => a.created_at - b.created_at;
      //   callback(null, db.tweets.sort(sortNewestFirst));
      // });
    }

  };
}
