import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import React from "react";
import styles from "../styles/priceChart.module.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PriceChart = (props) => {
  const { prices, label } = props;

  const legend = {
    display: true,
    position: "bottom",
    labels: {
      fontColor: "#323130",
      fontSize: 14,
    },
  };

  const displayData = {
    labels: label,
    datasets: [
      {
        label: "Gold Price",
        data: prices,
        fill: false,
        borderColor: "#742774",
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Chart Title",
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100,
          },
        },
      ],
    },
  };

  return (
    <div className={styles.priceChart}>
      <Line data={displayData} options={options} />{" "}
    </div>
  );
};

export default PriceChart;
