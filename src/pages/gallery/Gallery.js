import React from 'react';
import './style.scss';
import interiorImages from './interiorImages';
import exteriorImages from'./exteriorImages'; 

function Gallery() {
   {/* const [galleryImage, setGalleryImage] = useEffect("") */}
    
    const interiorGalleryImages = interiorImages.map((image) => (
        <div key={image.id}>
            <span className={image.span_id}> 
              <img src={image.src} alt={image.alt} />
            </span> 
        </div> 
    ))

    const exteriorGalleryImages = exteriorImages.map((image) => (
        <div key={image.id}>
            <span className={image.span_id}> 
              <img src={image.src} alt={image.alt} />
            </span> 
        </div> 
    ))

    return(
        <main className="gallery-page">
            <section className="gallery-section">
                <h2>Interior Gallery</h2>
                <div className="gallery-images-container border">
                    <div className="gallery-images-wrapper">
                        <div className="gallery-images"> 
                            {interiorGalleryImages}
                        </div> 
                    </div>
                </div>
            </section>
            <section className="gallery-section">
                <h2>Exterior Gallery</h2> 
                <div className="gallery-images-container border">
                    <div className="gallery-images-wrapper">
                        <div className="gallery-images"> 
                            {exteriorGalleryImages}
                        </div>
                    </div>
                </div>
            </section>
        </main> 
    ) 
}

export default Gallery 