const router = require('express').Router();
const Auth = require('../../utils/auth');
const { User } = require('../../models/');

router.get("/login", async (req, res) => {
    try {
        const userData = {
            username: req.body.username
        }

        let token = await User.findOne(userData);
        if (!token) {
            res.status(404).json({ message: '404: not found'});
        }
        if (!await token.checkPassword(req.body.password)) {
            res.status(500).json({ message: '500: server error'});
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
});

router.post("/register", (req, res) => {
    try {
        let username = req.body.username;
        let password = req.body.password;
        console.log(User);
        User.create({ username: username, password: password});
        res.status(200).json("Success");
    }
    catch {
        res.status(500).json("something went wrong");
    }
});

module.exports = router;