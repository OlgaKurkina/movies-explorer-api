const router = require('express').Router();

const {
  getCurrentUser,
  updateUserData,
} = require('../controllers/users');
const {
  userDataValidation,
  loginValidation,
} = require('../middlewares/validation');

router.get('/me', loginValidation, getCurrentUser);
router.patch('/me', userDataValidation, updateUserData);

module.exports = router;
