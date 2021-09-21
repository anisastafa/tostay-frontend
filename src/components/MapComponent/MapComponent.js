import React from "react";
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import "leaflet/dist/leaflet.css"

const MapComponent = () => {


    const position = [42.67, 21.16];
    return (
        <MapContainer className="map"
                      center={position}
                      zoom={18}
                      style={{height: 300, width: "100%"}}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;