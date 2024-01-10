import React from 'react';
import {Bar } from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";

const BarChart = ({BarData}) => {
  return (
    <Bar data={BarData} options={{
        scales: {
            x: {
                stacked:true,
            },
            y:{
                stacked:true,
            },
        },
        plugins: {
            legend: {
              display: false,
            }
          }
    }}/>
  )
}

export default BarChart
