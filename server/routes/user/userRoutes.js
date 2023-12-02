const router = require('express').Router();
const Auth = require('../../utils/auth');
const { User } = require('../../models/');

router.get("/login", (req, res) => {

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