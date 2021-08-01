import {Footer, Header} from '../components';
import {ROUTES} from "../constants/routes";
import React from "react";
import Link from 'next/link';
import {useWebPSupportCheck} from "react-use-webp-support-check";

export default function FooterContainer({diagonal = false}){
    const webp = useWebPSupportCheck();

    const renderNavFooter = () => {
        const array = [];
        ROUTES.mainMenu.map(item =>{
            array.push(
                <Footer.ListItem><Link href={item.link} key={item.name}>{item.name}</Link></Footer.ListItem>
            );
        })
        return array;
    }
    return(
        <>
            <Footer diagonal={diagonal}>
                <Footer.Container>
                    <Footer.Column>
                        <img src={webp ? '/images/misc/logotyp-footer.webp' : '/images/misc/logotyp-footer.png'} alt='Emmerson Zarządzanie sp z o.o.' width='184' height='45' /><br/><br/>
                        Emmerson Zarządzanie Sp. z o.o.<br/>
                        ul.Zgrupowania AK Kampinos 2,<br/>
                        01-943 Warszawa<br/>
                        NIP: 5252313818<br/><br/>
                        Pon - Pt: 9-17<br/>
                        Tel: 22 827 00 00
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.List>
                            { renderNavFooter() }
                        </Footer.List>
                    </Footer.Column>
                    <Footer.Column className='tag'>
                        <Footer.Tag>#Nieruchomości</Footer.Tag>
                        <Footer.Tag>#Sprzedaż</Footer.Tag>
                        <Footer.Tag>#Wynajem</Footer.Tag>
                        <Footer.Tag>#Mieszkania</Footer.Tag>
                        <Footer.Tag>#Domy</Footer.Tag>
                        <Footer.Tag>#Lokale</Footer.Tag>
                        <Footer.Tag>#Biura</Footer.Tag>
                        <Footer.Tag>#Grunty</Footer.Tag>
                        <Footer.Tag>#Hale</Footer.Tag>
                        <Footer.Tag>#Magazyny</Footer.Tag>
                    </Footer.Column>
                </Footer.Container>
            </Footer>
        </>
    )
}