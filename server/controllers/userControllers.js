const Auth = require('../utils/auth');
const { User } = require('../models/');

module.exports = {
    login: async (req, res, next) => {
        try {
            const userData = {
                username: req.body.username
            }
    
            let token = await User.findOne(userData);
            if (!token) {
                res.status(404).json({ message: '404: not found'});
                return next();
            }
            if (!await token.checkPassword(req.body.password)) {
                res.status(500).json({ message: '500: server error'});
                return next();
            }
    
            token = {
                username: token.username,
                password: token.password
            }
    
            const signed = await Auth.sign(token);
            res.status(200).json(signed);
        } catch (err) {
            res.status(500).json({ message: `500: server error ${err}`});
        }
    },
    register: async (req, res, next) => {
        try {

            let username = req.body.username;
            let password = req.body.password;

            let inUse = await User.find({ username: username })[0];
            if (inUse) res.status(400).json({message: "Username already in use"});
            else {
                let token = {
                    username: username,
                    password: password
                }

                let signed = await Auth.sign(token);

                User.create({ username: username, password: password});
                res.status(200).json(signed);
            }
        }
        catch {
            res.status(500).json({ message: 'something went wrong' });
        }
    }
}