import Head from "next/head";
import { useWebPSupportCheck } from "react-use-webp-support-check";
import dynamic from "next/dynamic";
const Header = dynamic(()=>import('../containers/header'));
const ContactContainer = dynamic(()=>import('../containers/contactContainer'));
const Footer = dynamic(()=>import('../containers/footerContainer'));

export default function Contact(){
    const webp = useWebPSupportCheck();

    return(
        <>
            <Head>
                <title>Kontakt | Emmerson Zarządzanie Sp z o.o.</title>
            </Head>
            <Header webp={webp} src={'bg-ofer-list'} height={'50vh'} color={'white'} />
            <ContactContainer />
            <Footer />
        </>
    )
}