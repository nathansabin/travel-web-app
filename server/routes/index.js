const router = require("express").Router();
const user = require("./user");
const trip = require("./trip");

router.use("/user", user);
router.use("/trip", trip);

module.exports = router;