// const { response } = require("express");
// const { request } = require("express");
const express = require("express");
// const fs = require("fs").promises;
// const moment = require("moment");
//
const morgan = require("morgan");
//
const cors = require("cors");
const contacts = require("./models/contacts.json");

//
//

const logger = require("morgan");
// const cors = require("cors");

const { contactsRouter } = require("./routes/api/contacts");

const app = express();

// app.use(async (req, res, next) => {
//   const { method, url } = req;
//   const date = moment().format("DD-MM-YYYY_hh:mm:ss");
//   await fs.appendFile("server.log", `\n${method} ${url} ${date}`);
//   next();
// });

app.get("/", (request, response) => {
  // console.log(request.url);
  // console.log(request.method);
  // console.log(request.headers);
  response.send("<h2>Home page</h2>");
});

app.get("/contacts", (req, res) => {
  res.json(contacts);
  // res.send(contacts);
});

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

// app.use((req, res) => {
//   res.status(404).json({ message: "Not found" });
// });

// app.use((err, req, res, next) => {
//   res.status(500).json({ message: err.message });
// });

module.exports = app;
