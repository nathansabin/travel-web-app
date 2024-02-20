const Auth = require("../utils/auth");
const Trip = require("../models/trips/trips");
const User = require("../models/user/user");

module.exports = {
    newTrip: async (req, res, next) => {
        try {
            var id = await User.find({ username: req.user.username });
            id = id[0]._id;

            let tripData = {
                userId: id,
                tripName: req.body.tripName,
                lat: req.body.lat,
                lng: req.body.lng,
                locationName: req.body.locationName,
                isHead: true,
                departureTime: req.body.departureTime,
                destination: req.body.destination
            }
            
            if (!tripData.tripName ||
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
    },
    readTrip: async (req, res, next) => {
        try {
            var userData = await User.find({ username: req.user.username });
            userData = userData[0].trips;

            var userTrips = await Trip.find( { _id: { $in: userData}});
        
            res.status(200).json(userTrips);
        }
        catch(err) {
            res.status(500).json({ message: `${err}` });
        }
    }
} 