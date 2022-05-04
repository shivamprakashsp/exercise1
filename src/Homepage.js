import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./styles/homepage.module.css";

import PriceChart from "./components/priceChart";
import InvestmentReturn from "./components/investmentReturn";
import DateInput from "./components/dateInput";
function Homepage() {
  const [startDate, setStartDate] = useState(new Date("04/22/2022"));
  const [endDate, setEndDate] = useState(new Date("05/02/2022"));
  const [prices, setPrices] = useState([]);
  const [label, setLabel] = useState([]);

  return (
    <div className="Homepage">
      <Row className="mx-auto">
        <Row className={"text-center mb-5 " + styles.heading}>
          <h2>Gold Prices between the given range</h2>
        </Row>
        <Row>
          <Col md={1}></Col>
          <Col md={2}>
            <DateInput
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
              setPrices={setPrices}
              setLabel={setLabel}
            />
          </Col>
          <Col md={8}>
            <PriceChart
              startDate={startDate}
              endDate={endDate}
              prices={prices}
              label={label}
            ></PriceChart>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Row>
      <hr></hr>
      <InvestmentReturn prices={prices} label={label}></InvestmentReturn>
    </div>
  );
}

export default Homepage;
