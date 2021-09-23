import {OfferComponent, OfferContact, OfferDetails, Slider, ThumbnailGallery} from "../components";
import {capitalizeFirstLetter} from "../helpers/capitalizeFirstLetter";
import {numberWithSpaces} from "../helpers/numberWithSpaces";
import {translateKey} from "../helpers/translateKey";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import "yup-phone";
import dynamic from "next/dynamic";
import {BACKEND_HOST, BACKEND_URL} from "../constants/data";
import {useState} from "react";

const MapWithNoSSR = dynamic(() => import("../components/mapComponent"), {
    ssr: false
});
const Spinner = dynamic(()=>import('../components/spinner'), {ssr: false});

const schema = yup.object().shape({
    'name': yup.string().required(),
    'number': yup.string().required().phone("PL"),
    'e-mail': yup.string().email().required(),
    'text': yup.string().required()
});

export default function OfferContainer({item = [], scrollToMap, currentSlide, array = [], hide, images = [], isOpen, setCurrentSlide, setHide, setIsOpen, loading, value, position, scrollToDescription}){

    const {  control, handleSubmit, watch, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit = async data => {

        await fetch(BACKEND_URL+`/form`,{
            method: 'POST',
            headers: {
                "Host": BACKEND_HOST,
                "Content-Type": 'application/json',
                "Accept-Encoding": 'gzip, deflate, br',
                "Accept": '*/*',
                "Connection": 'keep-alive',
                "Cache-Control": 'no-cache',
            },
            body: JSON.stringify({
                offerId: item.id,
                title: `Zainteresowanie ofertą ze strony emmerson.pl numer oferty: ${item.id}`,
                ...data
            })
        }).then(response => response.json())
            .then(data => {
                reset({'name': '', 'number':'', 'text':value, 'e-mail':''});
                setIsSubmitted(true);
            })
            .catch((error) => {
                console.error('Error:', error.data);
            });
    };

    const sliderRender = () => {
        const SliderItemsArray = [];
        images.map((item, index) => {
                SliderItemsArray.push(
                    <Slider.Item key={index}>
                        <Slider.Image image={item.file}/>
                    </Slider.Item>
                )
            }
        )
        return SliderItemsArray;
    }

    const offerDetailsRender = () => {
        const OfferDetailsArray = [];
        const MoreOfferDetailsArray = []

        array.map((a, key) => {
            if (typeof a[1] !== 'string' && typeof a[1] !== 'number' && typeof a[1] !== 'boolean' && Array.isArray(a[1]) && a[1].length !== 0) {
                MoreOfferDetailsArray.push(
                    <OfferComponent.Details key={key}>
                        <OfferComponent.DetailsTitle>{translateKey(a[0])}</OfferComponent.DetailsTitle>
                        <OfferComponent.DetailsList>
                            {
                                a[1].map((i, key) =>
                                    <OfferComponent.DetailsListItem key={key}>{i}</OfferComponent.DetailsListItem>
                                )
                            }
                        </OfferComponent.DetailsList>
                    </OfferComponent.Details>
                )
            }
            if (typeof a[1] === 'string') {
                OfferDetailsArray.push(
                    <OfferDetails.Item key={key}>
                        <OfferDetails.Name>{translateKey(a[0])}</OfferDetails.Name>
                        <OfferDetails.Value>{capitalizeFirstLetter(a[1])}</OfferDetails.Value>
                    </OfferDetails.Item>
                );
            }

            if (typeof a[1] === 'number') {

                if (a[0] === 'rent' && a[1] !== 0) {
                    OfferDetailsArray.push(
                        <OfferDetails.Item key={key}>
                            <OfferDetails.Name>{translateKey(a[0])}</OfferDetails.Name>
                            <OfferDetails.Value>{numberWithSpaces(a[1])} {array.rentCurrency ? array.rentCurrency : item.priceCurrency === 'PLN' ? 'zł' : item.priceCurrency}</OfferDetails.Value>
                        </OfferDetails.Item>
                    );
                }

                if (a[0] === 'terrainArea' && a[1] !== 0){
                    OfferDetailsArray.push(
                        <OfferDetails.Item key={key}>
                            <OfferDetails.Name>{translateKey(a[0])}</OfferDetails.Name>
                            <OfferDetails.Value>{numberWithSpaces(a[1])} m²</OfferDetails.Value>
                        </OfferDetails.Item>
                    );
                }

                if (a[0] === 'buildYear'){
                    OfferDetailsArray.push(
                        <OfferDetails.Item key={key}>
                            <OfferDetails.Name>{translateKey(a[0])}</OfferDetails.Name>
                            <OfferDetails.Value>{ a[1] } r.</OfferDetails.Value>
                        </OfferDetails.Item>
                    );
                }

                if(a[0] !== 'buildYear' && a[0] !== 'terrainArea' && a[0] !== 'rent') {
                    OfferDetailsArray.push(
                        <OfferDetails.Item key={key}>
                            <OfferDetails.Name>{translateKey(a[0])}</OfferDetails.Name>
                            <OfferDetails.Value>{numberWithSpaces(a[1])}</OfferDetails.Value>
                        </OfferDetails.Item>
                    );
                }
            }
        })
        return {OfferDetailsArray, MoreOfferDetailsArray}
    }

    return(
        <>
            {( item && item.length !== 0 ) &&
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
                                            photos={images}
                                            setIsOpen={setIsOpen}
                                    >
                                        <Slider.Container>
                                            {
                                                sliderRender()
                                            }
                                        </Slider.Container>
                                        <ThumbnailGallery>
                                            <ThumbnailGallery.Images length={images.length}
                                                                     photos={images}
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
                                            <OfferDetails.Name>Cena:</OfferDetails.Name>
                                            <OfferDetails.Value>{numberWithSpaces(item.price)} { item.priceCurrency === 'PLN'? 'zł' : item.priceCurrency }</OfferDetails.Value>
                                        </OfferDetails.Item>
                                        <OfferDetails.Item>
                                            <OfferDetails.Name>Cena m²:</OfferDetails.Name>
                                            <OfferDetails.Value>{numberWithSpaces(Math.floor(item.price / item.area))} { item.priceCurrency === 'PLN'? 'zł/m²' : item.priceCurrency }</OfferDetails.Value>
                                        </OfferDetails.Item>
                                        <OfferDetails.Item>
                                            <OfferDetails.Name>Powierzchnia:</OfferDetails.Name>
                                            <OfferDetails.Value>{item.area} m²</OfferDetails.Value>
                                        </OfferDetails.Item>

                                        {
                                            offerDetailsRender().OfferDetailsArray
                                        }
                                        <OfferDetails.Item>
                                            <OfferDetails.Name>Rynek:</OfferDetails.Name>
                                            <OfferDetails.Value>{capitalizeFirstLetter(item.marketType)}</OfferDetails.Value>
                                        </OfferDetails.Item>

                                        <OfferDetails.Item>
                                            <OfferDetails.Name>Numer ogłoszenia:</OfferDetails.Name>
                                            <OfferDetails.Value>{item.id}</OfferDetails.Value>
                                        </OfferDetails.Item>
                                    </OfferDetails.List>
                                </OfferDetails.Column>
                            </OfferDetails>
                            <OfferComponent.Description hide={hide} onClick={setHide} scrollToDescription={scrollToDescription} id='description'>{item.description}</OfferComponent.Description>
                            <OfferComponent.DetailsContainer>
                                {offerDetailsRender().MoreOfferDetailsArray}
                            </OfferComponent.DetailsContainer>

                            {!loading && <Spinner />}
                            {
                                loading &&
                                    <OfferComponent.Map id='map'>
                                        <MapWithNoSSR marker={'/images/misc/marker.svg'} position={position} showCloseButton={false}  />
                                    </OfferComponent.Map>
                            }
                        </OfferComponent.OfferContainer>

                        <OfferComponent.Contact>
                            <OfferContact>
                                <OfferContact.ContactDataHeader>
                                    <OfferContact.IconAgent />
                                    <OfferContact.Name>{item.contactInfo?.name}</OfferContact.Name>
                                </OfferContact.ContactDataHeader>
                                <OfferContact.ContactData>
                                    <OfferContact.Number>22 827 00 00</OfferContact.Number>
                                    <OfferContact.Number>{item.contactInfo?.phone}</OfferContact.Number>
                                    <OfferContact.Mail>{item.contactInfo?.email}</OfferContact.Mail>
                                </OfferContact.ContactData>
                                <OfferContact.Form onSubmit={handleSubmit(onSubmit)}>
                                    <Controller
                                        name="name"
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: true }}
                                        render={({ field }) =>
                                            <OfferContact.Input {...field}>Imię i Nazwisko<sup>*</sup></OfferContact.Input>
                                        }
                                    />
                                    {errors.name && <span style={{color: '#E00009'}}>{errors.name.message}</span>}
                                    <Controller
                                        name="number"
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: true }}
                                        render={({ field }) =>
                                            <OfferContact.Input {...field}>Telefon<sup>*</sup></OfferContact.Input>
                                        }
                                    />
                                    {errors.telephone && <span style={{color: '#E00009'}}>{errors.telephone.message}</span>}
                                    <Controller
                                        name="e-mail"
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: true }}
                                        render={({ field }) =>
                                            <OfferContact.Input {...field}>E-Mail<sup>*</sup></OfferContact.Input>
                                        }
                                    />
                                    {errors.mail && <span style={{color: '#E00009'}}>{errors.mail.message}</span>}
                                    <Controller
                                        name="text"
                                        control={control}
                                        defaultValue={value}
                                        rules={{ required: true }}
                                        render={({ field }) =>
                                            <OfferContact.TextInput {...field}>Treść<sup>*</sup></OfferContact.TextInput>
                                        }
                                    />
                                    {errors.text && <span style={{color: '#E00009'}}>{errors.text.message}</span>}
                                    <OfferContact.ButtonSubmit type='submit'>Wyślij</OfferContact.ButtonSubmit>
                                    {isSubmitted && <span style={{color: 'green', width: '100%', padding: '10px', backgroundColor: 'lightgreen', border: '1px solid green', borderRadius: '2px', display: "flex", justifyContent: "center", alignItems: 'center', fontSize: '18px'}}>Dziękujemy, wiadomość wysłana poprawnie</span>}
                                </OfferContact.Form>
                            </OfferContact>
                        </OfferComponent.Contact>
                    </OfferComponent.MainContainer>
                </OfferComponent>
            }
        </>
    )
}