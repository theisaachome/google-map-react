import { Button } from "@mui/material";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import React from "react";
import Map from "../components/Map";

// get api key from env
const Home = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA2NLyI_5sZQpYJ_0oC-jgvdZw8kGLGEOY",
  });
  if (!isLoaded) return <div>loading...</div>;
  return <Map />;
};

export default Home;
