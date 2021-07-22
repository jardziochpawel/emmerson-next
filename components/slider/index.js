import {  createContext, useContext } from "react";
import {
    SliderWrapper,
    Container,
    SliderSlide,
    SliderSlides,
    SliderButton,
    SliderImage,
    SliderIcon,
    SliderImageCount,
    SliderCount,
    SliderContainer, LightBoxContainer
} from './styles/slider';
import 'react-image-lightbox/style.css';

const SliderContext = createContext(null);
export default function Slider({ children, photos, currentSlide, setCurrentSlide, setIsOpen, restProps }){

    return(
        <SliderContext.Provider value={{ currentSlide, length: photos.length, setCurrentSlide, setIsOpen }}>
            <SliderContainer {...restProps}>
                { children }
            </SliderContainer>
        </SliderContext.Provider>
    );
}

Slider.Container = function SliderMainContainer({ children }){
    const { currentSlide, setCurrentSlide, setIsOpen } = useContext(SliderContext);

    const activeSlide = children.map((slide, index) => {
        return (
            <SliderSlide active={currentSlide === index} key={index} onClick={() => setIsOpen(true)}>
                { slide }
            </SliderSlide>
        );
    });

    return (

            <SliderWrapper>
                <SliderSlides currentSlide={currentSlide}>
                            { activeSlide }
                </SliderSlides>
                <Slider.Button
                    onClick={() => {
                        setCurrentSlide((currentSlide - 1 + activeSlide.length) % activeSlide.length);
                    }}
                />
                <Slider.Button
                    onClick={() => {
                        setCurrentSlide((currentSlide + 1) % activeSlide.length);
                    }}
                    right={true}
                />
                <Slider.Icon />
            </SliderWrapper>
    );
}

Slider.Item = function SliderItemContainer({ children, restProps }){

    return(
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Slider.Image = function SliderImageBox({ image, restProps }){

    return(
        <SliderImage src={image} {...restProps} isResponsive/>
    )
}

Slider.LightBox = function LightBox({ images, setIsOpen }){
    const { length, currentSlide, setCurrentSlide } = useContext(SliderContext);

    return(
            <LightBoxContainer mainSrc={images[currentSlide].file}
                               nextSrc={images[(currentSlide + 1) % length]}
                               prevSrc={images[(currentSlide + length - 1) % length]}
                               onCloseRequest={() => setIsOpen(false)}
                               onMovePrevRequest={() => setCurrentSlide((currentSlide + length - 1) % length)}
                               onMoveNextRequest={() => setCurrentSlide((currentSlide + length + 1) % length)}
            />
    )
}

Slider.Icon = function SliderIconContainer({ ...restProps}){
    const { length, currentSlide } = useContext(SliderContext);

    return(
        <SliderImageCount>
            <SliderCount> {currentSlide + 1} / { length }</SliderCount>
            <SliderIcon {...restProps} />
        </SliderImageCount>
    )
}

Slider.Button = function SliderButtonFunc({right, ...restProps}){
    return(
        <SliderButton right={right} {...restProps}>
            <svg height="40" viewBox="0 0 48 48" width="40" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="shadow">
                        <feDropShadow
                            dx="0"
                            dy="0"
                            stdDeviation="3"
                            floodColor="#000000"
                            floodOpacity="0.5"
                        />
                    </filter>
                </defs>
                {!right && <path d="M17.17 32.92l9.17-9.17-9.17-9.17 2.83-2.83 12 12-12 12z" filter="url(#shadow)"  transform="scale(-1,1) translate(-45,0)"/> }
                {right && <path d="M17.17 32.92l9.17-9.17-9.17-9.17 2.83-2.83 12 12-12 12z" filter="url(#shadow)" /> }
                <path d="M0-.25h48v48h-48z" fill="none"/>
            </svg>
        </SliderButton>
    )
}