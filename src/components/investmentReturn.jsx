import { Alert, InputGroup, FormControl, Form, Row, Col } from "react-bootstrap";
import React from "react";
import { useState } from "react";

//Internal Imports
import styles from "../styles/investmentReturn.module.css";
import { getMaxReturnData } from "../utils/calculateMaxReturn";

const InvestmentReturn = (props) => {
  const { prices, label } = props;
  const [investment, setInvestment] = useState(0);
  const [investmentReturn, buyDate, sellDate] = getMaxReturnData(investment, label, prices);

  return (
    <div>
      <Row className="mx-auto">
        <Row className={"text-center mb-5 " + styles.heading}>
          <h2>Investment Returns</h2>
        </Row>
        <Col md={3}></Col>
        <Col md={6}>
          <Form>
            <Form.Label className="font-weight-bold text-secondary">
              Enter the Amount in dollar
            </Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <FormControl
                aria-label="Amount (to the nearest dollar)"
                onChange={(investment) => setInvestment(investment.target.value)}
              />
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>
          </Form>
        </Col>
        <Col md={3}></Col>
      </Row>
      <Row className="mx-auto">
        <Col md={3}></Col>
        <Col md={6}>
          {investment}
          {investmentReturn !== 0 ? (
            buyDate !== sellDate ? (
              <Alert variant={"primary"}>
                {" "}
                Maximum Returns : {investmentReturn} <br></br> Suggested Buy Date : {buyDate}{" "}
                <br></br>
                Suggested Sell Date : {sellDate}{" "}
              </Alert>
            ) : (
              <Alert variant={"danger"}> Profit Not possible.</Alert>
            )
          ) : (
            <Alert variant={"warning"}> Enter Investment Amount </Alert>
          )}
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  );
};

export default InvestmentReturn;
