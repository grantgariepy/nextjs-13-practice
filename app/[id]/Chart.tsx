'use client';

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
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
    },
  },
};

export function Chart(chartData: any) {
  let dateArray: any = [];
  let priceArray: any = [];

  const array = chartData.data;

  array.forEach((date: any) => {
    dateArray.push(new Date(date[0]).toLocaleDateString('en-US'));
  });

  array.forEach((price: any) => {
    priceArray.push(price[2]);
  });

  const labels = dateArray;
  const data = {
    labels,
    datasets: [
      {
        label: '90 Days',
        data: priceArray,
        borderColor: '#3f51b5',
        backgroundColor: '#7986cb',
      },
    ],
  };
  return (
    <Line
      options={options}
      data={data}
    />
  );
}
