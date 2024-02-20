const router = require("express").Router();
const { newTrip, readTrip }= require("../../controllers/tripControllers");

router.post("/", newTrip);
router.get("/", readTrip);


module.exports = router;