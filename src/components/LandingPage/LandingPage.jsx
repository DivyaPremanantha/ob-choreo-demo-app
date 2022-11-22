import React from 'react'
import '../../css/LandingPage.css'
import {SliderView} from "./Slider/SliderView";
import Row from "react-bootstrap/Row";
import {MainAccDetailView} from "./MainAccDetail/MainAccDetailView";
import {AccountListView} from "./AccountList/AccountListView";
import {TransactionListView} from "./TransactionList/TransactionListView"
import {ExpenseView} from "./ExpenseView/ExpenseView"
import Container from "react-bootstrap/Col";
import { useState}  from 'react';

export const LandingPage = () => {
  return(
    <Container style={{display:'grid'}}>
      <div className = "home-container">
        <div>
          <div className="float-child">
            <SliderView />
          </div>
          <div className="float-child">
            <MainAccDetailView />
          </div>
        </div>
        <Row><AccountListView /></Row>
        <div>
          <div className='float-child'>
            <TransactionListView />
          </div>
          <div className='float-child'>
            <ExpenseView/>
          </div>
        </div>
      </div>
    </Container>
  )
}