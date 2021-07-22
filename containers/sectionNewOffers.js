import React from "react";
import {CardOffers, Section, Spinner} from "../components";
import {numberWithSpaces} from "../helpers/numberWithSpaces";
import {useWebPSupportCheck} from "react-use-webp-support-check";

export default function SectionOffers({data}){
    const webp = useWebPSupportCheck()

    return(
        <Section diagonal={false} first={true} color={{first:'whitesmoke', second: 'whitesmoke'}}>
            <Section.Container>
                <Section.Title>Sprawdź naszą ofertę</Section.Title>
                <Section.Subtitle>Bogata oferta mieszkań o zróżnicowanych metrażach w atrakcyjnych lokalizacjach.</Section.Subtitle>

                {
                    !data &&
                    <Spinner>
                        <Spinner.IconSpinner />
                    </Spinner>
                }
                {
                    (data && data.length !== 0) &&
                    <CardOffers>
                        {data.map(i => {
                            return(
                                <CardOffers.Container key={i.id}>
                                    <CardOffers.Image image={webp ? i.photoWebp : i.photoJpeg}/>
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
                        })}
                    </CardOffers>
                }
            </Section.Container>
        </Section>
    )
}