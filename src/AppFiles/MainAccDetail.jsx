import React from 'react';
import '../css/common.css';
import Container from "react-bootstrap/Col";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Button} from "react-bootstrap";

export const MainAccDetail = () => {

    return(
        <Container className = "MainAccContainer">
            <Row>
                <Col>
                    <Row>Main Account</Row>
                    <Row>Test Savings Account</Row>
                    <Row>4567 **** **** 1234</Row>
                    <Row>
                        <Button onClick={showAlert} variant="contained" className="TransferButton">Transfer Money</Button>
                    </Row>
                </Col>
                <Col className="TextAlignRight">
                    <Row>Available Amount</Row>
                    <Row>$123,456.78</Row>
                </Col>
            </Row>
        </Container>
    )
}

const showAlert = () => {
    alert("Select Account");
}

