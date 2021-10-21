const User = require('../models/User');
const jwtUtils = require('../utils/jwtUtils');
const { SECRET } = require('../constants');


exports.register = function (username, password, repeatPassword) {
    // return  bcrypt.hash(password, 10)
    //     .then(hash => {
    //          User.create({username, password: hash});
    //     })

    return User.create({ username, password, repeatPassword});
};

exports.login = function (username, password) {
    return User.findByUsername(username)
        .then(user => Promise.all([user.validatePassword(password), user]))
        .then(([isValid, user]) => {
            if (isValid) {
                return user;
            } else {
                throw { message: 'Username or password are invalid.' }
            }
        })
        .catch(error => {
            return null;
        })
};

// exports.login = async function (username, password) {
//     const user = await User.findByUsername(username);
//     const isValid = await user.validatePassword(password);
//     if(isValid){
//         return user;
//     } else {
//         throw { message: 'Usernaame or password are invalid.'}
//     }
// }

exports.createToken = function (user) {
    let payload = {
        _id: user._id,
        username: user.username
    }
    return jwtUtils.jwtSign(payload, SECRET);

    // return new Promise((resolve, reject) => {
    //     jwt.sign(payload, SECRET, function (err, token) {
        
    //         if(err){
    //             return reject(err);
    //         } else {
    //             resolve(token)
    //         }

    //     });
    // });
}
