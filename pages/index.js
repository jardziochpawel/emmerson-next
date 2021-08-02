import React, { useRef } from 'react';
import { useWebPSupportCheck } from "react-use-webp-support-check";
import Head from 'next/head';
import dynamic from "next/dynamic";

const SearchForm = dynamic(()=>import('../containers/searchForm'),{ ssr: false });
const SectionCommercial = dynamic(()=>import('../containers/sectionCommercial'));
const Header = dynamic(()=>import('../containers/header'));
const Feature = dynamic(()=>import('../components/feature'));
const SectionOffers = dynamic(()=>import('../containers/sectionNewOffers'));
const Footer = dynamic(()=>import('../containers/footerContainer'));

export default function Index({ commercial, random }){

    const ref = useRef();
    const webp = useWebPSupportCheck();

    return(
        <div ref={ref}>
            <Head>
                <title>Emmerson | Emmerson Zarządzanie Sp z o.o. | Biuro Nieruchomości Warszawa | Zarządzanie Nieruchomościami</title>
                <link rel="preload" as="image" href="/images/misc/bg-homepage.jpeg" />
                <link rel="preload" as="image" href="/images/misc/bg-homepage.webp" />
            </Head>
            <Header webp={webp} smallView={true}>
                <Feature />
                <SearchForm node={ref} />
            </Header>
            <>
                <SectionOffers webp={webp} />
                <SectionCommercial webp={webp} />
                <Footer diagonal={true} />
            </>
        </div>
    )
}
