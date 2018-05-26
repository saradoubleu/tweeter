"use strict";

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();

//import mongodb
const MongoClient = require("mongodb").MongoClient;
//sets up connection to the local db
const MONGODB_URI = "mongodb://localhost:27017/tweeter";
// // The in-memory database of tweets. It's a basic object with an array in it.
// const db = require("./lib/in-memory-db");
//


// //parses json files
app.use(bodyParser.urlencoded({ extended: true }));
//use static files in express
app.use(express.static("public"));

//Connects to mongodb
MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }
//print connected to... in the console
  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  // The `data-helpers` module provides an interface to the database of tweets.
  // This simple interface layer has a big benefit: we could switch out the
  // actual database it uses and see little to no changes elsewhere in the code
  // (hint hint).
  //
  // Because it exports a function that expects the `db` as a parameter, we can
  // require it and pass the `db` parameter immediately:
  const DataHelpers = require("./lib/data-helpers.js")(db);
  // The `tweets-routes` module works similarly: we pass it the `DataHelpers` object
// so it can define routes that use it to interact with the data layer.
  const tweetsRoutes = require("./routes/tweets")(DataHelpers);

  // Mount the tweets routes at the "/tweets" path prefix:
  app.use("/tweets", tweetsRoutes);
  app.listen(PORT, () => {
    //log this to the console
    console.log("Example app listening on port " + PORT);
  });
});
