import { GoogleMap, Marker } from "@react-google-maps/api";
import React, { useMemo, useState } from "react";
import PlacesAutoComponent from "./PlacesAutoComponent";

const Map = () => {
  const mapCenter = useMemo(() => ({ lat: 44, lng: -88 }, []));
  const [selected, setSelected] = useState(null);
  return (
    <>
      <div className="places-container">
        <PlacesAutoComponent setSelected={setSelected} />
      </div>

      <GoogleMap
        zoom={10}
        center={mapCenter}
        mapContainerClassName="map-container"
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </>
  );
};

export default Map;
