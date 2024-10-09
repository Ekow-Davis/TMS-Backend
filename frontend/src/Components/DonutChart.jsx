import React from 'react';

const DonutChart = ({ percentage, color }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg className="w-24 h-24" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#e6e6e6"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke={color}
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500"
        />
      </svg>
      <div className="absolute text-xl font-bold text-black">
        {percentage}%
      </div>
    </div>
  );
};

export default DonutChart;
