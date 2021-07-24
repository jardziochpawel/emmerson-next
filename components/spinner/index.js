import { Container, IconSpinner } from "./style/spinner";

export default function Spinner({ restProps }){
    return <Container  {...restProps}><Spinner.IconSpinner /></Container>
}

Spinner.IconSpinner =  function SpinnerIconSpinner(restProps){
    return <IconSpinner {...restProps} />
}