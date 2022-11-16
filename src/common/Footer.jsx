import React from 'react'
import '../css/common.css'
import Container from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const Footer = () => {

    return(
        <Container className = "Footer">
            <Col className = "footerCol">
                {/*<Row className = "footerText">*/}
                    <a href = "#" className = "complaintText">WSO2 Open Banking | 2021</a>
            {/*</Row>*/}
            </Col>
        </Container>
    )
}
