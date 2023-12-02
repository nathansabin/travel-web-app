const router = require('express').Router();
const { login, register } = require('../../controllers/userControllers');

router.get("/login", login);

router.post("/register", register);

module.exports = router;