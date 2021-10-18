const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.register = function (username, password, repeatPassowrd) {
    return bcrypt.hash(password, 10)
  .then((hash) => {
     User.create({ username, password: hash });
  });
};
