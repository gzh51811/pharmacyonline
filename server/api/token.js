
const jwt = require('jsonwebtoken');

let privatekey = 'tokenss';

exports.create = (name) => {
    let token = jwt.sign({ name }, privatekey);
    return token;
}

exports.verify = (token) => {
    let res = false;
    try {
        res = jwt.verify(token, privatekey);
    } catch (error) {
        res = false;
    }
    return res;
}




