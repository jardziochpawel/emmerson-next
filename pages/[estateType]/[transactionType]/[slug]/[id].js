import {useEffect, useState} from "react";
import { useWebPSupportCheck } from "react-use-webp-support-check";
import Head from "next/head";
import dynamic from "next/dynamic";
import variationByCases from "../../../../helpers/variationByCases";
import { capitalizeFirstLetter } from "../../../../helpers/capitalizeFirstLetter";
import { getPropertyAndTransaction } from "../../../../helpers/getPropertyAndTransaction";

const Header = dynamic(()=>import('../../../../containers/header'));
const Spinner = dynamic(()=>import('../../../../components/spinner'));
const OfferContainer = dynamic(()=>import('../../../../containers/offerContainer'));
const Footer = dynamic(()=>import('../../../../containers/footerContainer'));

export default function Offer({data}) {

    const webp = useWebPSupportCheck();
    let images = [];
    const [isOpen, setIsOpen] = useState(false);
    const [hide, setHide] = useState(false);
    const [position, setPosition] = useState([0,0])
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState(`Proszę o kontakt w sprawie ogłoszenia, numer w biurze: ${data.id}`)

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

    const scrollToDescription = () => {
        const el = document.getElementById('description');
        const rect = el.getBoundingClientRect();
        window.scrollTo(rect.left + window.scrollX,rect.top + window.scrollY);
    }

    const title = data.title ?  data.title.replace(/\s/g, '') : '';

    if(title.length === 0){
        const obj = getPropertyAndTransaction(data.id)
        data.title = `${ capitalizeFirstLetter(obj.property) } ${ Math.floor(data.area) }m2, ${data.rooms ? data.rooms : ''} ${data.rooms ? variationByCases(data.rooms, 'pokój', 'pokoje', 'pokoi'): '' } na ${data.offerType}`
    }

    if(data) {
        images = webp ? data.photosWebp : data.photosJpeg;
    }

    const array =  Object.entries(data.flatDetails || data.houseDetails || data.commercialPropertyDetails || data.terrainDetails || data.hallDetails || []);

    return (
        <>
            <Head>
                <title>{ data.title } | Emmerson Zarządzanie Sp z o.o.</title>
            </Head>
            <Header webp={webp} bg={false} color={'white'} smallView={false}/>
            {
                ( !data) &&
                <Spinner />
            }
            <OfferContainer
                scrollToMap={scrollToMap}
                currentSlide={currentSlide}
                item={data}
                images={images}
                array={array}
                value={value}
                setValue={setValue}
                setCurrentSlide={setCurrentSlide}
                loading={loading}
                position={position}
                hide={hide}
                setHide={setHide}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                scrollToDescription={scrollToDescription}
            />
            <Footer />
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

    if(json?.type === 404){
        ctx.res.writeHead(302,{ Location: '/404' });
        ctx.res.end();

        return {data: []}
    }

    return { data: json };
}