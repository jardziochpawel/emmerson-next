import React from 'react';
import { Container, ContainerWithMap } from "./style/map";
import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("../mapComponent"), {
    ssr: false
});

export default function Map({ node, restProps, closeMap, position }){

    return(
        <Container ref={node}  {...restProps}>
            <Map.Container marker={'/images/misc/marker.svg'} position={position} closeMap={closeMap}/>
        </Container>
    );
}

Map.Container = function MapContainer({ marker, position, closeMap, restProps }){


    return(
        <ContainerWithMap { ...restProps }>
            <MapWithNoSSR position={position} closeMap={closeMap} marker={marker}/>
        </ContainerWithMap>
    )
}