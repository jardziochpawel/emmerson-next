import React, {useEffect, useRef, useState} from "react";
import { useFetch } from "../hooks/useFetch";
import { numberWithSpaces } from "../helpers/numberWithSpaces";
import { useOnClickOutside } from "../hooks";
import { switchPropertyType } from "../helpers/switchPropertyType";
import { useWebPSupportCheck } from "react-use-webp-support-check";
import { useQuery } from "../hooks/useQuery";
import { useRouter } from 'next/router'
import slugify from 'react-slugify';
import Head from "next/head";
import dynamic from "next/dynamic";

export default function ListaOfert(){
    const SearchForm = dynamic(()=>import('../containers/searchForm'),{ssr: false});
    const Header = dynamic(()=>import('../containers/header'));
    const Offers = dynamic(()=>import('../components/offers'));
    const Pagination = dynamic(()=>import('../components/pagination'));
    const Spinner = dynamic(()=>import('../components/spinner'));
    const Map = dynamic(()=>import('../components/map'));

    const router = useRouter();
    const query = useQuery();
    const webp = useWebPSupportCheck();

    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [coordinate, setCoordinate] = useState([52,21]);
    const {estate, typeOfTransaction, address, market, priceFrom, priceTo, surfaceFrom, surfaceTo, roomsFrom, roomsTo, textFromDescription, offerNumber} = query;
    const ref = useRef();

    useOnClickOutside(ref, () => setIsMapOpen(false));

    const response = useFetch(`https://backend-emm.draftway.eu/find?query=${address}${estate !== '' ? `&objectName=${estate}`:''}${priceFrom !== '' ? `&priceFrom=${priceFrom}`: ''}${priceTo !== '' ? `&priceTo=${priceTo}` : ''}${surfaceFrom !==  '' ? `&surfaceFrom=${surfaceFrom}` : ''}${surfaceTo !==  '' ? `&surfaceTo=${surfaceTo}` : ''}${roomsFrom !==  '' ? `&roomsFrom=${roomsFrom}` : ''}${roomsTo !==  '' ? `&roomsTo=${roomsTo}` : ''}${market !== '' ? `&marketType=${market}` : ''}${typeOfTransaction !== '' ? `&offerType=${typeOfTransaction}` : ''}${textFromDescription !== ''? `&descriptionContains=${textFromDescription}` : ''}${offerNumber !== ''? `&offerId=${offerNumber}` : ''}&results=${perPage}&page=${page}`, {
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

    const loadingFunction = () => {

        setIsLoading(true);

        setTimeout(()=>setIsLoading(false), 500);
    }

    useEffect(() => {
        window.scrollTo(0,0);
        if(typeof loadingFunction === "function"){
            return loadingFunction();
        }
    }, []);

    const handleClick = (objectName, offerType, title, id) => {
        const regExp = /[a-zA-Z]/g;

        if(!regExp.test(title)){
            return router.push(`/${slugify(switchPropertyType(objectName))}/${slugify(offerType)}/oferta/${id}`);
        }
        const titleCorrect = title.replace(' - ', ' ');
        router.push(`/${slugify(switchPropertyType(objectName))}/${slugify(offerType)}/${slugify(titleCorrect)}/${id}`);
    }

    const onChangePerPage = (pp) => {
        setPerPage(pp);
        if(pp > perPage){
            setPage(1)
        }
    }

    const onChangePage = (p) => {
        setPage(p);
    }

    const openMap = (latLng) => {
        setCoordinate(latLng);
        showMap();
    }

    const showMap = () => {
        setIsMapOpen(!isMapOpen);
    }
    return(
        <>
            <Head>
                {typeof address !== "undefined" && <title>{`Lista Ofert - ${decodeURIComponent(address)} |`} Emmerson Zarządzanie Sp z o.o.</title>}
                {typeof address === "undefined" && <title>Lista Ofert | Emmerson Zarządzanie Sp z o.o.</title>}
            </Head>
            {
                isMapOpen &&
                <Map node={ref} key={coordinate}>
                    <Map.Container marker={'/images/misc/marker.svg'} position={coordinate} closeMap={showMap}/>
                </Map>
            }

            <Header src={'bg-ofer-list'} height={'50vh'} webp={webp} >
                <SearchForm node={ref} height={'50vh'} />
            </Header>

            {(!response.data || isLoading) &&
            <Spinner>
                <Spinner.IconSpinner />
            </Spinner>
            }

            {(response.data && !isLoading) &&
            <>
                <Offers>
                    <Offers.OfferCount>Liczba ofert: {response.data?.count}</Offers.OfferCount>
                    {Object(response.data).length !== 0 && response.data.data.map((item, key) => {
                        if(item.priceCurrency === 'PLN')
                            item.priceCurrency = 'zł';

                        return (
                            <Offers.CardContainer key={key}>
                                <Offers.CardImage webp={webp} imageJpeg={item.photoJpeg.replace('jpg', 'jpeg')} imageWebp={item.photoWebp}  onClick={()=>handleClick(item.objectName, item.offerType, item.title, item.id)}/>
                                <Offers.CardBody>
                                    <Offers.CardHeader>
                                        <Offers.Title onClick={()=>handleClick(item.objectName, item.offerType,item.title, item.id)}>{item.title}</Offers.Title>
                                        <Offers.Localisation onClick={()=>openMap([item.geoMarker.latitude, item.geoMarker.longitude])}>
                                            <Offers.LocationIcon />
                                            { switchPropertyType(item.objectName) } na {item.offerType}: { item.street && item.street + ', '}{ item.quarter && item.quarter + ', '}{item.city}, {item.province}
                                        </Offers.Localisation>
                                    </Offers.CardHeader>
                                    <Offers.CardText>
                                        <Offers.Text>
                                            { numberWithSpaces(item.area) } m<sup>2</sup>&nbsp;&nbsp;&nbsp;
                                            { numberWithSpaces(Math.floor(item.price / item.area)) } {item.priceCurrency}/m<sup>2</sup>
                                        </Offers.Text>
                                        <Offers.Price>{numberWithSpaces(item.price)} {item.priceCurrency}</Offers.Price>
                                    </Offers.CardText>
                                </Offers.CardBody>
                            </Offers.CardContainer>
                        );
                    })}
                    { response.data.data === 0 && <div>Brak ofert</div> }
                </Offers>
                <Pagination onChange={onChangePage} count={Object(response.data).length !== 0 ? response.data.lastPage : 1} currentPage={Object(response.data).length !== 0 ? response.data.currentPage : 1}>
                    <Pagination.ChoiceButton onChange={(e) =>  onChangePerPage(e.target.value)}>
                        <Pagination.ChoiceItem>10</Pagination.ChoiceItem>
                        <Pagination.ChoiceItem>20</Pagination.ChoiceItem>
                        <Pagination.ChoiceItem>30</Pagination.ChoiceItem>
                        <Pagination.ChoiceItem>40</Pagination.ChoiceItem>
                        <Pagination.ChoiceItem>50</Pagination.ChoiceItem>
                    </Pagination.ChoiceButton>
                </Pagination>
            </>
            }
        </>
    )
}