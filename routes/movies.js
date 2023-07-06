const router = require('express').Router();
const {
  getMovies,
  addMovie,
  deleteMovie,
} = require('../controllers/movies');

const {
  movieIdValidation,
  movieDataValifation,
} = require('../middlewares/validation');

router.get('/', getMovies);
router.post('/', movieDataValifation, addMovie);
router.delete('/:_id', movieIdValidation, deleteMovie);

module.exports = router;
