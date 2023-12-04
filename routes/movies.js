const router = require("express").Router();
const { getMovies, addMovie, deleteMovie } = require("../controllers/movies");

const {
  movieIdValidation,
  movieDataValidation,
} = require("../middlewares/validation");

router.get("/", getMovies);
router.post("/", movieDataValidation, addMovie);
router.delete("/:_id", movieIdValidation, deleteMovie);

module.exports = router;
