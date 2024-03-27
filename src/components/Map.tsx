"use client"
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

interface MapProps {}

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBtVckxcTI9nUTSQFhbxR4XpLZoXEMSEEI",
  });
  return (
    <div className="w-96 h-96">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={{
            lat: -26.348693, 
            lng: -48.770824
          }}
          zoom={15}
        >
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Map;
