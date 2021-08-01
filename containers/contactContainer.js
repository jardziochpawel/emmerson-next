import { Contact } from "../components";
import dynamic from "next/dynamic";
import {useState} from "react";

const MapWithNoSSR = dynamic(() => import("../components/mapComponent"), {
    ssr: false
});

export default function ContactContainer(){
    const [position, setPosition] = useState([52.300107551178414, 20.93577213033275]);

    const scrollToMap = () => {
        const el = document.getElementById('map');
        const rect = el.getBoundingClientRect();
        window.scrollTo(rect.left + window.scrollX,rect.top + window.scrollY);
    }

    return(
        <Contact>
            <Contact.Card>
                <Contact.CardHeader>
                    <Contact.Title>Emmerson Zarządzanie Sp. z o.o.</Contact.Title>
                </Contact.CardHeader>
                <Contact.CardBody>
                    <Contact.Address>
                        <Contact.CardTextBold>
                        ul. Zgrupowania AK "Kampinos" 2,<br/>
                        01-943 Warszawa<br/>
                        </Contact.CardTextBold>
                        Pon - Pt: 9 - 17<br/>
                        Tel: 22 827 00 00<br/>
                        Tel: 22 828 92 96<br/>
                        E-Mail: <Contact.Link href={'mail:emmerson@emmerson.pl'}>emmerson@emmerson.pl</Contact.Link>
                        <Contact.ShowOnMap onClick={()=> {
                            setPosition([52.300107551178414, 20.93577213033275]);
                            scrollToMap();
                        }}>Pokaż na mapie</Contact.ShowOnMap>
                    </Contact.Address>
                </Contact.CardBody>
                <Contact.SubTitle>Nasze biura:</Contact.SubTitle>
                <Contact.CardList>
                    <Contact.CardListItem>
                        <Contact.CardTextBold>Oddział Warszawa - Przy Bażantarni</Contact.CardTextBold><br/>
                        ul. Przy Bażantarni 11<br/>
                        02-793 Warszawa<br/>
                        Tel. 22 649 36 62
                        <Contact.ShowOnMap onClick={()=>{
                            setPosition([52.13596121691545, 21.060647445679912]);
                            scrollToMap();
                        }}>Pokaż na mapie</Contact.ShowOnMap>
                    </Contact.CardListItem>
                    <Contact.CardListItem>
                        <Contact.CardTextBold>Oddział Wrocław - Pochyła</Contact.CardTextBold><br/>
                        ul. Pochyła 1 m. 7a,<br/>
                        53-512 Wrocław<br/>
                        Tel. 71 337 40 00
                        <Contact.ShowOnMap onClick={()=>{
                            setPosition([51.103303075594276, 17.01058933896022]);
                            scrollToMap();
                        }}>Pokaż na mapie</Contact.ShowOnMap>
                    </Contact.CardListItem>
                    <Contact.CardListItem>
                        <Contact.CardTextBold>Oddział Płock - Emmerson Mazowsze Sp. z o.o.</Contact.CardTextBold><br/>
                        ul. Kolegialna 10 lok. 9<br/>
                        09-402 Płock<br/>
                        Tel. 24 367 33 77
                        <Contact.ShowOnMap onClick={()=>{
                            setPosition([52.543496456180044, 19.692249285550364]);
                            scrollToMap();
                        }}>Pokaż na mapie</Contact.ShowOnMap>
                    </Contact.CardListItem>
                    <Contact.CardListItem>
                        <Contact.CardTextBold>Oddział Kraków - Emmerson Lumico Sp. z o.o.</Contact.CardTextBold><br/>
                        ul. Wodna 2d<br/>
                        30-556 Kraków<br/>
                        Tel. 12 423 88 44
                        <Contact.ShowOnMap onClick={()=>{
                            setPosition([50.03484789333138, 19.9692905431007]);
                            scrollToMap();
                        }}>Pokaż na mapie</Contact.ShowOnMap>
                    </Contact.CardListItem>
                </Contact.CardList>
            </Contact.Card>
            <Contact.Map id='map'>
                <MapWithNoSSR marker={'/images/misc/marker.svg'} position={position} zoom={18} showCloseButton={false} />
            </Contact.Map>
        </Contact>
    )
}