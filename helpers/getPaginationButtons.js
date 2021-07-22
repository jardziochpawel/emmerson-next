
export const GetPaginationButtons = (Component, onChangePage, lastPage, currentPage) => {
    let page = 1;
    let result = [];

    result.push( <Component.PageButton page={page} func={ onChangePage } key={page * new Date().getMilliseconds()}>{ page }</Component.PageButton> )

    if(currentPage >= 4){
        result.push( <Component.PageButton page={'...'} func={ onChangePage } key={'three-dot-key-first'} disabled={true}> ... </Component.PageButton> );
    }

    page = currentPage - 1;

    while (result.length -2 < 3 || lastPage < page){
        if(page > 1){
            result.push(<Component.PageButton page={page} func={ onChangePage } key={page * new Date().getMilliseconds()}>{ page }</Component.PageButton>)
        }
        page++
    }

    if(currentPage !== lastPage && currentPage !== lastPage -1 && currentPage !== lastPage -2 ){
        result.push( <Component.PageButton page={'...'} func={ onChangePage } key={'three-dot-key-second'}  disabled={true}> ... </Component.PageButton> );
    }

    if(lastPage !== 1){
        result.push( <Component.PageButton page={lastPage} func={ onChangePage } key={lastPage * new Date().getMilliseconds()}>{ lastPage }</Component.PageButton> )
    }


    console.log(result);
    return result;
}