import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = { width: '100%', height: '400px' };

export default function MapView({ lat, lng }) {
  const center = { lat: Number(lat), lng: Number(lng) };

  return (
    <LoadScript googleMapsApiKey="AIzaSyB_RQv3Sz2sGftY-JXbmiXWottuBLSHICM">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
