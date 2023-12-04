const { celebrate, Joi } = require("celebrate");
const { regex } = require("../utils/constants");

const loginValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(4),
  }),
});

const registerValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(4),
    name: Joi.string().min(2).max(30),
  }),
});

const userDataValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().email(),
  }),
});

const movieIdValidation = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().length(24).hex().required(),
  }),
});

const movieDataValifation = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().regex(regex),
    trailerLink: Joi.string().required().regex(regex),
    thumbnail: Joi.string().required().regex(regex),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required().min(2).max(50),
    nameEN: Joi.string().required().min(2).max(50),
  }),
});

module.exports = {
  registerValidation,
  loginValidation,
  userDataValidation,
  movieIdValidation,
  movieDataValifation,
};
