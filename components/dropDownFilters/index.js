
import { Container, Item, Row, ClearButton } from "./styles/dropDownFilters";

export default function DropDownFilters({children, ...restProps}){

    return(
        <Container {...restProps}>{children}</Container>
    );
}

DropDownFilters.Row = function DropDownFiltersRow({children, ...restProps}){

    return(
        <Row {...restProps}>{children}</Row>
    );
}

DropDownFilters.Item = function DropDownFiltersItem({children, ...restProps}){

    return(
        <Item {...restProps}>{children}</Item>
    );
}

DropDownFilters.ClearButton = function DropDownFiltersClearButton({children, ...restProps}){

    return(
        <ClearButton type='reset' {...restProps}>{children}</ClearButton>
    );
}