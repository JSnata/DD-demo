import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import s from './Charts.module.css';

function TrackingChart({ data }) {
  return (
    <ResponsiveContainer>
      <LineChart>
        <CartesianGrid strokeDasharray="0" stroke="#b7ffe913" />
        <XAxis dataKey="name" fill="#ddd" />
        <Line
          type="monotone"
          dataKey="km"
          data={data}
          stroke="#e1424e"
          activeDot={{ r: 8 }}
        />
        <Tooltip wrapperClassName={s.tooltip} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default TrackingChart;
