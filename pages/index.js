import React, { useRef } from 'react';
import { useWebPSupportCheck } from "react-use-webp-support-check";
import Head from 'next/head';
import dynamic from "next/dynamic";

export default function Index({ commercial, random }){
    const SearchForm = dynamic(()=>import('../containers/searchForm'),{ssr: false});
    const SectionCommercial = dynamic(()=>import('../containers/sectionCommercial'));
    const Header = dynamic(()=>import('../containers/header'));
    const Feature = dynamic(()=>import('../components/feature'));
    const SectionOffers = dynamic(()=>import('../containers/sectionNewOffers'));

    const ref = useRef();
    const webp = useWebPSupportCheck();

    return(
        <div ref={ref}>
            <Head>
                <title>Emmerson | Emmerson Zarządzanie Sp z o.o. | Biuro Nieruchomości Warszawa | Zarządzanie Nieruchomościami</title>
            </Head>
            <Header webp={webp} dontShowOnSmallViewPort={true}>
                <Feature />
                <SearchForm node={ref} />
            </Header>
            <>
                <SectionOffers data={random} webp={webp}/>
                <SectionCommercial data={commercial} webp={webp}/>
            </>
        </div>
    )
}

Index.getInitialProps = async (ctx) => {

    const resCommercial = await fetch(`https://backend-emm.draftway.eu/random/1/9`, {
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

    const res = await fetch(`https://backend-emm.draftway.eu/random/0/3`, {
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

    const jsonCommercial = await resCommercial.json()
    return { commercial: jsonCommercial, random: json }
}