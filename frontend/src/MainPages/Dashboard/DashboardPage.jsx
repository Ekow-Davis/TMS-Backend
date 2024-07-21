import React, { useState, useEffect } from 'react';
import Sidebar from '../../Components/Layout/Sidebar';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import dashboardData from '../../Placeholders/dashboardData.json';

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate fetching data from a JSON file
    setData(dashboardData);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const pendingPayments = data.pendingPayments.map((payment) => (
    <div key={payment.id} className="p-4 bg-white rounded shadow-md mb-4">
      <p><strong>Tutor:</strong> {payment.tutor}</p>
      <p><strong>Amount:</strong> ${payment.amount}</p>
      <p><strong>Status:</strong> {payment.status}</p>
    </div>
  ));

  const upcomingSessions = data.upcomingSessions.map((session) => (
    <div key={session.id} className="p-4 bg-white rounded shadow-md mb-4">
      <p><strong>Tutor:</strong> {session.tutor}</p>
      <p><strong>Date:</strong> {session.date}</p>
      <p><strong>Time:</strong> {session.time}</p>
      <p><strong>Topic:</strong> {session.topic}</p>
    </div>
  ));

  const pieData = {
    labels: ['Completed', 'Pending'],
    datasets: [
      {
        label: '# of Sessions',
        data: [data.completedSessions.completed, data.completedSessions.total - data.completedSessions.completed],
        backgroundColor: ['#4CAF50', '#FF6384']
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
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Pending Payments</h2>
            {pendingPayments}
          </div>

          <div className="col-span-1 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Upcoming Sessions Today</h2>
            {upcomingSessions}
          </div>

          <div className="col-span-1 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Completed Sessions</h2>
            <Pie data={pieData} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-bold mb-4">Sessions Overview</h2>
          <div className="flex justify-between mb-4">
            <button onClick={() => setData({ ...data, view: 'weekly' })} className="px-4 py-2 bg-blue-500 text-white rounded">
              Weekly
            </button>
            <button onClick={() => setData({ ...data, view: 'monthly' })} className="px-4 py-2 bg-blue-500 text-white rounded">
              Monthly
            </button>
          </div>
          {data.view === 'weekly' ? (
            <Bar data={barDataWeekly} />
          ) : (
            <Bar data={barDataMonthly} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
