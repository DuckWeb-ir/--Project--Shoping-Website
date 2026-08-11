import React from 'react'
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import SectionTitle from '../../Common/SectionTitle';
import { CiLocationOn } from 'react-icons/ci';

function Maps() {

    const position = [
        [38.04238655623606, 46.33910896342169],
        [35.77870342500958, 51.471140103047404],
    ]

    return (
        <div className="my-10 space-y-10" >
            {/* Map 1 */}
            <div className="space-y-10 ">
                {/* Map Container */}
                <MapContainer
                    center={position[0]}
                    zoom={15}
                    scrollWheelZoom={false}
                    className="w-full h-125"

                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position[0]}>
                        <Popup>دفتر شاپینو - شعبه تبریز</Popup>
                    </Marker>
                </MapContainer>
                {/* Map info */}
                <div>
                    <SectionTitle text="شعبه اول: تبریز" />
                    <div className="flex-ic mt-5 text-xl text-neutral-600 font-bold gap-2">
                        <CiLocationOn />
                        <p>تبریز، زعفرانیه، خیابان پاستور و ...</p>
                    </div>
                </div>
            </div>

            {/* Map 2 */}
            <div className="space-y-10 ">
                {/* Map Container */}
                <MapContainer
                    center={position[1]}
                    zoom={15}
                    scrollWheelZoom={false}
                    className="w-full h-125"

                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position[1]}>
                        <Popup>دفتر شاپینو - شعبه تهران</Popup>

                    </Marker>
                </MapContainer>
                {/* Map info */}
                <div>
                    <SectionTitle text="شعبه دوم: تهران" />
                    <div className="flex-ic mt-5 text-xl text-neutral-600 font-bold gap-2">
                        <CiLocationOn />
                        <p>تهران، پاسداران، کوچه خیام و ...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Maps