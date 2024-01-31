const Auth = require("../utils/auth");
// const Trip = require("../models/trips");

module.exports = {
    newTrip: async(req, res, next) => {
        try {
            res.status(200).json({ message: "200 OK"});
        } catch(err) {
            res.status(500).json(err);
        }
    }
}