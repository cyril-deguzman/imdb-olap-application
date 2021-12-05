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
      text: 'Music-Related Movies with a rank >= 8',
    },
  },
};

const initData = {
  datasets: [
    {
      label: 'Loading',
      data: [{y: 20, x: 'Loading'}, {y: 10, x: 'Loading..'}],
      backgroundColor: 'rgba(1, 24, 61, 0.6)',
    },
    {
      label: 'Loading.',
      data: [{y: 30, x: 'Loading..'}, {y: 20, x: 'Loading..'}],
      backgroundColor: 'rgba(102, 6, 99, 0.6)',
    },
  ],
}

const BarChartTopMusic = () => {
  const [data, setData] = useState(initData);

  useEffect(() => {
    if(data != initData) return;
    
    ChartService.getTopMusic()
      .then((res) => {
        const result = res.data
        console.log(result);
        setData({
          datasets: [
            {
              label: 'Music',
              data: result,
              backgroundColor: 'rgb(95 59 208)',
            },
        ]})
      })
      .catch((err) => {
        console.log(err);
      })
  });

  return (
    <>
      <h1><b>Music-related movies with a ranking of at least 8 for the years 1951-1960</b></h1>
      <div className="container" style={{width: '70%', marginTop: 50, marginLeft: 'auto', marginRight: 'auto' }}>
        <Bar options={options} data={data} />
      </div>
    </>
  );
  
};

export default BarChartTopMusic;