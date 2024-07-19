import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import Sidebar from '../../Components/Layout/Sidebar';
import NotificationData from '../../Placeholders/NotificationData.json';

const NotificationDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const notification = NotificationData.find(n => n.id === parseInt(id));

  if (!notification) {
    return <div>Notification not found</div>;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-8 bg-gray-100">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center mb-4 text-custom-purple"
        >
          <ArrowUturnLeftIcon className="h-6 w-6 mr-2" />
          Back
        </button>
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <div>              
              <h2 className="text-xl font-bold">{notification.Type}</h2>
              <h2 className="text-xl text-right font-bold my-3">{notification.Source}</h2>             
              <p className="text-gray-500">{notification.Date}</p>
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-2">{notification.Title}</h1>
          <hr className="border-custom-blue mb-4" />
          <p className="text-lg">{notification.Content}</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationDetailPage;
