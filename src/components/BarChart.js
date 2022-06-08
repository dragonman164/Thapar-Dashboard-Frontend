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

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '',
    },
  },
};




const BarChart = (props)=>{
  let  labels = Object.keys(props.data);

const data = {
  labels,
  datasets: [
    {
      label: '',
      data: Object.keys(props.data).map((e)=>props.data[e]),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
 
  ],
};
    return <Bar options={options} data={data} />
}


export default BarChart;