import React from'react'
import { Container, Row, Col } from 'react-bootstrap'
import './style.scss'
import brandImage from '../../assets/images/boros-painting-favorite-brands.png';

function Brand() {

    return(
        <Container>
            <Row>
                <Col lg={6} className="brand-content"> 
                    <h5>
                        Our favorite and most trusted brand of paint is Benjamin Moore.
                        There are other gereat brands out there and we'll use those from timeto time, 
                        but the best is the best. if you choose to use another brand, great, we still make it look the best.
                    </h5>
                </Col>
                <Col lg={6} className="brand-image">
                    <img src={brandImage} alt="" /> 
                </Col>
            </Row>
        </Container>
    )
}

export default Brand  