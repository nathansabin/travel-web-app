const { Schema, model } = require("mongoose");

const tripsSchema = new Schema(
    {
        userId: {
            type: String,
            required: true,
            // needs to ref user
        },
        Lat: {
            type: number,
            required: true
        },
        Lng: {
            type: number,
            required: true
        },
        locationName: {
            type: String

        },
        isHead: {
            type: Boolean
        },
        departureTime: {
            type: Date
        },
        destination: [tripsSchema],
    }
);

const Trip = model('Trip', tripsSchema);

module.exports = Trip;