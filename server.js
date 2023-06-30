const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");


const serverConfig = require("./configs/server.config");
const dbConfig = require("./configs/db.config");
const User = require("./models/user.model");
const constants = require("./utils/constants");

const app = express();

app.use(bodyParser.json());


mongoose.connect("mongodb://localhost:27017/mba_db")
const db = mongoose.connection
db.on("error", () => console.log("Can't connect to DB"));
db.once("open", () => {
  
  console.log("Connected to Mongo DB");
  init();
});


require("./routes/movie.routes")(app);
require("./routes/theatre.routes")(app);
require("./routes/auth.routes")(app)
require("./routes/user.routes")(app);

app.get("/", (req, res) => {
  res.status(401).send("Inside Movie Booking Application ");
});

app.listen(serverConfig.PORT, () => {
  console.log(`Application running on port ${serverConfig.PORT}`);
});


async function init() {
  try {
    const user = await User.create({
      name: "admin",
      userId: "admin",
      email: "admin@gmail.com",
      password: bcrypt.hashSync("admin", 10),
      userStatus: constants.userStatus.approved,
      userTypes: constants.userTypes.admin,
    });

    console.log("Admin user created successfully");
  } catch (e) {
    console.log(e.message);
  }
}