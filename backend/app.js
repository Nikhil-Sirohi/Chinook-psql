const express = require("express");
const cors = require("cors");
require("dotenv").config();

const albumRoutes = require("./routes/albumRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/albums", albumRoutes);

module.exports = app;
