//import express from "express";
var express = require("express");

var app = express();

app.listen(4000, () =>{
    console.log("Server running on localhost 4000");
});

// respond with "hello world" when a GET request is made to the homepage

//må koble opp mot mongoose connect og finne databsen vår
//det er i get metoden vi vil hente ting fra mongoose som videre hente ting fra databasen
//server.tsx er her vi kommuniserer med databsen
//det er gjennom en post funksjon vi  må sende inn dataen til databasen etterhvert
app.get('/', function (req, res) {
    res.send('hello world')
  })