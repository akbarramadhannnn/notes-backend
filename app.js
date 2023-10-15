require("dotenv").config({ path: `.env` });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./router");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server running on port ${process.env.PORT}`);
});
