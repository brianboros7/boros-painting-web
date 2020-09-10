import React from 'react'; 
import aboutImage from './HomeImageData'; 
import {Container, Row, Col} from 'react-bootstrap'; 

function About() {

    return(
        <Container fluid className="about-container">
            <Row className="about-content">
                <Col>
                    <h4>Boros Painting</h4>
                    <h5>
                        Started by Brian Boros, Boros Painting is a family owned 
                        and operated painting service from St. John Indiana. 
                        With over 30+ years in busienss and over 25+ years in Saint John and Northwest indiana,
                        Brian Boros has done it all! When it comes to 
                        painting interior and exterior residential work, Brian is top-tier and comes highly recommended.
                        In fact, we lived off referral based busienss for over 25 years and it wasn't until 
                        his children and wife nagging a bit, we decided put up 
                        a website and share soem work via social media.
                    </h5>
                </Col>
                <Col>
                    {aboutImage.map((image) => (
                        <img key={image.id} src={image.src} alt={image.alt} /> 
                    ))}
                </Col>
            </Row>
        </Container>
    )
}

export default About