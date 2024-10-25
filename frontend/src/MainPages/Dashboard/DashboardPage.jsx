import React, { useState, useEffect } from 'react';
import Sidebar from '../../Components/Layout/Sidebar';
import Aside from './LeftAside';
import RightCards from './RightAside';
// import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import dashboardData from '../../Placeholders/dashboardData.json';

const Dashboard = () => {
  const [data, setData] = useState(null);
  // const [view, setView] = useState('weekly');

  useEffect(() => {
    // Simulate fetching data from a JSON file
    setData(dashboardData);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }


  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow p-8 bg-gray-100 overflow-y-auto">
        <h1 className="text-4xl text-custom-heading font-bold mb-6">
          Dashboard
        </h1>

        <div className='bg-white p-6 rounded-lg'>
          {/* Main Body */}
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row ">
                            
              {/* Right Section (Cards) */}
              <RightCards />
              
              {/* Left Section (Aside) */}
              <Aside />
            </div>
          </div>

        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-custom-purple">Pending Payments</h2>
            {pendingPayments}
          </div>

          <div className="col-span-1 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-custom-purple">Upcoming Sessions Today</h2>
            {upcomingSessions}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-custom-purple">Completed Sessions</h2>
            <Pie data={pieData} />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-custom-purple">Sessions Overview</h2>
            <div className="flex justify-between mb-4">
              <button onClick={() => setView('weekly')} className="px-4 py-2 bg-custom-purple text-white rounded">
                Weekly
              </button>
              <button onClick={() => setView('monthly')} className="px-4 py-2 bg-custom-purple text-white rounded">
                Monthly
              </button>
            </div>
            {view === 'weekly' ? (
              <Bar data={barDataWeekly} />
            ) : (
              <Bar data={barDataMonthly} />
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
