import {
    setDefaults,
    fromAddress
} from "react-geocode";

const Utils = {
    geocode: async (location) => {
        try {
            setDefaults({
                key: process.env.REACT_APP_GOOGLE_API, 
                language: "en",
                region: "us",
            });
            
            let cords = {};

            await fromAddress(location)
            .then(({results}) => {
                const {lat, lng} = results[0].geometry.location;
                cords = {
                    lat: lat,
                    lng: lng
                }
            });

            return cords;

        } catch(err) {
            return null;
        }
    }
}

Object.keys(Utils).forEach((key) => {
    if (typeof Utils[key] === 'function') {
        Utils[key] = Utils[key].bind(Utils);
    }
});

export default Utils;