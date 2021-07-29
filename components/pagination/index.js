import { ChoiceButton, ChoiceItem, Container } from "./styled/pagination";
import ReactPaginate from 'react-paginate';
import React from "react";

export default function Pagination({onChangePerPage, page, perPage, count, onChange, ...restProps}) {

    return(
        <Container {...restProps}>
            <ReactPaginate
                previousLabel="<"
                nextLabel=">"
                breakLabel="..."
                breakClassName="break-me"
                pageCount={count}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                forcePage={page}
                onPageChange={pagination => onChange(pagination.selected+1)}
                containerClassName="pagination"
                activeClassName="active"
                pageLabelBuilder={(page) => <span className='button'>{page}</span>}
            />
            <Pagination.ChoiceButton onChangePerPage={onChangePerPage} perPage={perPage}/>
        </Container>
    )
}


Pagination.ChoiceButton = function PaginationChoiceButton({onChangePerPage, perPage, restProps}){

    return(
        <ChoiceButton value={perPage} onChange={(e) =>  onChangePerPage(e.target.value)} {...restProps}>
            <Pagination.ChoiceItem>10</Pagination.ChoiceItem>
            <Pagination.ChoiceItem>20</Pagination.ChoiceItem>
            <Pagination.ChoiceItem>30</Pagination.ChoiceItem>
            <Pagination.ChoiceItem>40</Pagination.ChoiceItem>
            <Pagination.ChoiceItem>50</Pagination.ChoiceItem>
        </ChoiceButton>
    );
}

Pagination.ChoiceItem = function PaginationChoiceItem({children,  restProps}){

    return(<ChoiceItem {...restProps}>{children}</ChoiceItem>)
}