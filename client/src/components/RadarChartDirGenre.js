import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from "react-chartjs-2";
import ChartService from '../services/ChartService'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const initData = {
  labels: ['Action', 'Adventure', 'Comedy', 'Crime', 'Drama', 'Film-Noir', 'Horror', 'Mystery', 'Romance', 'Thriller', 'War', 'Western'],
  datasets: [
    {
      label: 'Loading uwu',
      data: [1,2,3,1,2,3,1,2,3,1,2,3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

const RadarChartDirGenre = () => {
  const [data, setData] = useState(initData);

  useEffect(() => {
    if(data != initData) return;
    console.log('here');

    ChartService.getDirGenre()
      .then((res) => {
        let result = res.data;
        setData({
          ...data,
          datasets: [{
            label: 'Genres',
            backgroundColor: '#323E42',
            borderColor: '#EFDCF9',
            data: result.map(row => row.y), 
            borderWidth: 2
          }],
        })
      })
      .catch((err) => {
        console.log(err);
      })
      
  });

  return (
    <>
      <h1><b>Director x’s avg ranking per genres</b></h1>
      <div className="container" style={{width: '40%', marginTop: 50, marginLeft: 'auto', marginRight: 'auto' }}>
        <Radar data={data} />
      </div>
    </>
  );
  
};

export default RadarChartDirGenre;