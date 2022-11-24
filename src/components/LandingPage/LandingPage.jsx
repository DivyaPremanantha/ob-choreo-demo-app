import React from 'react'
import '../../css/LandingPage.css'
import {SliderView} from "./Slider/SliderView";
import {MainAccDetailView} from "./MainAccDetail/MainAccDetailView";
import {AccountListView} from "./AccountList/AccountListView";
import {TransactionListView} from "./TransactionList/TransactionListView"
import {ExpenseView} from "./ExpenseView/ExpenseView"
import { Navbar } from '../common/Navbar';
import { Footer } from '../common/Footer';

export const LandingPage = () => {

  return(
    <>
      <Navbar selectedTabName="Overview" />
      <div className="container-md home-container">
        <div style={{height:'20%'}} >
          <div className="float-child p-2">
            <SliderView />
          </div>
          <div className="float-child p-2">
            <MainAccDetailView />
          </div>
        </div>
        
        <div style={{height:'20%'}}>
          <AccountListView />
        </div>
        
        <div style={{height:'60%'}} className="mt-2" >
          <div className='float-child'>
            <TransactionListView />
          </div>
          <div className='float-child'>
            <ExpenseView/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}