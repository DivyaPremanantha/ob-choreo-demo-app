import React from 'react'
import '../../css/LandingPage.css'
import {SliderView} from "./Slider/SliderView";
import Row from "react-bootstrap/Row";
import {MainAccDetailView} from "./MainAccDetail/MainAccDetailView";
import {AccountListView} from "./AccountList/AccountListView";
import {TransactionListView} from "./TransactionList/TransactionListView"
import {ExpenseView} from "./ExpenseView/ExpenseView"
import Container from "react-bootstrap/Col";
<<<<<<< HEAD
import { useState}  from 'react';
=======
import { Navbar } from '../common/Navbar';
import { Footer } from '../common/Footer';
>>>>>>> 66ea1d2be4c0c814e0556bc0767801e0c9d90b4e

export const LandingPage = () => {
  return(
    <Container style={{display:'grid'}}>
      <Navbar selectedTabName="Overview" />
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
      <Footer />
    </Container>
  )
}