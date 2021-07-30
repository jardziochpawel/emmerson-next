import {OfferComponent, OfferContact, OfferDetails, Slider, ThumbnailGallery} from "../components";
import {capitalizeFirstLetter} from "../helpers/capitalizeFirstLetter";
import {numberWithSpaces} from "../helpers/numberWithSpaces";
import {translateKey} from "../helpers/translateKey";
import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("../components/mapComponent"), {
    ssr: false
});
const Spinner = dynamic(()=>import('../components/spinner'), {ssr: false});

export default function OfferContainer({item = [], scrollToMap, currentSlide, array = [], hide, images = [], isOpen, setCurrentSlide, setHide, setIsOpen, loading, setValue, value, position, scrollToDescription}){

    const sliderRender = () => {
        const SliderItemsArray = [];
        images.map((item, index) => {

                SliderItemsArray.push(
                    <Slider.Item key={index}>
                        <Slider.Image image={item.file.replace('jpg', 'jpeg')}/>
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
            if (typeof a[1] !== 'string' && a[1].length !== 0)
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

            if (typeof a[1] === 'string')
                OfferDetailsArray.push(
                    <OfferDetails.Item key={key}>
                        <OfferDetails.Name>{translateKey(a[0])}</OfferDetails.Name>
                        <OfferDetails.Value>{capitalizeFirstLetter(a[1])}</OfferDetails.Value>
                    </OfferDetails.Item>
                )
        })
        return {OfferDetailsArray, MoreOfferDetailsArray}

    }
    return(
        <>
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
                                        <OfferDetails.Name>Rynek:</OfferDetails.Name>
                                        <OfferDetails.Value>{capitalizeFirstLetter(item.marketType)}</OfferDetails.Value>
                                    </OfferDetails.Item>
                                    <OfferDetails.Item>
                                        <OfferDetails.Name>Powierzchnia:</OfferDetails.Name>
                                        <OfferDetails.Value>{item.area} m<sup>2</sup></OfferDetails.Value>
                                    </OfferDetails.Item>
                                    <OfferDetails.Item>
                                        <OfferDetails.Name>Cena:</OfferDetails.Name>
                                        <OfferDetails.Value>{numberWithSpaces(item.price)} { item.priceCurrency === 'PLN'? 'zł' : item.priceCurrency }</OfferDetails.Value>
                                    </OfferDetails.Item>
                                    <OfferDetails.Item>
                                        <OfferDetails.Name>Cena m<sup>2</sup>:</OfferDetails.Name>
                                        <OfferDetails.Value>{numberWithSpaces(Math.floor(item.price / item.area))} { item.priceCurrency === 'PLN'? <>zł / m<sup>2</sup></> : item.priceCurrency }</OfferDetails.Value>
                                    </OfferDetails.Item>
                                    {
                                        item.rooms && <OfferDetails.Item>
                                            <OfferDetails.Name>Ilość pokoi:</OfferDetails.Name>
                                            <OfferDetails.Value>{ item.rooms }</OfferDetails.Value>
                                        </OfferDetails.Item>
                                    }

                                    {
                                        offerDetailsRender().OfferDetailsArray
                                    }

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
                            loading && <OfferComponent.Map id='map'>
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
            </OfferComponent>
            }
        </>
    )
}