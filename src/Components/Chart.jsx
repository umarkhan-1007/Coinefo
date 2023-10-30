import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ arr = [], currency, days }) => {
  const prices = [];
  const date = [];

  for (let index = 0; index < arr.length; index++) {
   if(days === "24") date.push(new Date(arr[index][0]).toLocaleTimeString());
  else date.push(new Date(arr[index][0]).toLocaleDateString());
    prices.push(arr[index][0]);
  }

  const data = {
      labels: date,
      datasets: [
        {
          label: `prices in ${currency}`,
          data: prices,
          borderColor: "rgb(255,99,132)",
        backgroundColor: "rgba(255,99,132,0.5)"
        },
      ],
  }

  return (
    <Line
      options={{
        responsive: true,
      }}
      data={data}
    />
  );
};

export default Chart;
