import React from 'react'
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { CiLocationOn } from 'react-icons/ci';

function Maps({ position, popup }) {
    return (

        <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={false}
            className="size-full"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position}>
                <Popup>{popup}</Popup>
            </Marker>
        </MapContainer>

    );
}

export default Maps;

