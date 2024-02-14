const { Schema, model } = require("mongoose");

const tripsSchema = new Schema(
    {
        userId: {
            type: Schema.ObjectId,
            ref: 'User',
            required: true,
        },
        tripName: {
            type: String,
            maxLength: 50
        },
        lat: {
            type: Number,
            required: true
        },
        lng: {
            type: Number,
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
        destination: {
            type: Schema.ObjectId,
            ref: 'tripsSchema'
        },
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

const Trip = model('Trip', tripsSchema);

module.exports = Trip;