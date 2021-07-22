import { useState } from "react";
import { CarouselWrapper, Container, CarouselSlide, CarouselSlides, CarouselContainer, CarouselButton } from './styles/carousel';

export default function Carousel({ children }){
    const [currentSlide, setCurrentSlide] = useState(0);

    const activeSlide = children.map((slide, index) => {
        return (
            <CarouselSlide active={currentSlide === index} key={index}>
                {slide}
            </CarouselSlide>
        );
    });

    return (
        <CarouselContainer>
            <Carousel.Button
                onClick={() => {
                    setCurrentSlide((currentSlide - 1 + activeSlide.length) % activeSlide.length);
                }}
            />

            <CarouselWrapper>
                <CarouselSlides currentSlide={currentSlide}>
                    { activeSlide }
                </CarouselSlides>
            </CarouselWrapper>

            <Carousel.Button
                onClick={ () => {
                    setCurrentSlide((currentSlide + 1) % activeSlide.length);
                }}
                right={true}
            />
        </CarouselContainer>
    );
};

Carousel.Item = function CarouselItem({children, ...restProps}){
    return(
        <Container {...restProps}>{children}</Container>
    )
}

Carousel.Button = function CarouselButtonIcon({...restProps}){
    return(
        <CarouselButton {...restProps}>
            <svg height="40" viewBox="0 0 48 48" width="40" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.17 32.92l9.17-9.17-9.17-9.17 2.83-2.83 12 12-12 12z"/>
                <path d="M0-.25h48v48h-48z" fill="none"/>
            </svg>
        </CarouselButton>
    )
}