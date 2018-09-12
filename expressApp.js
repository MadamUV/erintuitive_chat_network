'use strict';

const express = require('express');

const app = express();

const port = process.env.PORT || 80;

app.use(express.static(__dirname + "/src/app/"));

app.listen(port, function(req, res){
    res.sendFile("./src/app/app.component.html");
});