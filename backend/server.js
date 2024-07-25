const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config();

const { PORT } = require("./config/config.js");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
