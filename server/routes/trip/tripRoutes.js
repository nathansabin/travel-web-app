const router = require("express").Router();
const { newTrip }= require("../../controllers/tripControllers");

router.post("/", newTrip)

module.exports = router;