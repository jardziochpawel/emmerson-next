import React from "react";
import DropDownFilters from "../components/dropDownFilters";
import { CustomInput } from "../components";
import {FIELDS} from "../constants/fields";
import dynamic from "next/dynamic";

export default function DropDownFiltersContainer({clearForm, setOfferNumber, setTextFromDescription, setRoomsFrom, setRoomsTo, setSurfaceFrom, setSurfaceTo, setPriceFrom, setPriceTo ,formFields, setMarket, ...restProps}){
    const {
        market, priceFrom, priceTo, surfaceFrom, surfaceTo, roomsFrom, roomsTo, textFromDescription, offerNumber
    } = formFields;
    const SelectInput = dynamic(()=>import('./selectInput'),{ssr: false});

    return(
        <DropDownFilters {...restProps}>
            <DropDownFilters.Row>
                <DropDownFilters.Item>
                    <SelectInput label='Rynek'
                                 name='market'
                                 value={market}
                                 onChange={setMarket}
                                 options={FIELDS.market}
                    />
                </DropDownFilters.Item>
                <DropDownFilters.Item>
                    <CustomInput>
                        <CustomInput.Label>Cena</CustomInput.Label>
                        <CustomInput.InputGroup>
                            <CustomInput.Input placeholder='od' type='number' min='0' value={priceFrom} onChange={({target})=>setPriceFrom(target.value)}/>
                            <CustomInput.Input placeholder='do' type='number' min='0' value={priceTo} onChange={({target})=>setPriceTo(target.value)}/>
                        </CustomInput.InputGroup>
                    </CustomInput>
                </DropDownFilters.Item>
                <DropDownFilters.Item>
                    <CustomInput>
                        <CustomInput.Label>Powierzchnia m<sup>2</sup></CustomInput.Label>
                        <CustomInput.InputGroup>
                            <CustomInput.Input placeholder='od' type='number' min='0' value={surfaceFrom} onChange={({target})=>setSurfaceFrom(target.value)}/>
                            <CustomInput.Input placeholder='do' type='number' min='0' value={surfaceTo} onChange={({target})=>setSurfaceTo(target.value)}/>
                        </CustomInput.InputGroup>
                    </CustomInput>
                </DropDownFilters.Item>
                <DropDownFilters.Item>
                    <CustomInput>
                        <CustomInput.Label>Pokoje</CustomInput.Label>
                        <CustomInput.InputGroup>
                            <CustomInput.Input placeholder='od' type='number' min='0' value={roomsFrom} onChange={({target})=>setRoomsFrom(target.value)}/>
                            <CustomInput.Input placeholder='do' type='number' min='0' value={roomsTo} onChange={({target})=>setRoomsTo(target.value)}/>
                        </CustomInput.InputGroup>
                    </CustomInput>
                </DropDownFilters.Item>
                <DropDownFilters.Item>
                    <CustomInput>
                        <CustomInput.Label>Szukaj w opisie</CustomInput.Label>
                        <CustomInput.InputGroup>
                            <CustomInput.Input placeholder='Wpisz' value={textFromDescription} onChange={({target})=>setTextFromDescription(target.value)}/>
                        </CustomInput.InputGroup>
                    </CustomInput>
                </DropDownFilters.Item>
                <DropDownFilters.Item>
                    <CustomInput>
                        <CustomInput.Label>Numer oferty</CustomInput.Label>
                        <CustomInput.InputGroup>
                            <CustomInput.Input placeholder='wpisz' value={offerNumber} onChange={({target})=>setOfferNumber(target.value)}/>
                        </CustomInput.InputGroup>
                    </CustomInput>
                </DropDownFilters.Item>
            </DropDownFilters.Row>
            <DropDownFilters.ClearButton onClick={clearForm}>Wyczyść filtry</DropDownFilters.ClearButton>
        </DropDownFilters>
    )
}