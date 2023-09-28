'use client';
import React from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const data = [
 { name: 'Play To Earn', value: 800, color: '#233BB7' },
 { name: 'Staking Reward', value: 300, color: '#A6479C' },
 { name: 'Ventures / Private', value: 200, color: '#23B793' },
 { name: 'Public Sale', value: 300, color: '#498656' },
 { name: 'Team', value: 432, color: '#23AEB7' },
 { name: 'Advisors', value: 240, color: '#2370B7' },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = (labelProps: any) => {
 const { cx, cy, midAngle, innerRadius, outerRadius, percent, index } = labelProps;
 const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
 const x = cx + radius * Math.cos(-midAngle * RADIAN);
 const y = cy + radius * Math.sin(-midAngle * RADIAN);

 // const xResult = x > cx ? x - cx + x : x - cx + x;
 // const yResult = y > cy ? y + y / 2 - 50 : y - (cy - y + 10);
 return (
  <>
   {/*<rect x={xResult} y={yResult} fill="white" height={50} width={50} style={{ backgroundColor: 'red !important' }} />*/}
   <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'}>
    {`${(percent * 100).toFixed(0)}%`}
   </text>
  </>
 );
};

function TokenMetrics() {
 return (
  <li className="ml-6 mt-4 relative">
   <span className="absolute flex items-center justify-center w-[12px] top-5 h-[1px] bg-light-black rounded-full -left-6" />
   <h3 className="mb-6 mt-2 text-base text-white font-normal">Token Metrics</h3>
   <ResponsiveContainer className="mx-auto flex gap-10" width="100%" height={300}>
    <PieChart>
     <Pie activeIndex={1} data={data} cx="40%" cy="50%" labelLine={false} label={renderCustomizedLabel} outerRadius={130} fill="#8884d8" dataKey="value">
      {data.map((entry, index) => (
       <Cell height={500} width={500} key={`cell-${index}`} fill={entry.color} />
      ))}
     </Pie>
     <Legend
      cx="40%"
      layout="vertical"
      verticalAlign="middle"
      align="right"
      payload={data.map((item, index) => ({
       id: item.name,
       type: 'square',
       value: `${item.name}`,
       color: item.color,
      }))}
     />
    </PieChart>
   </ResponsiveContainer>
  </li>
 );
}

export default TokenMetrics;
