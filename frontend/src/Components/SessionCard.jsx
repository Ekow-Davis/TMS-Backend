import React from 'react';
import { Tooltip } from '@mui/material';

// Reusable SessionCard component
const SessionCard = ({ stats = [] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between"
        >
          {/* Circular Icon Background */}
          <div className={`p-3 rounded-full ${item.bgColor || 'bg-gray-100'}`}>
            <Tooltip title={item.title}>
              {item.icon}
            </Tooltip>
          </div>
          {/* Card Content */}
          <div className="ml-4">
            <h4 className="text-gray-700 font-bold">{item.title || 'No Title'}</h4>
            <p className="text-xl">{item.value !== undefined ? item.value : 'N/A'}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SessionCard;
