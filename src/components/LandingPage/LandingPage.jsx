import React, {useState} from 'react'
import '../../css/LandingPage.css'
import {SliderView} from "./Slider/SliderView";
import {MainAccDetailView} from "./MainAccDetail/MainAccDetailView";
import {AccountListView} from "./AccountList/AccountListView";
import {TransactionListView} from "./TransactionList/TransactionListView"
import {ExpenseView} from "./ExpenseView/ExpenseView"
import Container from "react-bootstrap/Col";
import { Navbar } from '../common/Navbar';
import { Footer } from '../common/Footer';
import {BankList} from "../BankPage/BankList";
import {CONSTANTS} from "../../services/utils";

export const LandingPage = () => {
  let addedBanks = JSON.parse(sessionStorage.getItem(CONSTANTS.added_banks));
  let newBanks = JSON.parse(sessionStorage.getItem(CONSTANTS.new_banks));
  const [isBankAdding, setIsBankAdding] = useState(false);

  const updateBankList = bankId => {
    const index = newBanks.findIndex((bank => bank.id === bankId));
    if (index > 0) {
      const newlyAddedBank = newBanks[index];
      newlyAddedBank.isAdded = true;

      addedBanks.push(newlyAddedBank);
      newBanks.splice(index, 1);

      updateSession({newBanks, addedBanks});
    }
  }

  const updateSession = (data) => {
    sessionStorage.setItem(CONSTANTS.new_banks, JSON.stringify(data.newBanks));
    sessionStorage.setItem(CONSTANTS.added_banks, JSON.stringify(data.addedBanks));
  }

  return(

    <>
      <Navbar selectedTabName="Overview" />
      <div className="container-md mt-4 mb-lg home-container">
        <div style={{height:'20%'}}>
          <div className="float-child p-2">
            <SliderView />
          </div>
          <div className="float-child p-2">
            <MainAccDetailView />
          </div>
        </div>
        <br />
        <div style={{height:'20%'}}>
          <AccountListView />
        </div>
        <br />
        <div style={{height:'60%'}}>
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