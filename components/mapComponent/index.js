import {TileLayer, Marker, useMap} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import {API_TOKEN} from "../../constants/maboxConfig";
import React from "react";
import {CloseIcon, StyledMap} from "./styles/mapComponent";

function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

const MapComponent = ({position, showCloseButton = true, zoom = 15, closeMap, marker}) => {

    const iconMarker = new L.Icon({
        iconUrl: marker,
        iconRetinaUrl: marker,
        iconAnchor: null,
        popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: new L.Point(50, 50),
        className: 'marker'
    });

    return (
        <StyledMap
            center={position} zoom={zoom} scrollWheelZoom={false}
        >
            <ChangeView center={position} zoom={zoom} />
            {showCloseButton && <CloseIcon onClick={() => closeMap()}/>}
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url={`https://api.mapbox.com/styles/v1/paweljardzioch/ckqsf5vqd5tri18pb9zji4w0p/tiles/256/{z}/{x}/{y}@2x?access_token=${API_TOKEN}`}
            />
            <Marker position={position} icon={iconMarker}/>
        </StyledMap>
    );
};

export default MapComponent;