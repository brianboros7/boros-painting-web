import React from 'react';
import './style.scss';
import {Container, Row, Col} from 'react-bootstrap'; 
import interiorImages from './interiorImages';
import exteriorImages from'./exteriorImages'; 

function Gallery() {

    const interiorGalleryImages = interiorImages.map((image) => (
        <Col lg={3} key={image.id} className="gallery-image-container">
            <span className={image.span_id}> 
              <img src={image.src} alt={image.alt} />
            </span> 
        </Col> 
    ))

    const exteriorGalleryImages = exteriorImages.map((image) => (
        <Col lg={3} key={image.id} className="gallery-image-container">
            <span className={image.span_id}> 
              <img src={image.src} alt={image.alt} />
            </span> 
        </Col> 
    ))

    return(
        <main className="gallery-page">
            <section className="gallery-section">
                <h2>Interior Gallery</h2>
                <div className="gallery-images-container border">
                    <Container className="gallery-images-wrapper">
                        <Row className="gallery-images"> 
                            {interiorGalleryImages}
                        </Row> 
                    </Container>
                </div>
            </section>
            <section className="gallery-section">
                <h2>Exterior Gallery</h2> 
                <div className="gallery-images-container border">
                    <Container className="gallery-images-wrapper">
                        <Row className="gallery-images"> 
                            {exteriorGalleryImages}
                        </Row>
                    </Container>
                </div>
            </section>
        </main> 
    ) 
}

export default Gallery 