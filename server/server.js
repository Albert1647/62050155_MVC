const path = require('path');

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

// define route
const assignment = require('./routes/assignments');

// define diectory
app.use(express.static(path.join(__dirname, 'public')));

// use route
app.use(assignment);

const server_port = 3000;

// expose server on port 3000
app.listen(server_port);

console.log("server is started")