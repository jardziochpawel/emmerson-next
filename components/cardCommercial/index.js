import {
    Box,
    Container,
    DescriptionTitle,
    LocalisationTitle,
    ListContainer,
    List,
    Text,
    Price,
    Img,
    Param,
    Value,
    CardContainer
} from "./style/cardCommercial";

export default function CardCommercial({children, ...restProps}){

    return(<Container {...restProps}>{children}</Container>);
}

CardCommercial.CardContainer = function CardCommercialContainer({children, ...restProps}){

    return(<CardContainer {...restProps}>{children}</CardContainer>);
}

CardCommercial.Box = function CardCommercialBox({children, ...restProps}){

    return(<Box {...restProps}>{children}</Box>);
}

CardCommercial.DescriptionTitle = function CardCommercialDescriptionTitle({children, ...restProps}){

    return(<DescriptionTitle {...restProps}>{children}</DescriptionTitle>);
}

CardCommercial.Localisation = function CardCommercialLocalisationTitle({children, ...restProps}){

    return(<LocalisationTitle {...restProps}><CardCommercial.LocalisationIco/>{children}</LocalisationTitle>);
}

CardCommercial.List = function CardCommercialList({children, ...restProps}){

    return(<List {...restProps}>{children}</List>);
}

CardCommercial.ListContainer = function CardCommercialListContainer({children, ...restProps}){

    return(<ListContainer {...restProps}>{children}</ListContainer>);
}

CardCommercial.Param = function CardCommercialParam({children, ...restProps}){

    return(<Param {...restProps}>{children}</Param>);
}

CardCommercial.Value = function CardCommercialValue({children, ...restProps}){

    return(<Value {...restProps}>{children}</Value>);
}

CardCommercial.Text = function CardCommercialText({children, ...restProps}){

    return(<Text {...restProps}>{children}</Text>);
}

CardCommercial.Price = function CardCommercialPrice({children, ...restProps}){

    return(<Price {...restProps}>{children}</Price>);
}

CardCommercial.Img = function CardCommercialImg({img, ...restProps }){

    return(<Img src={img} lazyLoad {...restProps} />);
}

CardCommercial.LocalisationIco = function CardCommercialLocalisationIco(){

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 384 512">
            <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
        </svg>
    )
}