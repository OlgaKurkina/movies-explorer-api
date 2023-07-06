const MONGO_DUPLICATE_KEY_ERROR = 11000;
const SALT_ROUNDS = 10;
const regex = /^https?:\/\/(www\.)?[0-9a-zA-Z]+([.|-]{1}[0-9a-zA-Z]+)*\.[0-9a-zA-Z-]+(\/[0-9a-zA-Z\-._~:/?#[\]@!$&'()*+,;=]*#?)?$/;
const MONGO_DB = 'mongodb://127.0.0.1:27017/bitfilmsDB';

module.exports = {
  MONGO_DUPLICATE_KEY_ERROR,
  SALT_ROUNDS,
  regex,
  MONGO_DB
};
