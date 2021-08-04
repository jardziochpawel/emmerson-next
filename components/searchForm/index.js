import {
    Container,
    ArrowBox,
    Bar,
    ShadowBox,
    MoreButton,
    SearchButton,
    Icon,
    SectionFilters,
    SectionButtons
} from "./styles/searchForm";

export default function SearchForm({children, ...restProps}){

    return(<Container {...restProps}>{children}</Container>);
}

SearchForm.ArrowInner = function SearchFormArrowInner({children, ...restProps}) {

    return(
        <ArrowBox {...restProps}>
            {children}
            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="32" viewBox="0 0 37 32">
                <g fill="none">
                    <g stroke="#979797">
                        <path d="M31 1C31 21 20.8 31 0.5 31"/>
                        <path d="M25 8C25 8 26.9 5.7 30.8 1L36 8"/>
                    </g>
                </g>
            </svg>
        </ArrowBox>
    );
}

SearchForm.Frame = function SearchFormFrame({children, ...restProps}) {

    return(
        <ShadowBox>
            <Bar {...restProps}>{children}</Bar>
        </ShadowBox>
    );
}

SearchForm.MoreButton = function SearchFormMoreButton({children, plusToMinus, setPlusToMinus, ...restProps}) {

    return(<MoreButton type='button' {...restProps} plusToMinus={plusToMinus} onClick={()=>setPlusToMinus(!plusToMinus)} aria-label='More Button'>{children}</MoreButton>);
}

SearchForm.SearchButton = function SearchFormButton({children, ...restProps}) {

    return(<SearchButton type='submit' aria-label='Search Button' {...restProps}>{children}</SearchButton>);
}

SearchForm.Icon = function SearchFormIcon({withoutPlus = false, ...restProps}){

    return(
        <Icon {...restProps}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className='icon-search'>
                <g>
                    <circle className="icon-search-plus" cx="12" cy="12" r="11"/>
                    <line className="icon-search-plus" x1="20" x2="31" y1="20" y2="31"/>
                    {!withoutPlus && <line className="icon-search-plus icon-search-minus" x1="12" x2="12" y1="6" y2="18" />}
                    {!withoutPlus && <line className="icon-search-plus" x1="18" x2="6" y1="12" y2="12"/>}
                </g>
            </svg>
        </Icon>
    )
}

SearchForm.SectionFilters = function SearchFormSectionFilters({children, ...restProps}){

    return(
        <SectionFilters {...restProps}>{children}</SectionFilters>
    );
}

SearchForm.SectionButtons = function SearchFormSectionButtons({children, ...restProps}){

    return(
        <SectionButtons {...restProps}>{children}</SectionButtons>
    );
}
