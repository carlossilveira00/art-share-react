import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css"

const ItemMap = ReactMapboxGl({accessToken: "pk.eyJ1IjoiY2FybG9zLXNpbHZlaXJhMDAiLCJhIjoiY2xhYjU2cGI1MGV2MzN1cWdkMWg0MGpiaSJ9.bL4W0fefZ_3SgWlHSS4htA"});

const Map = ({location}) => {
  // Set the coordinates state for the location where the item is, to get the longitude and altitude we use the
  // geocoding from mapbox.
  const [coordinates, setCoordinates] = useState();
  // url to send a GET request to get the coordinates for the location of this item.
  const mapboxAPI = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?proximity=ip&types=place%2Cpostcode%2Caddress&access_token=pk.eyJ1IjoiY2FybG9zLXNpbHZlaXJhMDAiLCJhIjoiY2xhYjU2cGI1MGV2MzN1cWdkMWg0MGpiaSJ9.bL4W0fefZ_3SgWlHSS4htA`
  // UseEffect hook to send the GET request and set the coordinates of this item.
  // This hook should be performed if the mapboxAPI url changes.
  useEffect(() => {
    axios.get(mapboxAPI)
    .then(response => setCoordinates(response.data.features[0].center))
  }, [mapboxAPI])

  console.log(location)
  return (
    <div className='container mx-auto w-4/6 mb-6'>
          <ItemMap
          zoom={[9]}
          center={coordinates}
          containerStyle={{ height: '50vh', width: '100%'}}
          style="mapbox://styles/mapbox/streets-v8"
          />
    </div>
  )
}

export default Map
