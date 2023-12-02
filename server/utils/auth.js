const jwt = require('jsonwebtoken');
const key = 'password';
const time = '2h';

class Auth {
    async sign(user) {
        return await jwt.sign(
            user,
            key, 
            { expiresIn: time }
            );
    }
    verify(req) {
        const token = req.body.auth;

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: missing token'});
        }
        jwt.verfify(token, key, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Unauthorized: invalid token'});
            }
            return decoded;
        })
    }
}

const auth = new Auth();
module.exports = auth;