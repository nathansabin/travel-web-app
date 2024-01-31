const router = require("express").Router();
const trip = require("./tripRoutes");

router.use("/data", trip);

module.exports = router;