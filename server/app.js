const cors = require("cors");
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const routes = require("./routes/routes.js");
const db = require("./models/database");

const app = express();
const port = 3000;

const corsOptions = {
  origin: "http://localhost:8080",
  credentials: true,
};

db.connect();

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'build')));

app.use(`/api`, routes);

app.listen(port, () => console.debug("app listening at port " + port));