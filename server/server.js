const express = require('express');
const app = express();
const cors = require('cors');
let mongoose = require('mongoose');

require('dotenv').config({path: "./config.env"});
// const port = process.env.PORT || 5000;

//use middlewear
app.use(cors());
app.use(express.json());

//mongobd connection
const connect = require('./db/connection');

//using routes
app.use(require('./routes/route'));
console.log("-------->> 17",connect);




const PORT = process.env.PORT || 5000
app.listen(PORT, function () {
    console.log('Server is running on port ' , PORT);
});

mongoose.connect (process.env.MONGO_URI);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


// app.listen(port,()=> {
//     console.log(`Server is running on port: ${port}`)
//  })
// connect.then(db=> {
//     console.log("-------->> 19",db)
//     if(!db) return  process.exit(1);

// // Listen to http server  
// app.on('error',err => console.log(`Failed to Connect with HTTP Server:${err}`));

// //error in mondb connection

// }).catch(error => {
//     console.log(`Connection Failed..! ${error}`)
// });



    
       

