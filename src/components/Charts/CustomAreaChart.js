import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Area,
} from 'recharts';

import s from './Charts.module.css';

function CustomAreaChart({ data }) {
  return (
    <ResponsiveContainer>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#725cff" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#725cff" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#2884ff" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#2884ff" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" stroke="#ddd" />
        <CartesianGrid strokeDasharray="0" stroke="#b7ffe913" />
        <Tooltip cursor={false} wrapperClassName={s.tooltip} />
        <Area
          type="monotone"
          dataKey="week"
          stroke="#725cff"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="prevWeek"
          stroke="#2884ff"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default CustomAreaChart;
