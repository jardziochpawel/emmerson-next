import React, { useState } from "react";
import { Carousel, CardCommercial, Section } from "../components";
import { getPropertyAndTransaction } from "../helpers/getPropertyAndTransaction";
import { useRouter } from "next/router";
import slugify from "react-slugify";

export default function SectionCommercial({ data = [], webp }){
    const router = useRouter();
    const [ cardCommercial, setCardCommercial ] = useState('');

    const onClick = (id, slug) => {
        const obj = getPropertyAndTransaction(id)
        router.push(`/${obj.property}/${obj.transaction}/${slug}/${id}`)
    }

    const cardCommercialRender = () => {
        const array = [];
        data.map((item, key) => {
            const image = webp ? item.photoWebp : item.photoJpeg.replace('jpg', 'jpeg');
            array.push(
                <Carousel.Item key={item.id+key}>
                    <CardCommercial.CardContainer>
                        {image && <CardCommercial.Img img={image} onClick={()=>onClick(item.id, slugify(item.title))} />}
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
                            <CardCommercial.Price>{item.price}</CardCommercial.Price>
                        </CardCommercial.Box>
                    </CardCommercial.CardContainer>
                </Carousel.Item>
            )
        })
        setCardCommercial(array);
    }

    if(!cardCommercial && data.length){
        cardCommercialRender();
    }

    return(
            <Section diagonal={true} color={{first: 'white', second: 'white'}}>
                <Section.Container>
                    <Section.Title>Powierzchnie komercyjne</Section.Title>
                    <Section.Subtitle>Wybrane lokale handlowo-usługowe, biura, magazyny i hale w naszej aktualnej ofercie.</Section.Subtitle>

                    <CardCommercial>
                         <Carousel>
                             { cardCommercial }
                        </Carousel>
                    </CardCommercial>

                </Section.Container>
            </Section>
    );
}