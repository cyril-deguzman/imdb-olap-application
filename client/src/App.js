import React, {Component} from 'react';
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

import './assets/styles/App.css';
import ChartService from './services/ChartService'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['2010', '2020'];
const maleCount = [3000, 2399];
const femaleCount = [1000, 2872];

export const data = {
  labels,
  datasets: [
    {
      label: 'Male',
      data: maleCount,
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Female',
      data: femaleCount,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    ChartService.getSampleData()
      .then((res) => {
        const result = res.data
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  
  render() {
    return (
      <div className="container">
        <Bar options={options} data={data} />;
      </div>
    );
  }
};
