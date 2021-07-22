import React from "react";
import {CardCommercial, Carousel, Section, Spinner} from "../components";
import {useWebPSupportCheck} from "react-use-webp-support-check";

export default function SectionCommercial({ data }){
    const webp = useWebPSupportCheck()

    return(
            <Section diagonal={true} color={{first: 'white', second: 'white'}}>
                <Section.Container>
                    <Section.Title>Powierzchnie komercyjne</Section.Title>
                    <Section.Subtitle>Wybrane lokale handlowo-usługowe, biura, magazyny i hale w naszej aktualnej ofercie.</Section.Subtitle>
                    {
                        !data &&
                        <Spinner>
                            <Spinner.IconSpinner />
                        </Spinner>
                    }
                    {(data && data.length !== 0) &&
                        <CardCommercial>
                             <Carousel>
                                 {data.map((item, key) => {
                                     const image = webp ? item.photoWebp : item.photoJpeg;
                                     return(
                                         <Carousel.Item key={item.id+key}>
                                             <CardCommercial.CardContainer>
                                                 {image && <CardCommercial.Img img={image}/>}
                                                 <CardCommercial.Box>
                                                     <CardCommercial.DescriptionTitle>{item.title}</CardCommercial.DescriptionTitle>
                                                     <CardCommercial.Localisation>{item.city ?? item.city} {item.quarter ?? item.quarter} {item.street ?? item.street}</CardCommercial.Localisation>

                                                     <CardCommercial.ListContainer>
                                                         <CardCommercial.List>
                                                             <CardCommercial.Param>Powierzchnia:</CardCommercial.Param>
                                                             <CardCommercial.Value>{item.area}m<sup>2</sup></CardCommercial.Value>
                                                         </CardCommercial.List>
                                                     </CardCommercial.ListContainer>

                                                     <CardCommercial.Text>Cena:</CardCommercial.Text>
                                                     <CardCommercial.Price>{item.price}</CardCommercial.Price>
                                                 </CardCommercial.Box>
                                             </CardCommercial.CardContainer>
                                        </Carousel.Item>
                                     )
                                     }
                                 )}
                            </Carousel>
                        </CardCommercial>
                    }
                </Section.Container>
            </Section>
    );
}