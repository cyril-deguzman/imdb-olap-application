const express = require('express');
const path = require('path');
const routes = require("./routes/routes.js");
const db = require("./models/database");

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, 'build')));

db.connect();
db.query("SELECT count(*) AS total_count FROM fact_table");

app.use("/", routes);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(port, () => console.debug("app listening at port " + port));