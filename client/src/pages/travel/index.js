import React, { useState } from 'react';
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

        if (cords?.lat && cords?.lng) {
            return setShowMap(true);
        }
        else {
            return setShowMap(false);
        }
    }

    const addLocation = () => {

    }

    return (
        <div className='bg-gray-50 mt-3 w-100 py-4'>
           <section className='w-3/4 p-4 bg-primary mx-auto text-white shadow-2xl'>
                <form className='flex flex-col' onSubmit={updateLocation}>
                    <label className='text-2xl mt-1 mb-3'>Enter a location.</label>
                    <hr />
                    <input className='text-black my-3' onChange={locationChange} id="city" name="city" type="text" />
                    <button className='bg-secondary-200 w-44 p-4 mx-auto border border-secondary-100 rounded-md' type="submit">Choose location!</button>
                </form>
           </section>
           {showMap &&
            <div className='bg-green-100 w-100 py-4 my-6 flex flex-row'> 
                <div className='mx-auto flex flex-row'>
                <div className='p-3 mx-2 bg-black rounded-md'>
                <MapContainer location={cordinates}/>
                </div>
                <div >
                    <h3 className='mx-auto capitalize  text-secondary-200 text-xl mb-4'>{location}</h3>
                    <button className='text-white bg-secondary-200 p-3 mx-auto rounded-md border-secondary-100' onClick={addLocation}>Save location</button>
                </ div>
                </div>
            </div>
            }
        </div>
    );
};

export default Travel;
