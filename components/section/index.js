import {useContext, createContext} from "react";
import {Container, DiagonalContainer, Subtitle, Title} from "./styles/section";

export const SectionContext = createContext(null);

export default function Section({children, diagonal = false, color = false,...restProps}){

    return(
        <SectionContext.Provider value={{ diagonal }}>
            <DiagonalContainer diagonal={diagonal} color={color} {...restProps}>{children}</DiagonalContainer>
        </SectionContext.Provider>
    );
}

Section.Container = function SectionContainer({children, ...restProps}){
    const { diagonal } = useContext(SectionContext);

    return(<Container {...restProps} diagonal={diagonal}>{children}</Container>)
}

Section.Title = function SectionTitle({children, ...restProps}){

    return(<Title {...restProps}>{children}</Title>);
}

Section.Subtitle = function SectionSubtitle({children, ...restProps}){

    return(<Subtitle {...restProps}>{children}</Subtitle>);
}