const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    console.log(req.bodyParser.cityName);
});

/*
app.get("/", function(req, res){
    //res.send("WOW");
    const url = "https://APILINK"
    https.get(url, function(response){
        console.log(response); //this will get the json

        response.on("data", function(data){
            console.log(data);

            const weatherData = JSON.parse(data);
            console.log(weatherData); //creates object from JSON
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            res.write("<p>The weather is currently" + weatherDescription + "</p>");

            res.write("<h1>The Temperature is " + temp + " degrees Celcius</h1>");
            res.send();
        })
    });


});

app.listen(3000, function(){
    console.log("serber is running on port 3000.");
});

*/