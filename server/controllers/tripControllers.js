const Auth = require("../utils/auth");
const Trip = require("../models/trips/trips");
const User = require("../models/user/user");

module.exports = {
    newTrip: (req, res, next) => {
        try {
            // let userId = Auth.verify(res.body.token);
            // console.log(userId);
            let tripData = {
                userId: req.body.userId,
                tripName: req.body.tripName,
                lat: req.body.lat,
                lng: req.body.lng,
                locationName: req.body.locationName,
                isHead: true,
                departureTime: req.body.departureTime,
                destination: req.body.destination
            }
            
            if (!tripData.userId ||
                !tripData.tripName ||
                !tripData.lat ||
                !tripData.lng ||
                !tripData.departureTime
                ) {
                    res.status(400).json({message: "Invalid Data please include: userId tripName lat lng departureTime destination"});
                }
            
            Trip.create(tripData);

            Trip.findOne(tripData)
            .then(data => {
                return User.findOneAndUpdate({ _id: data.userId},
                    { $push: { trips: data._id } },
                    { upsert: true, new: true });
            });

            res.status(200).json({ message: "200 OK"});
        } catch(err) {
            res.status(500).json(err);
        }
    }
} 