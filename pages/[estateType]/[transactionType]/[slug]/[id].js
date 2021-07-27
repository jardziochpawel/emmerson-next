import {useEffect, useState} from "react";
import { useWebPSupportCheck } from "react-use-webp-support-check";
import Head from "next/head";
import { OfferComponent, ThumbnailGallery, Slider, OfferContact, OfferDetails } from '../../../../components'
import dynamic from "next/dynamic";
import {switchPropertyType} from "../../../../helpers/switchPropertyType";
import {numberWithSpaces} from "../../../../helpers/numberWithSpaces";
import variationByCases from "../../../../helpers/variationByCases";
import {translateKey} from "../../../../helpers/translateKey";
import {capitalizeFirstLetter} from "../../../../helpers/capitalizeFirstLetter";

export default function Offer({data}) {
    const Header = dynamic(()=>import('../../../../containers/header'));
    const Spinner = dynamic(()=>import('../../../../components/spinner'));

    const webp = useWebPSupportCheck();
    let images = [];
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState([0,0])
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const lat = data.geoMarker?.coordinates.latitude;
        const lng = data.geoMarker?.coordinates.longitude;
        setPosition([lat, lng]);

        setTimeout(()=>setLoading(true), 1000);
    },[data]);

    const scrollToMap = () => {
        const el = document.getElementById('map');
        const rect = el.getBoundingClientRect();
        window.scrollTo(rect.left + window.scrollX,rect.top + window.scrollY);
    }

    const [value, setValue] = useState(`Proszę o kontakt w sprawie ogłoszenia, numer w biurze: ${data.id}`)

    let item = data;

    const title = data.title.replace(/\s/g, '');

    if(title.length === 0){
        item.title = `${ switchPropertyType(item.objectName) } ${ numberWithSpaces(Math.floor(item.area)) }m2, ${item.flatDetails?.rooms} ${ variationByCases(5, 'pokój', 'pokoje', 'pokoi') } na ${item.offerType}`
    }

    if(data) {
        images = data.photosWebp;
    }

    const array = Object.entries(item.flatDetails || item.houseDetails || item.commercialPropertyDetails || item.terrainDetails || item.hallDetails );

    return (
        <>
            <Head>
                <title>{ item.title } | Emmerson Zarządzanie Sp z o.o.</title>
            </Head>
            <Header webp={webp} bg={false} color={'white'} smallView={false}/>
            {
                ( !item) &&
                <Spinner />
            }
            {( item && item.length !== 0) &&
            <OfferComponent>
                <OfferComponent.TitleAndLocation>
                    <OfferComponent.Title>{item?.title}</OfferComponent.Title>
                    <OfferComponent.Localisation onClick={scrollToMap}>{item?.street && item.street + ', '}{item?.quarter && item.quarter + ', '}{item?.city}, {item?.province} </OfferComponent.Localisation>
                </OfferComponent.TitleAndLocation>
                <OfferComponent.MainContainer>
                    <OfferComponent.OfferContainer>
                        <OfferComponent.Header>
                            {
                                images &&
                                <Slider currentSlide={currentSlide}
                                        setCurrentSlide={setCurrentSlide}
                                        photos={data.photosWebp}
                                        setIsOpen={setIsOpen}
                                >
                                    <Slider.Container>
                                        {
                                            data.photosWebp.map((item, index) =>
                                                <Slider.Item key={index}>
                                                    <Slider.Image image={item.file} />
                                                </Slider.Item>
                                            )
                                        }
                                    </Slider.Container>
                                    <ThumbnailGallery>
                                        <ThumbnailGallery.Images length={images.length}
                                                                 photos={data.photosWebp}
                                                                 setCurrentSlide={setCurrentSlide}
                                        />
                                    </ThumbnailGallery>
                                    {isOpen && <Slider.LightBox setIsOpen={setIsOpen} images={images}/>}
                                </Slider>
                            }
                        </OfferComponent.Header>
                        <OfferDetails>
                            <OfferDetails.Title>Szczegóły ogłoszenia:</OfferDetails.Title>
                            <OfferDetails.Column>
                                <OfferDetails.List>
                                    <OfferDetails.Item>
                                        <OfferDetails.Name>Rynek:</OfferDetails.Name>
                                        <OfferDetails.Value>{capitalizeFirstLetter(item.marketType)}</OfferDetails.Value>
                                    </OfferDetails.Item>
                                    <OfferDetails.Item>
                                        <OfferDetails.Name>Powierzchnia:</OfferDetails.Name>
                                        <OfferDetails.Value>{item.area} m<sup>2</sup></OfferDetails.Value>
                                    </OfferDetails.Item>
                                    <OfferDetails.Item>
                                        <OfferDetails.Name>Numer ogłoszenia:</OfferDetails.Name>
                                        <OfferDetails.Value>{item.id}</OfferDetails.Value>
                                    </OfferDetails.Item>

                                    {
                                        array.map((i, k) => {
                                            return(
                                                <OfferDetails.Item key={k}>
                                                    <OfferDetails.Name>{translateKey(i[0])}</OfferDetails.Name>
                                                    <OfferDetails.Value>{capitalizeFirstLetter(i[1])}</OfferDetails.Value>
                                                </OfferDetails.Item>
                                            )
                                        })
                                    }
                                </OfferDetails.List>
                            </OfferDetails.Column>
                        </OfferDetails>
                        <OfferComponent.Description>{item.description}</OfferComponent.Description>
                        {!loading && <Spinner />}
                        {loading && <OfferComponent.Map marker={'/images/misc/marker.svg'} position={position} id='map' showCloseButton={false} />}
                    </OfferComponent.OfferContainer>

                    <OfferComponent.Contact>
                        <OfferContact>
                            <OfferContact.IconAgent />
                            <OfferContact.ContactData>
                                <OfferContact.Name>{item.contactInfo?.name}</OfferContact.Name>
                                <OfferContact.Number>{item.contactInfo?.phone}</OfferContact.Number>
                                <OfferContact.Mail>{item.contactInfo?.email}</OfferContact.Mail>
                            </OfferContact.ContactData>
                            <OfferContact.Form>
                                <OfferContact.Input name='name' required>Imię i Nazwisko<sup>*</sup></OfferContact.Input>
                                <OfferContact.Input name='tel' required>Telefon<sup>*</sup></OfferContact.Input>
                                <OfferContact.Input name='mail' required>E-Mail<sup>*</sup></OfferContact.Input>
                                <OfferContact.TextInput name='text' value={value} onChange={(e)=>setValue(e.target.value)} required>Treść<sup>*</sup></OfferContact.TextInput>
                                <OfferContact.ButtonSubmit type='submit'>Wyślij</OfferContact.ButtonSubmit>
                            </OfferContact.Form>
                        </OfferContact>
                    </OfferComponent.Contact>
                </OfferComponent.MainContainer>
            </OfferComponent>}
        </>
    );
}

Offer.getInitialProps = async (ctx) => {

    const id = ctx.query.id;

    const res = await fetch(`https://backend-emm.draftway.eu/offer/${id}`, {
        method: 'GET',
        headers: {
            "Host": 'backend-emm.draftway.eu',
            "Content-Type": 'application/json',
            "Accept-Encoding": 'gzip, deflate, br',
            "Accept": '*/*',
            "Connection": 'keep-alive',
            "Cache-Control": 'no-cache',
        }
    });

    const json = await res.json()
    return { data: json };
}