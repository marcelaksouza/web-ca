const http = require('http'); 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(require('./routes/routes.js'));


const server = app.listen(3000, function(){
    console.log("listening to port %s", server.address().port)
});