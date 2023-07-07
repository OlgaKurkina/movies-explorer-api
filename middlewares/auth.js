const jwt = require('jsonwebtoken');
const { UnAuthorized } = require('../utils/errors/errors');
const { MY_SECRET } = require('../utils/config');

const { NODE_ENV, SECRET_KEY } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new UnAuthorized('Необходима авторизация'));
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? SECRET_KEY : MY_SECRET);
  } catch (err) {
    return next(new UnAuthorized('Необходима авторизация'));
  }
  req.user = payload;
  return next();
};
