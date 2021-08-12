import Head from "next/head";
import dynamic from "next/dynamic";
import {useWebPSupportCheck} from "react-use-webp-support-check";
import {Card} from "../../components";
import React from "react";
const Header = dynamic(()=>import('../../containers/header'));
const Footer = dynamic(()=>import('../../containers/footerContainer'));


export default function Rodo(){
    const webp = useWebPSupportCheck();

    return (
        <>
            <Head>
                <title>RODO | Emmerson Zarządzanie Sp z o.o.</title>
            </Head>
            <Header src={'bg-ofer-list'} height={'50vh'} webp={webp} smallView={false} />

            <Card>
                <Card.Container>
                    <Card.Title>Klauzula informacyjna</Card.Title>


                    <Card.Paragraph>Zgodnie z art. 13 ust. 1 i ust. 2 Rozp. Parlamentu Europejskiego i&nbsp;Rady (UE) 2016/679 z&nbsp;dn.
                        27.04.2016 r. w&nbsp;sprawie ochrony osób fizycznych w&nbsp;związku z&nbsp;przetwarzaniem danych
                        osobowych i&nbsp;w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
                        (dalej również: RODO), informujemy, iż:</Card.Paragraph>


                    <Card.Paragraph><strong>/<em>administrator/&nbsp;</em></strong>Administratorem Państwa danych osobowych jest Emmerson
                        Realty S.A. z siedzibą w Warszawie, ul. Zgrupowania AK Kampinos 2, 01-943 Warszawa, KRS: 0000297408
                        (dalej również jako „Emmerson”); </Card.Paragraph>


                    <Card.Paragraph><strong>/</strong><em><strong>cel przetwarzania/&nbsp;</strong></em>Państwa dane osobowe przetwarzane
                        są w celu wykonania umowy dotyczącej pośrednictwa w zakresie nieruchomości, na&nbsp;podstawie art. 6
                        ust 1 pkt b)RODO;</Card.Paragraph>


                    <Card.Paragraph><strong>/odbiorcy danych/&nbsp;</strong>Odbiorcą Państwa danych osobowych są osoby, zainteresowane
                        nabyciem, zbyciem, najmem czy też wynajmem nieruchomości oraz inne podmioty uczestniczące w
                        transakcjach dotyczących nieruchomości. W tym celu Państwa dane są przetwarzane przez podmioty
                        będące pracownikami i współpracownikami Emmerson w zakresie niezbędnym do skojarzenia stron
                        transakcji i doprowadzenia do jej finalizacji. Nie planujemy przekazania Państwa danych osobowych
                        poza terytorium EOG, jeśli pojawi się taka konieczność to wyłącznie w celu realizacji zawartej umowy
                        dotyczącej pośrednictwa w zakresie nieruchomości;</Card.Paragraph>


                    <Card.Paragraph><em><strong>/serwer pośrednika/&nbsp;</strong></em>Państwa dane osobowe są przekazane przez Emmerson
                        na serwer znajdujący się we Francji. Dane umieszczone na tym serwerze są szyfrowane; a serwerem
                        zarządza OVH Sp. z o.o. z siedzibą we Wrocławiu, numer KRS:&nbsp;0000220286;</Card.Paragraph>


                    <Card.Paragraph><strong>/okres/&nbsp;</strong>Państwa dane osobowe są przechowywane przez okres niezbędny do pełnego
                        zrealizowania umowy dotyczącej pośrednictwa w zakresie nieruchomości (np. konieczność wystawienia
                        dokumentów księgowych, udzielania odpowiedzi na reklamacje, dochodzenia przez nas ewentualnych
                        roszczeń wynikających z umowy pośrednictwa czy też tworzenia analiz na potrzeby wewnętrzne
                        Emmerson), z uwzględnieniem przepisów prawa powszechnie obowiązującego;</Card.Paragraph>


                    <Card.Paragraph><em><strong>/uprawnienia/&nbsp;</strong></em>Posiadają Państwo prawo dostępu do treści swoich danych
                        oraz prawo ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia, wniesienia
                        sprzeciwu oraz do cofnięcia zgody w dowolnym momencie, np. drogą telefoniczną lub na adres email:
                        daneosobowe@emmerson.pl;</Card.Paragraph>


                    <Card.Paragraph><strong><em>/skarga/&nbsp;</em></strong>Mają Państwo prawo wniesienia skargi do Prezesa Urzędu
                        Ochrony Danych Osobowych gdy uznają Państwo, iż przetwarzanie danych osobowych Państwa dotyczących
                        narusza przepisy RODO; </Card.Paragraph>


                    <Card.Paragraph><em><strong>/warunek wykonania umowy/&nbsp;</strong></em>Podanie przez Państwa danych osobowych
                        jest&nbsp;niezbędne do realizacji umowy dotyczącej pośrednictwa w zakresie nieruchomości;</Card.Paragraph>


                    <Card.Paragraph><em><strong>/profilowanie/&nbsp;</strong></em>Państwa dane są&nbsp;przetwarzane w sposób
                        zautomatyzowany w tym również w formie profilowania, w celu przygotowania odpowiednich ofert.</Card.Paragraph>
                </Card.Container>
            </Card>

            <Footer />
        </>
    );
}