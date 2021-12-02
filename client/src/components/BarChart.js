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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = (data) => {
  console.log('data here');
  console.log(data);

  let options = {
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
  
  const labels = ['2010', '2020'];
  const maleCount = [3000, 2399];
  const femaleCount = [1000, 2872];
  
  data = {
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

  return (<>
    <div>
      <h1>BarChart Page</h1>
      </div><div className="container">
      <Bar options={options} data={data} />;
    </div>
  </>);
  
};

export default BarChart;