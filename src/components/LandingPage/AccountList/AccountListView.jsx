import React, {useState} from 'react'
import '../../../css/LandingPage.css'
import Container from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AccountData from "../../../data/AccountData.json";
import {Button} from "react-bootstrap";

export const AccountListView = () => {

  return(
    <Container className = "home-container">
      <Row>
        {accountDataConstant}
        <Col>
          <div className="account-list-button">
            <Row>
              <a className="plus-icon-link" href="/banks"> <i  href="/banks" className="bi bi-plus-square plus-icon" ></i> </a>
            </Row>
            <Row>
              <Button  href="/banks" className="new-bank-button">Add a new bank</Button>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

const accountDataConstant = AccountData.map((data,id)=>{
  return (
    <Col key={id}>
      <div className="account-list-view">
        <Row className="account-detail-view">
          <Col xs={10} className="no-padding-element text-align-left">
            <h6 className="font-size-small font-color-orange">{data.DisplayName}</h6>
            <div className="font-size-small font-color-dark">{data.AccountId}</div>
          </Col>
          <Col className="no-padding-element text-align-right"><i className="bi bi-bank font-color-dark"></i></Col>
        </Row>
        <div className="account-detail-view font-color-dark">{data.Balance}</div>
      </div>
    </Col>
  )
})
