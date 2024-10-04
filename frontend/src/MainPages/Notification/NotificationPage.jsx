import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Components/Layout/Sidebar';
import NotificationData from '../../Placeholders/NotificationData.json';

const NotificationPage = () => {
  const [notifications, setNotifications] = useState(
    NotificationData.sort((a, b) => b.id - a.id)
  );
  const navigate = useNavigate();

  const handleReadNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, Status: 'Read' } : notification
      )
    );
    navigate(`/NDetail/${id}`);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow p-8 overflow-y-auto bg-gray-100">
        <h1 className="text-3xl text-custom-heading font-bold mt-2 mb-4">
          Notifications
        </h1>

        {/* Main body */}
        <div className='rounded-lg mt-3 overflow-auto p-6 bg-white'>

          <div className="max-w-4xl mx-auto">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 mb-4 border rounded-lg cursor-pointer transition-all ${
                  notification.Status === 'Unread'
                    ? 'bg-white hover:bg-gray-200 hover:border-r-[15px] hover:text-custom-purple hover:border-custom-blue'
                    : 'bg-gray-400 text-black'
                }`}
                onClick={() => handleReadNotification(notification.id)}
              >
              <div className="flex justify-between">
                <div>
                  <h2 className="font-bold">{notification.Title}</h2>
                  <p className='px-2'>{notification.Content.substring(0, 30)}...</p>
                  <p className={`p-1 ${notification.Status === 'Unread' ? 'text-custom-purple' : 'text-white'}`}>{notification.Source}</p>
                </div>
                <div>
                  <p className={` ${notification.Status === 'Unread' ? 'text-custom-purple' : 'text-white'}`}>{notification.Date}</p>
                </div>
              </div>
            </div>
          ))}
          
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default NotificationPage;
