const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const chefsData = require("./data/chefData.json");

// middleware
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// home route
app.get("/", (req, res) => {
  res.send("Hello World From Home Route!");
});

// chefs routes
app.get("/chefs", (req, res) => {
  res.send(chefsData);
});


