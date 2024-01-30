import React, { useEffect, useState } from 'react';
import MapContainer from '../../components/map';
import Utils from '../../utils/utils';

const Travel = () => {
    const [ location, setLocation ] = useState("");
    const [cordinates, setCordinates] = useState({});
    const [ showMap, setShowMap] = useState(false);

    const locationChange = (event) => {
        const {value} = event.target
        setLocation(value);
    }

    const updateLocation = async(event) => {
        event.preventDefault();

        const cords = await Utils.geocode(location);
        setCordinates(cords);

        if (cords.lat && cords.lng) {
            setShowMap(true);
        }
        else {
            setShowMap(false);
        }
    }

    const addLocation = () => {

    }

    return (
        <div>
           <section>
                <form onSubmit={updateLocation}>
                    <label>Enter a location.</label>
                    <input onChange={locationChange} id="city" name="city" type="text" />
                    <button type="submit">Choose location!</button>
                </form>
           </section>
           {showMap &&
                <div> 
                    <MapContainer location={cordinates}/>
                    <button onClick={addLocation}>Save location</button>
                </div>
            }
        </div>
    );
};

export default Travel;
