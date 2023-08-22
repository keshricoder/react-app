import React from 'react';
import { Line } from 'react-chartjs-2';
import { faker} from '@faker-js/faker';

interface LineChartProps {
  data: {
    cases: { [date: string]: number };
    deaths: { [date: string]: number };
    recovered: { [date: string]: number };
  };
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: 'Cases',
        data: Object.keys(data).map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: '#cccccc',
        backgroundColor: '#FB4F35',
        fill: {
          target: 'origin',
          above: '#19A4F9',
          below: '#B7C7DE',
        }
    },
    ],
  };

  return <Line data={chartData} />;
};

export default LineChart;
