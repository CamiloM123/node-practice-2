const express = require("express");
const mongoose = require("mongoose");
const app = express();
const personRoute = require("./src/routes/person.routes");

require("dotenv").config();
const port = 5000 || process.env.PORT;

//Port connection
app.listen(port, () => {
  console.log("Running in the port", port);
});
//Middleware
app.use(express.json());
app.use("/api", personRoute);

mongoose
  .connect(process.env.CONNECTION_STRING_MONGODB)
  .then(() => {
    console.log("Successful connection with MongoDB");
  })
  .catch((err) => {
    console.error(err);
  });

//Project routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});
