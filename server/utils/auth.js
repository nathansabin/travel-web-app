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
    async verify(req, res, next) {
        const token = req.body.auth;

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: missing token'});
        }
        try {
            let decoded = jwt.verify(token, key)
            req.user = decoded;
            next();
        }
        catch {
            return res.status(401).json({ message: 'Unauthorized: invalid token'});
        }
    
    }

}

const auth = new Auth();
module.exports = auth;