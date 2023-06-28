const movieController = require("../controllers/movie.controller");

module.exports = function (app) {
  app.post("/mba/api/v1/movies", movieController.createMovie);
  app.get("/mba/api/v1/movies", movieController.getAllMovies);
   app.get("/mba/api/v1/movies/:id", movieController.getMovie);
  app.put("/mba/api/v1/movies/:id", movieController.updateMovie);
   app.delete("/mba/api/v1/movies/:id", movieController.deleteMovie);
};






