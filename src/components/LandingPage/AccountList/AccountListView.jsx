import React, {useEffect, useState} from 'react'
import '../../../css/LandingPage.css'
import AccountData from "../../../data/AccountData.json";
import {Button} from "react-bootstrap";
import {getAccounts} from "../../../services/account-service";
import {CONSTANTS} from "../../../services/utils";
import { SkeletonAccount } from './SkeletonAccount';
import {useNavigate} from "react-router-dom";

export const AccountListView = () => {

  const navigate = useNavigate();

  const [accounts, setAccounts] = useState(AccountData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // get user access token to session storage
    const user_access_token = sessionStorage.getItem(CONSTANTS.user_access_token);
    if (user_access_token) {
      setLoading(true);
      accounts.pop();

      getAccounts(user_access_token).then(resp => {
        console.log("fetching accounts data")
        accounts.push(resp.data.Data?.Account[0])
        setLoading(false);
      }).catch(err => console.log(err));
    }
  }, [accounts])

  const accountDataConstant = loadAccountsView(accounts);

  const navigateToBankPage = () => {
    navigate('/banks');
  }

  return(
    <div className = "container-md home-container">
      <div className="row">
        {accountDataConstant}
        {loading && <SkeletonAccount />}
        <div className="col">
          <div className="account-list-button">
<<<<<<< HEAD
            <Row>
              <a className="plus-icon-link" href="/banks"> <i  href="/banks" className="bi bi-plus-square plus-icon" ></i> </a>
            </Row>
            <Row>
              <Button  href="/banks" className="new-bank-button">Add a new bank</Button>
            </Row>
=======
            <div className="row">
              <i className="bi bi-plus-square plus-icon" onClick={navigateToBankPage}></i>
            </div>
            <div className="row">
              <Button onClick={navigateToBankPage} className="new-bank-button">Add a new bank</Button>
            </div>
>>>>>>> f35a79ce71bd19f3e0a35f0264ddd6650d6de9c5
          </div>
        </div>
      </div>
    </div>
  )
}

<<<<<<< HEAD
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
=======
const loadAccountsView = (accounts) => {
  return accounts.map((data, id) => {
    return (
      <div className="col" key={id}>
        <div className="account-list-view">
          <div className="account-detail-view">
            <div className="col-10 no-padding-element text-align-left">
              <h6 className="font-size-small font-color-orange">{data.DisplayName}</h6>
              <div className="font-size-small font-color-dark">{data.AccountId}</div>
            </div>
            <div className="col-2 no-padding-element text-align-right">
              <i className="bi bi-bank font-color-dark"></i>
            </div>
          </div>
          <div className="account-detail-view font-color-dark">{data.Balance}</div>
        </div>
>>>>>>> f35a79ce71bd19f3e0a35f0264ddd6650d6de9c5
      </div>
    )
  })
}
