import React from 'react';
import Aside from './LeftAside';
import RightCards from './RightAside';

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen">
      {/* Left Section (Aside) */}
      <Aside />
      
      {/* Right Section (Cards) */}
      <RightCards />
    </div>
  );
};

export default Dashboard;
