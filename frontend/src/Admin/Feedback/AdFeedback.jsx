import React, { useState, useEffect } from 'react';
import '../Dashboard/style.css';
import NavBar from '../AdComponent/Layout/NavBar';
import { Menu as MoreVertIcon } from '@mui/icons-material';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const AdFeedback = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  // Example feedback data (you will fetch from backend in actual app)
  useEffect(() => {
    const fetchReports = async () => {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage

      if (!token) {
        alert('No token found. Please login first.');
        return;
      }

      try {
        const response = await fetch('https://tms.ghanaglobalinitiative.com/api/reports', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Pass the authorization token
          },
        });

        if (response.ok) {
          const data = await response.json();
          // Sort feedback data by the created date (latest first)
          const sortedData = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
          setFeedbackData(sortedData);
        } else {
          console.error('Failed to fetch reports.');
        }
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };

    fetchReports();
  }, []);

  const openModal = (feedback) => {
    setSelectedFeedback(feedback);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedFeedback(null);
  };

  return (
    <>
      <div className="top-container">
        <NavBar />
        <section className="status">
        <div className="header">          
          <h4>Feedback: Weekly Activity</h4>
        </div>
        <div className="items-list">
          
          {/* 1st Card */}
          <div className="item">            
            <div className="info">
              <div>
                <h5>Total Contacts This Week</h5>
                <p>- 3 From Users</p>
                <p>- 1 From Non-Users</p>
              </div>
              <i className="bx bx-data"></i>
            </div>
            
          </div>

          {/* 2nd Card */}
          <div className="item">
            <div className="info">
              <div>
                <h5>Feedback</h5>
                <p>- 2  Session Booking Related</p>
                <p>- 1  Enquiry Related</p>
              </div>
              <i className="bx bx-terminal"></i>
            </div>
            
          </div>

          {/* 3rd Card */}
          <div className="item">            
            <div className="info">
              <div>
                <h5>I don't know</h5>
                <p>- 3 lessons left</p>
                <p>- 1 project left</p>
              </div>
              <i className="bx bx-data"></i>
            </div>
            
          </div>

          {/* 4th Card */}
          {/* <div className="item">
            <div className="info">
              <div>
                <h5>Unpaid Sessions Remaining</h5>
                <p>- 2  sessions awaiting review left</p>
                <p>- 5  left</p>
              </div>
              <i className="bx bx-terminal"></i>
            </div>
            
          </div> */}

        </div>
      </section>
      </div>

      {/* Feedback Table */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Feedback</h2>
        <table className="min-w-full table-auto bg-white rounded-md shadow-md">
          <thead>
            <tr>
              <th className="px-4 py-2">Feedback ID</th>
              <th className="px-4 py-2">Student Email</th>
              <th className="px-4 py-2">Created Date</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {feedbackData.length > 0 ? (
              feedbackData.map((feedback) => (
                <tr key={feedback.id} className="border-t">
                  <td className="px-4 py-2 text-center">{feedback.id}</td>
                  <td className="px-4 py-2 text-center">{feedback.student.email}</td>
                  <td className="px-4 py-2 text-center">
                    {new Date(feedback.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 text-center">
                    <button onClick={() => openModal(feedback)}>
                      <MoreVertIcon />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No Feedback Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Dialog for viewing feedback details */}
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
                  Feedback Details
                </Dialog.Title>
                {selectedFeedback && (
                  <div className="mt-4">
                    <p>
                      <strong>Feedback ID:</strong> {selectedFeedback.id}
                    </p>
                    <p>
                      <strong>Student ID:</strong> {selectedFeedback.student.id}
                    </p>
                    <p>
                      <strong>Email:</strong> {selectedFeedback.student.email}
                    </p>
                    <p>
                      <strong>Phone:</strong> {selectedFeedback.student.phoneNumber}
                    </p>
                    <p>
                      <strong>Message:</strong> {selectedFeedback.message}
                    </p>
                    <p>
                      <strong>Created At:</strong>{' '}
                      {new Date(selectedFeedback.created_at).toLocaleString()}
                    </p>
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

export default AdFeedback;
