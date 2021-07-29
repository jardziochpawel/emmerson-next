import React, { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "../hooks";
import { switchPropertyType } from "../helpers/switchPropertyType";
import { useWebPSupportCheck } from "react-use-webp-support-check";
import { useQuery } from "../hooks/useQuery";
import { useRouter } from 'next/router'
import slugify from 'react-slugify';
import Head from "next/head";
import dynamic from "next/dynamic";
import { Pagination } from "../components";
import useSWR from 'swr';
import qs from "query-string";

const fetcher = (url) => fetch(url, {
    method: 'GET',
    headers: {
        "Host": 'backend-emm.draftway.eu',
        "Content-Type": 'application/json',
        "Accept-Encoding": 'gzip, deflate, br',
        "Accept": '*/*',
        "Connection": 'keep-alive',
        "Cache-Control": 'no-cache',
    }
}).then((res) => res.json());

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
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [coordinate, setCoordinate] = useState([52,21]);
    const {estate, typeOfTransaction, address, market, priceFrom, priceTo, surfaceFrom, surfaceTo, roomsFrom, roomsTo, textFromDescription, offerNumber, perPage, page } = query;
    const ref = useRef();

    useOnClickOutside(ref, () => setIsMapOpen(false));

    const {data, error} = useSWR(`https://backend-emm.draftway.eu/find?query=${address}${estate !== '' ? `&objectName=${estate}`:''}${priceFrom !== '' ? `&priceFrom=${priceFrom}`: ''}${priceTo !== '' ? `&priceTo=${priceTo}` : ''}${surfaceFrom !==  '' ? `&surfaceFrom=${surfaceFrom}` : ''}${surfaceTo !==  '' ? `&surfaceTo=${surfaceTo}` : ''}${roomsFrom !==  '' ? `&roomsFrom=${roomsFrom}` : ''}${roomsTo !==  '' ? `&roomsTo=${roomsTo}` : ''}${market !== '' ? `&marketType=${market}` : ''}${typeOfTransaction !== '' ? `&offerType=${typeOfTransaction}` : ''}${textFromDescription !== ''? `&descriptionContains=${textFromDescription}` : ''}${offerNumber !== ''? `&offerId=${offerNumber}` : ''}&results=${perPage}&page=${page}`, fetcher)

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
        query.perPage = pp;
        query.page = '1';

        router.push({
            pathname:'/lista-ofert',
            search: qs.stringify(query)
        } )
    }

    const onChangePage = (p) => {
        query.page = p;
        router.push({
            pathname:'/lista-ofert',
            search: qs.stringify(query)
        } )
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
                <Map node={ref} key={coordinate}  marker={'/images/misc/marker.svg'} position={coordinate} closeMap={showMap} />
            }

            <Header src={'bg-ofer-list'} height={'50vh'} webp={webp} smallView={false}>
                <SearchForm node={ref} height={'50vh'} />
            </Header>

            {(!data || isLoading) &&
                <Spinner />
            }

            {(data && !isLoading) &&
                <>
                    <OffersContainer data={data} webp={webp} handleClick={handleClick} openMap={openMap}/>
                    <Pagination onChangePerPage={onChangePerPage} onChange={onChangePage} page={page-1} perPage={perPage} count={Object(data).length !== 0 ? data?.lastPage : 1} currentPage={Object(data).length !== 0 ? data?.currentPage : 1} />
                </>
            }
        </>
    )
}