import React from 'react'
import '../css/common.css'
import {Header} from "../common/Header";
import {Footer} from "../common/Footer";
import {Slider} from "./Slider";
import Container from "react-bootstrap/Col";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {MainAccDetail} from "./MainAccDetail";
import {AccountDetail} from "./AccountDetail";

export const Home = () => {

    return(
        <Container className = "HomeContainer">
            <Header />
            <Row>
                <Col><Slider /></Col>
                 <Col><MainAccDetail /></Col>
            </Row>
            <Row><AccountDetail /></Row>
            <Footer />
        </Container>
    )
}
