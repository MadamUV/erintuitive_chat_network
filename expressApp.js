'use strict';

const express = require('express');

const app = express();

const port = process.env.PORT || 80;

app.listen(port, function(req, res){
    res.sendFile("./src/app/app.component.html");
});