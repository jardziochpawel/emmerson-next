import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
import { useWebPSupportCheck } from "react-use-webp-support-check";

const HelpForUkraine = () => {
    const Header = dynamic(()=>import('../containers/header'));
    const webp = useWebPSupportCheck();

    return (
        <>
            <Head>
                <title>Emmerson Zarządzanie Sp z o.o. | Help for Ukraine</title>
                <link rel="preload" as="image" href={'/images/misc/bg-homepage.jpeg'} />
                <link rel="preload" as="image" href={'/images/misc/bg-homepage.webp'} />
            </Head>
            <Header webp={webp} src={'help-for-ukraine'} />
        </>
    )
}

export default HelpForUkraine