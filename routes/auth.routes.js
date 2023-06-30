const authControllers = require("../controllers/auth.controller");

module.exports = function (app) {
  app.post("/mba/api/v1/auth/signup", authControllers.signup);
  app.post("/mba/api/v1/auth/signin", authControllers.signin);
};
