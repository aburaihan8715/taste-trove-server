const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const data = require("./data/data.json");

// middleware
app.use(cors());

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// home route
app.get("/", (req, res) => {
  res.send("Hello World From Home Route!");
});

app.get("/users", (req, res) => {
  res.send(data);
});
