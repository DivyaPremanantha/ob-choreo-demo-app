import React from 'react'
import '../css/common.css'
import Container from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AccountData from "../data/AccountData.json";
import {Button} from "react-bootstrap";

console.log(AccountData[0].userId)
// const accountData = JSON.parse(AccountData)
export const AccountDetail = () => {

    return(
        <Container className = "HomeContainer">
            <Row>
                {accountDataConstant}
                <Col>
                    <div className="AccountDetailDiv">
                        <Button onClick={showAlert} variant="contained" className="TransferButton">Add a new bank</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

const showAlert = () => {
    alert("Redirecting");
}

const accountDataConstant = AccountData.map((data,id)=>{
        return <Col>
            <div className="AccountDetailDiv">
                <Row className="AccountDetailRow">{data.account_id}</Row>
                <Row className="AccountDetailRow">{data.display_name}</Row>
                <Row className="AccountDetailRow">{data.balance}</Row>
            </div>
        </Col>
    })
