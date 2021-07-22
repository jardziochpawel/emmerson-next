import { Container, IconSpinner } from "./style/spinner";

export default function Spinner({children, restProps}){
    return <Container  {...restProps}>{children}</Container>
}

Spinner.IconSpinner =  function SpinnerIconSpinner(restProps){
    return <IconSpinner {...restProps} />
}