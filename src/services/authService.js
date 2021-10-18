const User = require("../models/User");


exports.register = function (username, password, repeatPassowrd) {
  //   return bcrypt.hash(password, 10).then((hash) => {
  //     User.create({ username, password: hash });
  //   });

  return User.create({ username, password });
};
