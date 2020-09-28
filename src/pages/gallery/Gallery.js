import React from 'react';
import './style.scss';
import interiorImages from './interiorImages';
import exteriorImages from'./exteriorImages'; 

function Gallery() {

    const interiorGalleryImages = () => {
        {interiorImages.map((image) => ( 
            <img key={image.id} src={image.src} alt={image.alt} /> 
        ))} 
    }
    const exteriorGalleryImages = () => {
        {exteriorImages.map((image) => ( 
            <img key={image.id} src={image.src} alt={image.alt} /> 
        ))} 
    }

    return(
        <main className="gallery-page">
            <section className="gallery-section">
                <h2>Interior Gallery</h2>
                <div className="gallery-images-container border">
                    <div className="gallery-images">
                        <div className="gallery-image"> 
                            {interiorGalleryImages}
                        </div> 
                    </div>
                </div>
            </section>
            <section className="gallery-section">
                <h2>Exterior Gallery</h2> 
                <div className="gallery-images-container border">
                    <div className="gallery-images">
                        <div className="gallery-image"> 
                            {exteriorGalleryImages}
                        </div>
                    </div>
                </div>
            </section>
        </main> 
    ) 
}

export default Gallery 