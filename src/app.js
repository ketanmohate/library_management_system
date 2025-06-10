let express = require("express");
let bodyparser = require("body-parser");


let app=express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use(express.static("public"));
