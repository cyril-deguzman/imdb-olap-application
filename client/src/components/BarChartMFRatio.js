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
      text: 'Male to Female Ratio in decades',
    },
  },
};

const initData = {
  datasets: [
    {
      label: 'Male',
      data: [{y: 20, x: '1890', z: 'boy'}, {y: 10, x: '1891', person: 'boy2'}],
      backgroundColor: 'rgba(1, 24, 61, 0.6)',
    },
    {
      label: 'Female',
      data: [{y: 30, x: '1890', person: 'girl'}, {y: 20, x: '1893', person: 'girl2'}],
      backgroundColor: 'rgba(102, 6, 99, 0.6)',
    },
  ],
}

const BarChartMFRatio = () => {
  const [data, setData] = useState(initData);

  useEffect(() => {
    if(data != initData) return;
    
    ChartService.getMFRatio()
      .then((res) => {
        const result = res.data
        console.log(result);
        setData({
          datasets: [
            {
              label: 'Male',
              data: result.male,
              backgroundColor: 'rgba(1, 24, 61, 0.5)',
            },
            {
              label: 'Female',
              data: result.female,
              backgroundColor: 'rgba(102, 6, 99, 0.5)',
            },
        ]})
      })
      .catch((err) => {
        console.log(err);
      })
  });

  return (
    <>
      <h1><b>MALE TO FEMALE RATIO OVER THE DECADES</b></h1>
      <div className="container" style={{width: '70%', marginTop: 50, marginLeft: 'auto', marginRight: 'auto' }}>
        <Bar options={options} data={data} />
      </div>
    </>
  );
  
};

export default BarChartMFRatio;