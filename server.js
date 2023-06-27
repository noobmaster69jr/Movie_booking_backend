const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const serverConfig = require("./configs/server.config");
const dbConfig = require("./configs/db.config");

const app = express();

app.use(bodyParser.json());


mongoose.connect("mongodb://localhost:27017/mba_db")
const db = mongoose.connection
db.on("error", () => console.log("Can't connect to DB"));
db.once("open", () => {
  console.log("Connected to Mongo DB");

});


require("./routes/movie.routes")(app);

app.get("/", (req, res) => {
  res.send("Inside Movie Booking Application");
});

app.listen(serverConfig.PORT, () => {
  console.log(`Application running on port ${serverConfig.PORT}`);
});
