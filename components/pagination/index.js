
import {ChoiceButton, ChoiceItem, Container} from "./styled/pagination";
import ReactPaginate from 'react-paginate';

export default function Pagination({currentPage, count, onChange, children, restProps}) {
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
                onPageChange={pagination => onChange(pagination.selected+1)}
                containerClassName="pagination"
                activeClassName="active"
                pageLabelBuilder={(page)=><span className='button'>{page}</span>}
            />
            {children}
        </Container>
    )
}


Pagination.ChoiceButton = function PaginationChoiceButton({children, onChange, restProps}){

    return(<ChoiceButton onChange={onChange} {...restProps}>{children}</ChoiceButton>)
}

Pagination.ChoiceItem = function PaginationChoiceItem({children,  restProps}){

    return(<ChoiceItem {...restProps}>{children}</ChoiceItem>)
}