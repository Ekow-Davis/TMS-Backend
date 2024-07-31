import React, { useState, useEffect } from 'react';
import Sidebar from '../../Components/Layout/Sidebar';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import dashboardData from '../../Placeholders/dashboardData.json';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [view, setView] = useState('weekly');

  useEffect(() => {
    // Simulate fetching data from a JSON file
    setData(dashboardData);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const pendingPayments = data.pendingPayments.map((payment) => (
    <div key={payment.id} className="p-4 bg-white rounded-lg shadow-md mb-4">
      <p className="font-bold">Tutor: {payment.tutor}</p>
      <p>Amount: ${payment.amount}</p>
      <p>Status: {payment.status}</p>
    </div>
  ));

  const upcomingSessions = data.upcomingSessions.map((session) => (
    <div key={session.id} className="p-4 bg-white rounded-lg shadow-md mb-4">
      <p className="font-bold">Tutor: {session.tutor}</p>
      <p>Date: {session.date}</p>
      <p>Time: {session.time}</p>
      <p>Topic: {session.topic}</p>
    </div>
  ));

  const pieData = {
    labels: ['Completed', 'Pending'],
    datasets: [
      {
        label: '# of Sessions',
        data: [data.completedSessions.completed, data.completedSessions.total - data.completedSessions.completed],
        backgroundColor: ['#ced0f2', '#21266a']
      }
    ]
  };

  const barDataWeekly = {
    labels: data.sessionCounts.weekly.map(item => item.day),
    datasets: [
      {
        label: 'Number of Sessions',
        data: data.sessionCounts.weekly.map(item => item.count),
        backgroundColor: '#36A2EB'
      }
    ]
  };

  const barDataMonthly = {
    labels: data.sessionCounts.monthly.map(item => item.month),
    datasets: [
      {
        label: 'Number of Sessions',
        data: data.sessionCounts.monthly.map(item => item.count),
        backgroundColor: '#36A2EB'
      }
    ]
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow p-8 bg-gray-100 overflow-auto">
        <h1 className="text-3xl font-bold mb-6 text-custom-purple">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
