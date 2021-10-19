const jwt = require('jsonwebtoken');
const { SECRET } = require("../constants");


exports.jwtSign = function (payload, secret) {
    let promise = new Promise((resolve,reject)=> {
        jwt.sign(payload, secret, function(error, token){
            if(err) {
                reject(err);
            }else{
                resolve(token);
            }
        });
    });
    return promise;
};


exports.createToken= function (user) {
    let payload = {
      _id: user.get("_id"),
      username: user.get("username"),
      password: user.password,
    };
    return jwtSing(payload, SECRET);
  }