import { useEffect, useRef } from 'react';
import { Feature } from "../components";
import { Header, SectionCommercial, SectionOffers } from "../containers";
import Head from 'next/head';
import dynamic from "next/dynamic";

export default function Index({ commercial, random }){
    const SearchForm = dynamic(()=>import('../containers/searchForm'),{ssr: false});
    const ref = useRef();

    useEffect(() => {
        window.scrollTo(0,0);
    },[]);

    return(
        <div ref={ref}>
            <Head>
                <title>Emmerson Zarządzanie Sp z o.o. | Biuro Nieruchomości | Zarządzanie Nieruchomościami</title>
            </Head>
            <Header>
                <Feature>
                    <Feature.Title>
                        Sprzedamy lub wynajmiemy<br/>
                        Twoją nieruchomość
                    </Feature.Title>
                    <Feature.Text>
                        Dla naszego wspólnego bezpieczeństwa
                        zmodyfikowaliśmy nasze procedury i
                        dostosowaliśmy je do nowej sytuacji. <Feature.Link>Jak działamy?</Feature.Link>
                    </Feature.Text>
                    <Feature.Button>Więcej</Feature.Button>
                </Feature>

                <SearchForm node={ref}/>
            </Header>
            <>
                <SectionOffers data={random}/>
                <SectionCommercial data={commercial}/>
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