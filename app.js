const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
// const contacts = require("./models/contacts.json");
const logger = require("morgan");

const { contactsRouter } = require("./routes/api/contacts");

const app = express();

// app.use(async (req, res, next) => {
//   const { method, url } = req;
//   const date = moment().format("DD-MM-YYYY_hh:mm:ss");
//   await fs.appendFile("server.log", `\n${method} ${url} ${date}`);
//   next();
// });

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

module.exports = app;
