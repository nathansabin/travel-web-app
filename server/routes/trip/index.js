const router = require("express").Router();
const trip = require("./tripRoutes");
const Auth = require("../../utils/auth");

router.use(Auth.verify);
router.use("/data", trip);

module.exports = router;