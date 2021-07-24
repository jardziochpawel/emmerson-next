import React, { useEffect, useRef, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useOnClickOutside } from "../hooks";
import { switchPropertyType } from "../helpers/switchPropertyType";
import { useWebPSupportCheck } from "react-use-webp-support-check";
import { useQuery } from "../hooks/useQuery";
import { useRouter } from 'next/router'
import slugify from 'react-slugify';
import Head from "next/head";
import dynamic from "next/dynamic";
import { Pagination } from "../components";

export default function ListaOfert(){
    const SearchForm = dynamic(()=>import('../containers/searchForm'),{ssr: false});
    const Header = dynamic(()=>import('../containers/header'));
    const OffersContainer = dynamic(()=>import('../containers/offersContainer'));
    const Spinner = dynamic(()=>import('../components/spinner'),{ssr: false});
    const Map = dynamic(()=>import('../components/map'),{ssr: false});

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

            <Header src={'bg-ofer-list'} height={'50vh'} webp={webp} smallView={false}>
                <SearchForm node={ref} height={'50vh'} />
            </Header>

            {(!response.data || isLoading) &&
                <Spinner />
            }

            {(response.data && !isLoading) &&
                <>
                    <OffersContainer data={response.data} webp={webp} handleClick={handleClick} openMap={openMap}/>
                    <Pagination onChangePerPage={onChangePerPage} onChange={onChangePage} count={Object(response.data).length !== 0 ? response.data?.lastPage : 1} currentPage={Object(response.data).length !== 0 ? response.data?.currentPage : 1} />
                </>
            }
        </>
    )
}