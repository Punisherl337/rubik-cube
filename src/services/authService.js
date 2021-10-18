const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.register = function (username, password, repeatPassowrd) {
  //   return bcrypt.hash(password, 10).then((hash) => {
  //     User.create({ username, password: hash });
  //   });

  return User.create({ username, password });
};

exports.login = function (username, password) {
  return User.findByUsername(username)
    .then(user => Promise.all([user.validatePassword(password), user]))
    .then(([isValid, user]) => {
      if (isValid) {
        return user;
      } else {
        throw { message: "Cannot find username or password!" };
      }
    })
    .catch(() => null);
};
