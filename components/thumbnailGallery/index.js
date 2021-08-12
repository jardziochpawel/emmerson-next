
import {Container, ThumbnailImage, ThumbnailImageBox} from "./styles/thumnailGallery";

export default function ThumbnailGallery({ children, restProps }){

    return(
        <Container {...restProps}>{children}</Container>
    );
}

ThumbnailGallery.Images = function ThumbnailGalleryImages({ length, photos, setCurrentSlide }){
    const miniImageList = [];
        photos.map((item, index)=>{
           miniImageList.push(
                <ThumbnailImageBox onClick={ () => setCurrentSlide(index % length)} key={index} >
                    <ThumbnailImage src={item.file} lazyLoad isResponsive/>
                </ThumbnailImageBox>
            )
    });

    return(
       <> { miniImageList }</>
    );
}