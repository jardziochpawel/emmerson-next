import { Footer } from '../components';

export default function FooterContainer({diagonal = false}){

    return(
        <>
            <Footer diagonal={diagonal}>
                <Footer.Container>
                    <div>
                        <img src='/images/misc/logotyp-footer.png' alt='Emmerson Zarządzanie sp z o.o.' /><br/><br/>
                        Emmerson Zarządzanie Sp. z o.o.<br/>
                        ul.Zgrupowania AK Kampinos 2,<br/>
                        01-943 Warszawa<br/>
                        NIP: 5252313818<br/><br/>
                        Pon - Pt: 9-17<br/>
                        Tel: 22 827 00 00
                    </div>
                    <div>
                        &nbsp;
                    </div>
                    <div>
                        &nbsp;
                    </div>
                </Footer.Container>
            </Footer>
        </>
    )
}