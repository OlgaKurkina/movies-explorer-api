const router = require('express').Router();
const userRouter = require('./users');
const moviesRouter = require('./movies');
const auth = require('../middlewares/auth');

const {
  loginUser,
  createNewUser,
} = require('../controllers/users');
const {
  registerValidation,
  loginValidation,
} = require('../middlewares/validation');
const { NotFoundError } = require('../utils/errors/errors');

router.post('/signup', registerValidation, createNewUser);
router.post('/signin', loginValidation, loginUser);
router.use(auth);
router.use('/users', userRouter);
router.use('/movies', moviesRouter);
router.use('/*', (req, res, next) => next(new NotFoundError('Страница не найдена')));

module.exports = router;
