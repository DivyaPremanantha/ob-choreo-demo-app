import React from 'react'
import { PieChart, Pie, Cell } from 'recharts';
import ExpenseData from "../../../data/ExpenseData.json";
import Container from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ListGroup } from "react-bootstrap";
import { useState, useEffect } from 'react';

var transactionInfo
var daily = '$123.67'
var weekly = '$423.83'
var monthly = '$1237.01'
var accessToken = sessionStorage.getItem(CONSTANTS.user_access_token)

export const ExpenseView = () => {
  const [response, setResponse] = useState([]);
  const colorScheme = [
    '#ffc808',
    '#ff7300',
    '#f0a87d',
    '#E79363',
    '#EEE10D',
    '#D9B991'
  ]

  useEffect(() => {
    fetch("https://c112eada-316e-46a7-9705-df75e4a30edc-prod.e1-us-east-azure.choreoapis.dev/azyh/openbankingapi/1.0.0/transactions?backendServiceClientID=AtyObUX7_MyCLy6rHiGyny6Hqc0a&backendServiceClientSecret=77_F_mg63Lge9O8ujWptWui8X18a", {
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    })
      .then(res => res.json())
      .then(
        (data) => {
          setResponse(data)
          if (accessToken) {
            transactionInfo = data.Data
            daily = '$154.67'
            weekly = '$561.83'
            monthly = '$1797.00'

            transactionInfo.Transaction.map(transaction => {
              if (transaction.TransactionReference == "Food") {
                ExpenseData[0].amount = parseInt(transaction.Amount.Amount) + ExpenseData[0].amount
              } else if (transaction.TransactionReference == "Health") {
                ExpenseData[1].amount = parseInt(transaction.Amount.Amount) + ExpenseData[1].amount
              } else if (transaction.TransactionReference == "Clothing") {
                ExpenseData[2].amount = parseInt(transaction.Amount.Amount) + ExpenseData[2].amount
              } else if (transaction.TransactionReference == "Bills") {
                ExpenseData[3].amount = parseInt(transaction.Amount.Amount) + ExpenseData[3].amount
              } else {
                ExpenseData[4].amount = parseInt(transaction.Amount.Amount) + ExpenseData[4].amount
              }
            })
          }
        },
        (error) => {
          console.log(error)
        }
      )
  }, [])

  if (transactionInfo || props.accessToken == '') {
    return (
      <Container className="transaction-list-container">
        <h5>All Expenses</h5>
        <Row>
          <Col>
            <div className="font-size-small font-color-orange">Daily</div>
            <div className="font-size-small font-color-dark">{daily}</div>
          </Col>
          <Col>
            <div className="font-size-small font-color-orange">Weekly</div>
            <div className="font-size-small font-color-dark">{weekly}</div>
          </Col>
          <Col>
            <div className="font-size-small font-color-orange">Monthly</div>
            <div className="font-size-small font-color-dark">{monthly}</div>
          </Col>
        </Row>
        <div className="row-padding font-size-small font-color-orange">Last Month</div>
        <div className="pie-chart-view">
          <Col xs={8}>
            <PieChart width={150} height={150}>
              <Pie data={ExpenseData} dataKey="amount" outerRadius={75}>
                {
                  ExpenseData.map((entry, index) => <Cell key={index} fill={colorScheme[index % colorScheme.length]} />)
                }
              </Pie>
            </PieChart>
          </Col>
          <Col>
            <ListGroup>
              {
                ExpenseData.map((entry, index) =>
                  <ListGroup.Item key={index} className="expense-list-view font-size-small font-color-dark">
                    <i className="bi bi-square-fill expense-list-icon"
                      style={{ color: colorScheme[index % colorScheme.length] }}>
                    </i>
                    {entry.name}
                  </ListGroup.Item>
                )
              }
            </ListGroup>
          </Col>
        </div>
      </Container>
    );
  }
}