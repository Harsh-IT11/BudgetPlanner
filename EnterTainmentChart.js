import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    BarElement,
    LinearScale,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  ChartJS.register(
    CategoryScale,
    BarElement,
    LinearScale,
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
  
  
  import { Bar } from 'react-chartjs-2';
  import axios from 'axios';

export default function EntertainmentChart() {
    
    const labels = ['1','2','3','4','5','6'];
    const data = {
        labels,
        datasets: [
          {
            label: 'Total',
            data: foodData,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          }
        ],
      };
    
    const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
    };
    
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  )
}
