import { GoogleMap, Marker, LoadScript} from "@react-google-maps/api";
import { useState } from "react";

function Maps(){
  const initialCenter={
    lat:33.7531,
    lng:-84.3853
  };
  const containerStyle={
    width:'100%',
    height:'400px'
  };
  const [center,setCenter]=useState(initialCenter);

  const handleMarkerDragEnd=(event)=>{
    setCenter({
      lat:event.latLng.lat(),
      lng:event.latLng()
    })
  };
  return(
    <LoadScript googleMapsApiKey="AIzaSyA4vgx9W72b65Pdn-9OMPxH_llPffwriXc">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12} onClick={handleMarkerDragEnd}>
        <Marker position={center} draggable onDragEnd={handleMarkerDragEnd}>

        </Marker>
      </GoogleMap>
    </LoadScript>
  )
}
export default Maps