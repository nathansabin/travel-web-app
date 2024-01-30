import React, { useEffect, useState } from 'react';
import MapContainer from '../../components/map';

const Travel = () => {
    const [location, setLocation] = useState("");
    const [cordinates, setCordinates] = useState("");

    const locationChange = (event) => {
        const {value} = event.target
        setLocation(value);
    }

    const updateLocation = (event) => {
        event.preventDefault()
        
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
           <MapContainer />
        </div>
    );
};

export default Travel;
