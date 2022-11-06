//import/require express so we can use it to create our application
const express = require("express");

// adding cors to our app to allow traffic from other domains
// install this first, via 'npm i cors'
const cors = require("cors")

//run express to create an express app and store it in the variable named app
const app = express();

//let express know that it is going to get JSON sent to it at some point in a request
app.use(express.json());

//creating a variable represents the port we want our app to listen on
const port = 5000;

// here is where we will turn on cors; this is the loosest policy, allow traffic from all domains...
app.use( cors() )

// add a default route
app.get('/', function (req, res) {
res.send('You have reached the top-level route with a GET');
})

const studentRouter = require("./routes/student.routes")
app.use('/api', studentRouter);

//basically fire up the express app.
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})