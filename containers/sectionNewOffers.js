import React, { useState } from "react";
import { CardOffers, Section } from "../components";
import { numberWithSpaces } from "../helpers/numberWithSpaces";
import { useRouter } from "next/router";
import { getPropertyAndTransaction } from "../helpers/getPropertyAndTransaction";
import slugify from "react-slugify";
import useSWR from 'swr'
import {BACKEND_HOST, BACKEND_URL} from "../constants/data";

const fetcher = (url) => fetch(url, {
    method: 'GET',
    headers: {
        "Host": BACKEND_HOST,
        "Content-Type": 'application/json',
        "Accept-Encoding": 'gzip, deflate, br',
        "Accept": '*/*',
        "Connection": 'keep-alive',
        "Cache-Control": 'no-cache',
    }
}).then((res) => res.json());

export default function SectionOffers({ webp }){
    const router = useRouter();
    const [cardOffer, setCardOffer] = useState('');
    const { data, error } = useSWR(`${BACKEND_URL}/random/0/3`, fetcher);

    const onClick = (id, slug) => {
        const obj = getPropertyAndTransaction(id)
        router.push(`/${obj.property}/${obj.transaction}/${slug}/${id}`)
    }

    const cardOfferRender = () => {
        const array = [];
        let image;
        data.map(i => {
            webp && i.photoWebp ? image = i.photoWebp : image = i.photoJpeg ? i.photoJpeg.replace('jpg', 'jpeg') : [];

            array.push(
                <CardOffers.Container key={i.id}>
                    <CardOffers.Image image={image} onClick={()=>onClick(i.id, slugify(i.title))}/>
                    <CardOffers.Body>
                        <CardOffers.Title>{i.title}</CardOffers.Title>
                        <CardOffers.Localisation><CardOffers.LocalisationIcon />{i.city?? i.city} {i.quarter ?? i.quarter } {i.street?? i.street }</CardOffers.Localisation>
                        <CardOffers.ListContainer>
                            <CardOffers.ListItem>
                                <CardOffers.ListParam>Powierzchnia:</CardOffers.ListParam>
                                <CardOffers.ListValue>{numberWithSpaces(i.area)} m<sup>2</sup></CardOffers.ListValue>
                            </CardOffers.ListItem>
                            <CardOffers.ListItem>
                                <CardOffers.ListParam>Liczba pokoi:</CardOffers.ListParam>
                                <CardOffers.ListValue>4</CardOffers.ListValue>
                            </CardOffers.ListItem>
                            <CardOffers.ListItem>
                                <CardOffers.ListParam>Cena za metr:</CardOffers.ListParam>
                                <CardOffers.ListValue>{numberWithSpaces(Math.floor(i.price / i.area).toString())} zł / rm<sup>2</sup></CardOffers.ListValue>
                            </CardOffers.ListItem>
                        </CardOffers.ListContainer>
                        <CardOffers.CardText>Cena:</CardOffers.CardText>
                        <CardOffers.CardPrice>{numberWithSpaces(i.price)} zł</CardOffers.CardPrice>
                    </CardOffers.Body>
                </CardOffers.Container>
            )
            setCardOffer(array);
        })
    }

    if(!cardOffer && data){
        cardOfferRender();
    }

    return(
        <Section diagonal={false} first={true} color={{first:'whitesmoke', second: 'whitesmoke'}}>
            <Section.Container>
                <Section.Title>Sprawdź naszą ofertę</Section.Title>
                <Section.Subtitle>Bogata oferta mieszkań o zróżnicowanych metrażach w atrakcyjnych lokalizacjach.</Section.Subtitle>
                {
                    <CardOffers>
                        { cardOffer }
                    </CardOffers>
                }
            </Section.Container>
        </Section>
    )
}