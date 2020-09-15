import React from 'react'; 
import aboutImage from '../../assets/images/brian-boros-boros-painting.jpg'; 
import {Container, Row, Col} from 'react-bootstrap'; 


function About() {

    return(
        <Container fluid className="about-container">
            <Row className="about-section">
                <Col className="about-content">
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
                    <img src={aboutImage} /> 
                </Col>
            </Row>
        </Container>
    )
}

export default About