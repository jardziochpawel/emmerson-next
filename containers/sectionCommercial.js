import React, { useState } from "react";
import { Carousel, CardCommercial, Section } from "../components";
import { getPropertyAndTransaction } from "../helpers/getPropertyAndTransaction";
import { useRouter } from "next/router";
import slugify from "react-slugify";
import {numberWithSpaces} from "../helpers/numberWithSpaces";
import {capitalizeFirstLetter} from "../helpers/capitalizeFirstLetter";
import useSWR from 'swr'
import {BACKEND_HOST, BACKEND_URL} from "../constants/data";
import imageExists from 'image-exists';

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

export default function SectionCommercial({ webp }){
    const router = useRouter();
    const [ cardCommercial, setCardCommercial ] = useState('');
    const { data, error } = useSWR(`${BACKEND_URL}/random/1/9`, fetcher);

    const onClick = (id, title) => {

        const obj = getPropertyAndTransaction(id)
        router.push(`/${obj.property}/${obj.transaction}/${slugify(title)}/${id}`)
    }


    const cardCommercialRender = () => {
        const array = [];
        data.map((item, key) => {
            let title = item.title ?  item.title.replace(/\s/g, '') : '';

            if(title.length === 0){
                const obj = getPropertyAndTransaction(item.id)
                item.title = `${ capitalizeFirstLetter(obj.property) } ${ numberWithSpaces(Math.floor(item.area)) }m2 na ${item.offerType}`
            }
            let image;
            webp && item.photoWebp ? image = item.photoWebp : image = item.photoJpeg ? item.photoJpeg.replace('jpg', 'jpeg') : [];

            console.log(image);

            array.push(
                <Carousel.Item key={item.id+key}>
                    <CardCommercial.CardContainer>
                        {image && <CardCommercial.Img img={image} onClick={()=>onClick(item.id, item.title)} />}
                        <CardCommercial.Box>
                            <CardCommercial.DescriptionTitle>{item.title}</CardCommercial.DescriptionTitle>
                            <CardCommercial.Localisation>{item.city ?? item.city} {item.quarter ?? item.quarter} {item.street ?? item.street}</CardCommercial.Localisation>

                            <CardCommercial.ListContainer>
                                <CardCommercial.List>
                                    <CardCommercial.Param>Powierzchnia:</CardCommercial.Param>
                                    <CardCommercial.Value>{item.area}m<sup>2</sup></CardCommercial.Value>
                                </CardCommercial.List>
                            </CardCommercial.ListContainer>

                            <CardCommercial.Text>Cena:</CardCommercial.Text>
                            <CardCommercial.Price>{numberWithSpaces(item.price)} {item.priceCurrency === "PLN" ? 'zł' : item.priceCurrency}</CardCommercial.Price>
                        </CardCommercial.Box>
                    </CardCommercial.CardContainer>
                </Carousel.Item>
            )
        })
        setCardCommercial(array);
    }

    if(!cardCommercial && data){
        cardCommercialRender();
    }

    return(
            <Section diagonal={true} color={{first: 'white', second: 'white'}}>
                <Section.Container>
                    <Section.Title>Powierzchnie komercyjne</Section.Title>
                    <Section.Subtitle>Wybrane lokale handlowo-usługowe, biura, magazyny i hale w naszej aktualnej ofercie.</Section.Subtitle>

                    {data && <CardCommercial>
                        <Carousel>
                            {cardCommercial}
                        </Carousel>
                    </CardCommercial>}

                </Section.Container>
            </Section>
    );
}