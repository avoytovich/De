const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const index = require("./routes/index");

const port = process.env.PORT || 3001;

/**
 * Cors setup
 * @type {{credentials: boolean, methods: string, exposedHeaders: string[], origin: boolean}}
 */
const corsOption = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  exposedHeaders: ["x-auth-token"],
};
app.use(cors(corsOption));

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1/", index);

app.listen(port, () => console.log(`Server is running on port ${port}`));

module.exports = app;
