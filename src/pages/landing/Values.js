import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import './style.scss'; 
import paintIcon1 from '../../assets/images/paint-icon-1.svg'; 
import paintIcon2 from '../../assets/images/paint-icon-2.svg'; 
import paintIcon3 from '../../assets/images/paint-icon-3.svg';

function Values() {

    return(
        <Container className="values-container">
            <Row className="values-main">
                <Col xs={12} lg={4} className="values-content">
                    <Card>
                        <Card.Img src={paintIcon1} alt="" /> 
                        <Card.Body>
                            <Card.Title>Experienced</Card.Title>
                            <Card.Text>
                                Experience matters and matters to us. With over 30+ years in busienss, Brian has 
                                worked with or has done every style of painting you can do.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} lg={4} className="values-content">
                    <Card>
                        <Card.Img src={paintIcon2} alt="" /> 
                        <Card.Body>
                            <Card.Title>Experienced</Card.Title>
                            <Card.Text>
                                Experience matters and matters to us. With over 30+ years in busienss, Brian has 
                                worked with or has done every style of painting you can do.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} lg={4} className="values-content" >
                    <Card>
                        <Card.Img src={paintIcon3} alt="" /> 
                        <Card.Body>
                            <Card.Title>Experienced</Card.Title>
                            <Card.Text>
                                Experience matters and matters to us. With over 30+ years in busienss, Brian has 
                                worked with or has done every style of painting you can do.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Values