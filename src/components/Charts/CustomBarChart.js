import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from 'recharts';
import s from './Charts.module.css';

function CustomBarChart({ data }) {
  return (
    <ResponsiveContainer width="99%">
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#2884ff" />
        <Bar dataKey="mileStats" stroke="#2884ff" fill="#2884ff" barSize={30} />
        <Tooltip cursor={false} wrapperClassName={s.tooltip} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default CustomBarChart;
