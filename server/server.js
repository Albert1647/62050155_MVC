const path = require('path');


const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const productRoute = require('./routes/products');
const healthRoute = require('./routes/health');

app.use(express.static(path.join(__dirname, 'public')));

app.use(productRoute);
app.use(healthRoute);

const serverPort = 3000;

app.listen(serverPort);

console.log("server is started")