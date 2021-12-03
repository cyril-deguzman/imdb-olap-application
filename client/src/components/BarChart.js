import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartService from '../services/ChartService'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Bar Chart',
    },
  },
};

const BarChart = () => {
  const [data, setData] = useState({
    labels: ['2010', '2020'],
    datasets: [
      {
        label: 'Male',
        data: [3000, 2399],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Female',
        data: [1000, 2872],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  });
  
  console.log(data)

  useEffect(() => {
    console.log('here');

    ChartService.getSampleData()
      .then((res) => {
        const result = res.data
        setData({labels: [result[0].year], datasets: [
          {
            label: 'Male',
            data: [result[0].count_gender],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
          {
            label: 'Female',
            data: [result[1].count_gender],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ]})
      })
      .catch((err) => {
        console.log(err);
      })
  });

  return (<>
    <div>
      <h1>BarChart Page</h1>
      </div><div className="container">
      <Bar options={options} data={data} />;
    </div>
  </>);
  
};

export default BarChart;