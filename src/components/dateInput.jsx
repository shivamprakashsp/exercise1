import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Alert, Form } from "react-bootstrap";
import React from "react";
import { useEffect, useState } from "react";
//Internal Imports
import { getPriceData } from "../utils/goldPriceApi";
const DateInput = (props) => {
  const { startDate, setStartDate, endDate, setEndDate, setPrices, setLabel } = props;
  const [error, setError] = useState(false);
  const getData = async () => {
    const priceData = await getPriceData(startDate, endDate);
    if (priceData[0].length === 0) {
      setError(true);
    } else {
      setError(false);
    }
    const [prices, labels] = priceData;
    setPrices(prices);
    setLabel(labels);
  };

  useEffect(() => {
    getData();
  }, [startDate, endDate]);

  return (
    <Form>
      <Form.Group controlId="dateOfOccurence">
        <Form.Label className="font-weight-bold text-secondary">Start Date</Form.Label>
        <DatePicker
          maxDate={new Date(endDate.getTime() - 864e5)}
          className="form-control"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </Form.Group>
      <Form.Group controlId="dateOfOccurence">
        <Form.Label className="font-weight-bold text-secondary mt-2">End Date</Form.Label>
        <DatePicker
          minDate={new Date(startDate.getTime() + 864e5)}
          maxDate={new Date()}
          className="form-control"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          todayButton="Today"
        />
      </Form.Group>
      {error && (
        <Alert className="mt-2" variant={"danger"}>
          {" "}
          Invalid date range{" "}
        </Alert>
      )}
    </Form>
  );
};

export default DateInput;
