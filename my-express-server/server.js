const express = require("express");

const app = express();

app.get("/", function(request, response){
    //console.log(request);
    response.send("<h1>Hello</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: EMAIL")
});

app.get("/about", function(req, res){
    res.send("My name Jeff")
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});