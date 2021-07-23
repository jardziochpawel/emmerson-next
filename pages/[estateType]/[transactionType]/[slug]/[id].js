import {useEffect, useState} from "react";
import { Header } from "../../../../containers";
import { OfferContact, Slider, Spinner, OfferComponent, ThumbnailGallery } from "../../../../components";
import { useWebPSupportCheck } from "react-use-webp-support-check";
import Head from "next/head";

export default function Offer({data}) {
    const webp = useWebPSupportCheck();
    let images = [];
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState([0,0])
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(()=>{
        const lat = data.geoMarker?.coordinates.latitude;
        const lng = data.geoMarker?.coordinates.longitude;
        setPosition([lat, lng]);
    },[]);

    const scrollToMap = () => {
        const el = document.getElementById('map');
        const rect = el.getBoundingClientRect();
        window.scrollTo(rect.left + window.scrollX,rect.top + window.scrollY);
    }

    let item = data;
    const title = (item && item.length !== 0) ? item.title !== '' ? item.title + '| ': '' : '';

    if(data) {
        images = data.photosWebp;
    }

    return (
        <>
            <Head>
                <title>{ title }Emmerson Zarządzanie Sp z o.o.</title>
            </Head>
            <Header webp={webp} bg={false} color={'white'}/>
            {
                ( !item) &&
                <Spinner>
                    <Spinner.IconSpinner />
                </Spinner>
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
                        {item &&
                        <OfferComponent.Description>{item.description}</OfferComponent.Description>}
                        <OfferComponent.Map marker={'/images/misc/marker.svg'} position={position} id='map' />
                    </OfferComponent.OfferContainer>

                    <OfferComponent.Contact>
                        <OfferContact>
                            <OfferContact.Name><OfferContact.IconAgent />{item.contactInfo?.name}</OfferContact.Name>
                            <OfferContact.Number>{item.contactInfo?.phone}</OfferContact.Number>
                            <OfferContact.Mail>{item.contactInfo?.email}</OfferContact.Mail>
                            <OfferContact.Form method="POST">
                                <OfferContact.NameInput />
                                <OfferContact.NumberInput />
                                <OfferContact.MailInput />
                                <OfferContact.TextInput />
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
    return { data: json }
}