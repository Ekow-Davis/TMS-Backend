import React, { useState } from 'react';
import '../Dashboard/style.css';
import NavBar from '../AdComponent/Layout/NavBar';
import { Search as SearchIcon, MoreVert as MenuIcon } from '@mui/icons-material';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const AdNotification = () => {
  const [notifications, setNotifications] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [newNotification, setNewNotification] = useState({ title: '', message: '', recipients: '' });
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const openModal = (notification) => {
    setSelectedNotification(notification);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedNotification(null);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleInputChange = (e) => {
    setNewNotification({ ...newNotification, [e.target.name]: e.target.value });
  };

  const handleSendNotification = () => {
    const notification = {
      id: notifications.length + 1,
      ...newNotification,
      date: new Date().toLocaleDateString(),
      recipients: newNotification.recipients.toLowerCase() === 'all' ? 'All Users' : newNotification.recipients,
    };
    setNotifications([notification, ...notifications]);
    console.log('Notification Sent:', notification);
    setNewNotification({ title: '', message: '', recipients: '' });
  };

  const filteredNotifications = notifications.filter((notification) =>
    notification.title.toLowerCase().includes(searchQuery)
  );

  return (
    <>
      <div className="top-container">
        {/* Navbar */}
        <NavBar />

        {/* Status */}
      <section className="status">
        <div className="header">          
          <h4>Notification: Weekly Activity</h4>
        </div>
        <div className="items-list">
          
          {/* 1st Card */}
          <div className="item">            
            <div className="info">
              <div>
                <h5>Notifications Sent This Week</h5>
                <p>- 3 global</p>
                <p>- 1 Personal</p>
              </div>
              <i className="bx bx-data"></i>
            </div>
            
          </div>

          {/* 2nd Card */}
          {/* <div className="item">
            <div className="info">
              <div>
                <h5>Unpaid Sessions Remaining</h5>
                <p>- 2  sessions awaiting review left</p>
                <p>- 5  left</p>
              </div>
              <i className="bx bx-terminal"></i>
            </div>
            <div className="progress">
              <div className="bar"></div>
            </div>
          </div> */}

          {/* 3rd Card */}
          <div className="item">            
            <div className="info">
              <div>
                <h5>Notifications Edited This Week</h5>
                <p>- 3 Edited </p>
                <p>- 1 Deleted </p>
              </div>
              <i className="bx bx-data"></i>
            </div>
           
          </div>

          {/* 4th Card */}
          <div className="item">
            <div className="info">
              <div>
                <h5>Sessions Payment Notification</h5>
                <p>- 5  Payment Awaiting Notifications</p>
                <p>- 3  Payment Complete Notifications</p>
              </div>
              <i className="bx bx-terminal"></i>
            </div>
            
          </div>

        </div>
      </section>
      </div>

      {/* Main Body */}
      <div className="flex gap-6 flex-col lg:flex-row p-4">
        {/* Left - Notification Table */}
        <div className="w-full lg:w-2/3">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Notifications</h3>
            <div className="flex items-center">
              <SearchIcon className="mr-2" />
              <input
                type="text"
                placeholder="Search notifications..."
                className="border rounded p-2"
                onChange={handleSearch}
                value={searchQuery}
              />
            </div>
          </div>

          {filteredNotifications.length > 0 ? (
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-4">ID</th>
                  <th className="py-2 px-4">Title</th>
                  <th className="py-2 px-4">Date</th>
                  <th className="py-2 px-4">Recipient</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredNotifications.map((notification) => (
                  <tr key={notification.id} className="border-b">
                    <td className="py-2 px-4 text-center">{notification.id}</td>
                    <td className="py-2 px-4 text-center">{notification.title}</td>
                    <td className="py-2 px-4 text-center">{notification.date}</td>
                    <td className="py-2 px-4 text-center">{notification.recipients}</td>
                    <td className="py-2 px-4 text-center">
                      <MenuIcon className="cursor-pointer" onClick={() => openModal(notification)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="flex flex-col items-center justify-center h-64">
              <img src="../Images/Admin/empty-grey.svg" alt="No Data" className="w-24 h-24 mb-4" />
              <p className="text-gray-500">No Data Found</p>
            </div>
          )}
        </div>

        {/* Right - Notification Creation Form */}
        <div className="w-full bg-white px-3 py-4 rounded-md lg:w-1/3 mt-8 lg:mt-0 lg:pl-8">
          <h3 className="text-lg font-semibold mb-4">Create New Notification</h3>
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="border p-2 rounded-lg outline:none"
              onChange={handleInputChange}
              value={newNotification.title}
            />
            <textarea
              placeholder="Message"
              name="message"
              className="border p-2 rounded-lg outline:none"
              onChange={handleInputChange}
              value={newNotification.message}
            />
            <input
              type="text"
              placeholder="Recipients (e.g., 'All' or 'Student IDs')"
              name="recipients"
              className="border p-2 rounded-lg outline:none"
              onChange={handleInputChange}
              value={newNotification.recipients}
            />
            <button
              className="bg-custom-purple text-white py-2 rounded hover:bg-custom-hover"
              onClick={handleSendNotification}
            >
              Send Notification
            </button>
          </div>
        </div>
      </div>

      {/* Dialog for viewing notification details */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  Notification Details
                </Dialog.Title>
                {selectedNotification && (
                  <div className="mt-4">
                    <p><strong>ID:</strong> {selectedNotification.id}</p>
                    <p><strong>Title:</strong> {selectedNotification.title}</p>
                    <p><strong>Date:</strong> {selectedNotification.date}</p>
                    <p><strong>Recipients:</strong> {selectedNotification.recipients}</p>
                    <p><strong>Message:</strong> {selectedNotification.message}</p>
                  </div>
                )}
                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    className="bg-custom-purple text-white px-4 py-2 rounded-lg hover:bg-custom-hover"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default AdNotification;
