import React, {useEffect, useState} from 'react'
import '../../../css/LandingPage.css'
import Container from "react-bootstrap/Col";
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
            <div className="row">
              <i className="bi bi-plus-square plus-icon" onClick={navigateToBankPage}></i>
            </div>
            <div className="row">
              <Button onClick={navigateToBankPage} className="new-bank-button">Add a new bank</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

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
      </div>
    )
  })
}
