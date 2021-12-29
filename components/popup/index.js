import { Container, Background, Box} from "./styles/popup";


export default function Popup({isOpenPopup, children, ...restProps}){

    return(
            <Container isOpenPopup={isOpenPopup} {...restProps}>{children}</Container>
    );
}

Popup.Background = function PopupBackground({...restProps}){

    return(<Background {...restProps}/>)
}

Popup.Box = function PopupBox({node, background, children, ...restProps}){


    return(
            <Box ref={node} background={background} {...restProps}>{children}</Box>
    );
}