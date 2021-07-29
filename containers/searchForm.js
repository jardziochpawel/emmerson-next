import React, { useEffect, useState } from 'react';
import { SearchForm } from "../components";
import { DropDownFilters, SelectInput, PlaceAutocomplete } from "./index";
import {FIELDS, SEARCH} from "../constants/fields";
import useLocalStorage from "../hooks/useLocalStorage";
import qs from 'query-string';
import { useQuery } from "../hooks/useQuery";
import { useRouter } from "next/router";

export default function SearchFormContainer({ node, ...restProps }){
    let history = useRouter();
    const fromQuery = useQuery();
    const [plusToMinus, setPlusToMinus] = useState(false);
    const [prevSearchLocation, setPrevSearchLocation] = useLocalStorage('prev_search_location',[]);
    const [estate, setEstate] = useLocalStorage('estate', SEARCH.estate);
    const [typeOfTransaction, setTypeOfTransaction] = useLocalStorage('typeOfTransaction', SEARCH.typeOfTransaction);
    const [address, setAddress] = useLocalStorage('localisation', SEARCH.localisation);
    const [market, setMarket] = useLocalStorage('market', SEARCH.market);
    const [priceFrom, setPriceFrom] = useLocalStorage('priceFrom', SEARCH.priceFrom);
    const [priceTo, setPriceTo] = useLocalStorage('priceTo', SEARCH.priceTo);
    const [surfaceFrom, setSurfaceFrom] = useLocalStorage('surfaceFrom', SEARCH.surfaceFrom);
    const [surfaceTo, setSurfaceTo] = useLocalStorage('surfaceTo', SEARCH.surfaceTo);
    const [roomsFrom, setRoomsFrom] = useLocalStorage('roomsFrom', SEARCH.roomsFrom);
    const [roomsTo, setRoomsTo] = useLocalStorage('roomsTo', SEARCH.roomsTo);
    const [textFromDescription, setTextFromDescription] = useLocalStorage('textFromDescription', SEARCH.textFromDescription);
    const [offerNumber, setOfferNumber] = useLocalStorage('offerNumber', SEARCH.offerNumber);
    const lastSearch = {estate, typeOfTransaction, address, market, priceFrom, priceTo, surfaceFrom, surfaceTo, roomsFrom, roomsTo, textFromDescription, offerNumber};

    useEffect(()=>{
        if(Object.keys(fromQuery).length === 0  && history.pathname === '/lista-ofert'){
            history.push({pathname:'/lista-ofert', search: qs.stringify({
                estate: estate.value,
                typeOfTransaction: typeOfTransaction.value,
                address,
                market: market.value,
                priceFrom,
                priceTo,
                surfaceFrom,
                surfaceTo,
                roomsFrom,
                roomsTo,
                textFromDescription,
                offerNumber,
                page: 1,
                perPage: 10
            })});
        }
    },[])

    const clearForm = () => {
        setEstate(SEARCH.estate);
        setTypeOfTransaction(SEARCH.typeOfTransaction);
        setAddress(SEARCH.localisation);
        setMarket(SEARCH.market);
        setPriceFrom(SEARCH.priceFrom);
        setPriceTo(SEARCH.priceTo);
        setSurfaceFrom(SEARCH.surfaceFrom);
        setSurfaceTo(SEARCH.surfaceTo);
        setRoomsFrom(SEARCH.roomsFrom);
        setRoomsTo(SEARCH.roomsTo);
        setTextFromDescription(SEARCH.textFromDescription);
        setOfferNumber(SEARCH.offerNumber);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const page = 1;
        const perPage = 10;
        const query = {estate: estate.value, typeOfTransaction: typeOfTransaction.value, address, market: market.value, priceFrom, priceTo, surfaceFrom, surfaceTo, roomsFrom, roomsTo, textFromDescription, offerNumber, page, perPage}

        const searchString = qs.stringify(query);
        history.push({
            pathname:'/lista-ofert',
            search: searchString
        })

        setPlusToMinus(false);

        return null;
    };

    return(
        <SearchForm {...restProps}>
            <SearchForm.Frame onSubmit={handleSubmit} method="POST">
                <SearchForm.SectionFilters>
                    <SelectInput label='Nieruchomość'
                                 name='estate'
                                 value={estate}
                                 onChange={setEstate}
                                 options={FIELDS.estates}
                    />

                    <SelectInput label='Rodzaj transakcji'
                                 name='type-of-transaction'
                                 value={typeOfTransaction}
                                 onChange={setTypeOfTransaction}
                                 options={FIELDS.typeOfTransaction}
                    />

                    <PlaceAutocomplete address={address}
                                       setAddress={setAddress}
                                       prevSearchLocation={prevSearchLocation}
                                       setPrevSearchLocation={setPrevSearchLocation}
                    />

                    <DropDownFilters plusToMinus={plusToMinus}
                                     setMarket={setMarket}
                                     setPriceFrom={setPriceFrom}
                                     setPriceTo={setPriceTo}
                                     setSurfaceFrom={setSurfaceFrom}
                                     setSurfaceTo={setSurfaceTo}
                                     setRoomsFrom={setRoomsFrom}
                                     setRoomsTo={setRoomsTo}
                                     setTextFromDescription={setTextFromDescription}
                                     setOfferNumber={setOfferNumber}
                                     formFields={lastSearch}
                                     clearForm={clearForm}
                    />
                </SearchForm.SectionFilters>
                <SearchForm.SectionButtons>
                    <SearchForm.MoreButton setPlusToMinus={setPlusToMinus} plusToMinus={plusToMinus}>
                        <SearchForm.Icon plusToMinus={plusToMinus}/>
                    </SearchForm.MoreButton>

                    <SearchForm.SearchButton>
                        <SearchForm.Icon withoutPlus={true} />&nbsp;Szukaj
                    </SearchForm.SearchButton>
                </SearchForm.SectionButtons>
            </SearchForm.Frame>

            <SearchForm.ArrowInner>
                Wyszukiwanie zawansowane
            </SearchForm.ArrowInner>

        </SearchForm>
    )
}