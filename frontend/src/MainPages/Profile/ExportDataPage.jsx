import React from 'react';
import Sidebar from '../../Components/Layout/Sidebar';
import PSidebar from './PSidebar';

const ExportDataPage = () => {
  const handleExportData = () => {
    alert('Data Exported!');
    // Implement actual data export functionality here
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow p-4 bg-white">
    <div className="flex h-screen bg-gray-100">
      <PSidebar />
      <div className="flex-grow p-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Export Data</h1>
          <div className="mb-4">
            <p className="text-gray-700">Click the button below to export all your data:</p>
            <button
              onClick={handleExportData}
              className="mt-4 bg-custom-purple text-white px-4 py-2 rounded-md"
            >
              Export Data
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default ExportDataPage;
