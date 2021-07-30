import { switchPropertyType } from "../helpers/switchPropertyType";
import { numberWithSpaces } from "../helpers/numberWithSpaces";
import React, { useState } from "react";
import {Offers, Pagination} from "../components";
import variationByCases from "../helpers/variationByCases";


export default function OffersContainer({data = [], onChange, onChangePerPage, page, perPage, count, currentPage, webp, openMap, handleClick}){
    const [offers, setOffers] = useState('');

    const offersRender = () => {
        const array = [];

        data.data.map((item, key) => {

            if(item.priceCurrency === 'PLN') {
                item.priceCurrency = 'zł';
            }
            const title = item.title.replace(/\s/g, '');

            if(title.length === 0){
                item.title = `${ switchPropertyType(item.objectName) } ${ numberWithSpaces(Math.floor(item.area)) }m2, 5 ${ variationByCases(5, 'pokój', 'pokoje', 'pokoi') } na ${item.offerType}`
            }

            array.push(
                <Offers.CardContainer key={key}>
                    <Offers.CardImage webp={webp} imageJpeg={item.photoJpeg.replace('jpg', 'jpeg')} imageWebp={item.photoWebp}  onClick={()=>handleClick(item.objectName, item.offerType, item.title, item.id)}/>
                    <Offers.CardBody>
                        <Offers.CardHeader>
                            <Offers.Title onClick={()=>handleClick(item.objectName, item.offerType,item.title, item.id)}>{item.title}</Offers.Title>
                            <Offers.Localisation onClick={()=>openMap([item.geoMarker.latitude, item.geoMarker.longitude])}>
                                <Offers.LocationIcon />
                                { switchPropertyType(item.objectName) } na {item.offerType}: { item.street && item.street + ', '}{ item.quarter && item.quarter + ', '}{item.city}, {item.province}
                            </Offers.Localisation>
                        </Offers.CardHeader>
                        <Offers.CardText>
                            <Offers.Text>
                                { numberWithSpaces(item.area) } m<sup>2</sup>&nbsp;&nbsp;&nbsp;
                                { numberWithSpaces(Math.floor(item.price / item.area)) } {item.priceCurrency}/m<sup>2</sup>
                            </Offers.Text>
                            <Offers.Price>{numberWithSpaces(item.price)} {item.priceCurrency}</Offers.Price>
                        </Offers.CardText>
                    </Offers.CardBody>
                </Offers.CardContainer>
            );
        })
        setOffers(array);
    }

    if(!offers && data.data.length){
        offersRender();
    }

    return(
        <>
            <Offers>
                <Offers.OfferCount>Liczba ofert: { data?.count }</Offers.OfferCount>
                { offers }
            </Offers>
            <Pagination onChangePerPage={onChangePerPage} onChange={onChange} page={page} perPage={perPage} count={count} currentPage={currentPage} />
        </>
    );
}