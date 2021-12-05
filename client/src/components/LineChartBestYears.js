import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from "react-chartjs-2";
import ChartService from '../services/ChartService'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
      text: 'Chart.js Line Chart',
    },
  },
};

const initData = {
  datasets: [
    {
      label: 'Male',
      data: [{y: 0, x: 'loading.'}, {y: 0, x: 'loading..'}],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: '1Male',
      data: [{y: 0, x: 'loading....'}, {y: 0, x: 'loading...'}],
      fill: false,
      borderColor: "#742774"
    }
  ]
};

const LineChartBestYears = () => {
  const [data, setData] = useState(initData);

  useEffect(() => {
    console.log('here');
    if(data != initData) return;
    ChartService.getBestYears()
      .then((res) => {
        let result = res.data

        setData({
          datasets: [
            {
              label: 'IMDB',
              data: result,
              fill: false,
              backgroundColor: "#742774",
              borderColor: "#742774"
            },
          ]})
        })
      .catch((err) => {
        console.log(err);
      })
  });

  return (
    <>
      <h1><b>Best Year for Movies</b></h1>
      <div className="container" style={{width: '90%', marginTop: 50, marginLeft: 'auto', marginRight: 'auto' }}>
        <Line options={options} data={data} />
      </div>
    </>
  );
  
};

export default LineChartBestYears;