import React, {useEffect, useState} from 'react';
import ReactPlacesAutocomplete from 'react-places-autocomplete';
import { Loader } from '@googlemaps/js-api-loader';
import { Wrapper } from "@googlemaps/react-wrapper";

import { PlaceAutocomplete } from "../components";

export default function PlacesAutocompleteContainer({address, setAddress, prevSearchLocation, setPrevSearchLocation}){

    const selfRef = React.createRef();
    const [searchOptions, setSearchOptions] = useState({types:['geocode']});

    useEffect(() => {
        const loader = new Loader({
            apiKey: "AIzaSyDK8yuIeWDleZOdRCgY0rDyZH8TUTp8C6c",
            version: "weekly",
            libraries: ["places"]
        });

        loader
            .load()
            .then((google) => {
                setSearchOptions({
                    location: new google.maps.LatLng(52.237049, 21.017532),
                    radius: 20000,
                    types:['geocode']
                })
            })
            .catch(e => {
                   console.log(e);
            });
    },[]);

    const [focused, setFocused] = useState(false);

    const handleChange = address => {
        setAddress( address );
    };

    const handleSelect = address => {
        setAddress(address);
        if(prevSearchLocation.length === 0){
            setFocused(!focused);
            return setPrevSearchLocation([address]);
        }

        if (prevSearchLocation.filter(search => search.includes(address)).length === 0) {
            if(Array.isArray(prevSearchLocation)){
                const array = [...prevSearchLocation, address];
                if(array.length > 5){
                    array.shift();
                }
                setPrevSearchLocation(array);
                setFocused(!focused)
            }
        }
    };

    const toggling = () => {
        console.log(!focused);
        setFocused(!focused);
    };

    return (
        <Wrapper apiKey={"AIzaSyDK8yuIeWDleZOdRCgY0rDyZH8TUTp8C6c"} libraries={["places"]} version={"weekly"}>
            <ReactPlacesAutocomplete
                value={address}
                onChange={handleChange}
                onSelect={handleSelect}
                searchOptions={searchOptions}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <PlaceAutocomplete>
                        <PlaceAutocomplete.InputGroup onBlur={()=>{setTimeout(
                            ()=>setFocused(false), 200
                        )}}>
                            <PlaceAutocomplete.Label>Lokalizacja</PlaceAutocomplete.Label>
                            <PlaceAutocomplete.Input
                                onClick={()=>toggling()}
                                selfRef={selfRef}
                                {...getInputProps({
                                    placeholder: 'Wyszukaj'
                                })}
                            />
                        </PlaceAutocomplete.InputGroup>
                        <PlaceAutocomplete.DropDownContainer>
                            <PlaceAutocomplete.LastSearchContainer focused={ focused || suggestions.length !== 0 }>

                                {prevSearchLocation?.length !== 0 && <PlaceAutocomplete.TitleDropdown>
                                    Ostatnio wybierane:
                                </PlaceAutocomplete.TitleDropdown>
                                }
                                {prevSearchLocation?.map((item, key) =>{
                                    return(<PlaceAutocomplete.LastSearchItem key={key} onClick={()=>handleSelect(item)}>{item}</PlaceAutocomplete.LastSearchItem>)
                                })}

                            </PlaceAutocomplete.LastSearchContainer>

                            {loading && <PlaceAutocomplete.Loading>Loading...</PlaceAutocomplete.Loading>}
                            {suggestions.length !== 0 && <PlaceAutocomplete.TitleDropdown>
                                Wybierz:
                            </PlaceAutocomplete.TitleDropdown>
                            }
                            {suggestions.map(( suggestion, key ) => {
                                return (
                                    <PlaceAutocomplete.DropDownItem
                                        key={key}
                                        {...getSuggestionItemProps(suggestion)}
                                    >
                                        <PlaceAutocomplete.DropDownText>{suggestion.description}</PlaceAutocomplete.DropDownText>
                                    </PlaceAutocomplete.DropDownItem>
                                );
                            })}
                        </PlaceAutocomplete.DropDownContainer>
                    </PlaceAutocomplete>
                )}
            </ReactPlacesAutocomplete>
        </Wrapper>
    );
}