import React from 'react';

const StatusDot = ({ status }) => {
  const statusColor = status === 'pending' ? 'bg-yellow-500' : status === 'accepted' ? 'bg-green-500' : 'bg-red-500';
  return <span className={`inline-block w-3 h-3 rounded-full ${statusColor}`}></span>;
};

export default StatusDot;
