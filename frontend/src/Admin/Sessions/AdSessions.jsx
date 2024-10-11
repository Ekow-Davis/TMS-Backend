import React, { useState, useEffect } from 'react';
import { MoreVert } from '@mui/icons-material';
import NavBar from '../AdComponent/Layout/NavBar';
import { Dialog, Transition } from '@headlessui/react';
import '../Dashboard/style.css'; // Contains styles for Admin Dashboard

const AdminSession = () => {
  const [sessions, setSessions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);

  const fetchSessions = async () => {
    try {
      // Retrieve the token from local storage
      const token = localStorage.getItem('token');
      
      if (!token) {
        console.error('No token found. Please login first.');
        return;
      }
  
      // Fetch the sessions with the authorization token
      const response = await fetch('https://tms.ghanaglobalinitiative.com/api/session-requests', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Pass the token as a Bearer token
        },
      });
  
      // Handle the response
      if (!response.ok) {
        throw new Error('Failed to fetch sessions');
      }
  
      const data = await response.json();
      setSessions(data); // Set the sessions state with the data
  
    } catch (error) {
      console.error('Failed to fetch sessions:', error);
    }
  };
  
  // Call the fetchSessions inside useEffect
  useEffect(() => {
    fetchSessions();
  }, []);
  

  // Filter sessions based on search term and status
  const filteredSessions = sessions.filter(
    (session) =>
      (statusFilter === 'All' || session.session_status === statusFilter) &&
      session.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredSessions.length / itemsPerPage);

  const openModal = (session) => {
    setSelectedSession(session);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedSession(null);
  };

  const handleApprove = (id) => {
    alert(`Approved Session with ID ${id}`);
  };

  const handleReject = (id) => {
    alert(`Rejected Session with ID ${id}`);
  };

  // Function to convert duration to hours and minutes
  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  return (
    <>
      <div className="top-container">
        {/* Navbar */}
        <NavBar />

        {/* Status */}
        <section className="status">
          <div className="header">
            <h4>Weekly Activity</h4>
          </div>
          {/* Cards */}
          <div className="items-list">
            {/* Example cards */}
            {/* 1st Card */}
          <div className="item">            
            <div className="info">
              <div>
                <h5>Sessions Remailing This Week</h5>
                <p>- 3 lessons left</p>
                <p>- 1 project left</p>
              </div>
              <i className="bx bx-data"></i>
            </div>
            <div className="progress">
              <div className="bar"></div>
            </div>
          </div>

          {/* 2nd Card */}
          <div className="item">
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
          </div>

          {/* 3rd Card */}
          <div className="item">            
            <div className="info">
              <div>
                <h5>Sessions Remailing This Week</h5>
                <p>- 3 lessons left</p>
                <p>- 1 project left</p>
              </div>
              <i className="bx bx-data"></i>
            </div>
            <div className="progress">
              <div className="bar"></div>
            </div>
          </div>

          {/* 4th Card */}
          <div className="item">
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
          </div>
              
          </div>
        </section>
      </div>

      {/* Session Main Body */}
      <div className="p-8 bg-gray-100 min-h-screen">
        {/* Search Bar & Filter */}
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            className="border p-2 rounded-lg w-1/3"
            placeholder="Search by subject..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="border p-2 rounded-lg"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
            <option value="payment-awaiting">Payment Awaiting</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {/* Conditional Rendering: No Data */}
        {filteredSessions.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64">
            <img src="../Images/Admin/empty-grey.svg" alt="No Data" className="w-24 h-24 mb-4" />
            <p className="text-gray-500">No Data Found</p>
          </div>
        ) : (
          <>
            {/* Session Table */}
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="border-b">
                  <th className="p-4 text-center">ID</th>
                  <th className="p-4 text-center">Student ID</th>
                  <th className="p-4 text-center">Subject</th>
                  <th className="p-4 text-center">Venue</th>
                  <th className="p-4 text-center">Status</th>
                  <th className="p-4 text-center">Days</th>
                  <th className="p-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredSessions
                  .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                  .map((session) => (
                    <tr key={session.id} className="border-b">
                      <td className="p-4 text-center">{session.id}</td>
                      <td className="p-4 text-center">{session.student?.id || 'N/A'}</td>
                      <td className="p-4 text-center">{session.subject}</td>
                      <td className="p-4 text-center">{session.venue}</td>
                      <td className="p-4 text-center">{session.session_status}</td>
                      <td className="p-4 text-center">{session.day}</td>
                      <td className="p-4 flex justify-center gap-2">
                        <button
                          className="bg-custom-purple text-white px-4 py-2 rounded-lg hover:bg-custom-hover"
                          onClick={() => handleApprove(session.id)}
                        >
                          Approve
                        </button>
                        <button
                          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                          onClick={() => handleReject(session.id)}
                        >
                          Reject
                        </button>
                        <MoreVert
                          className="cursor-pointer"
                          onClick={() => openModal(session)}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
              <div>
                Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
                {Math.min(currentPage * itemsPerPage, filteredSessions.length)} of{' '}
                {filteredSessions.length} entries
              </div>
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === index + 1
                        ? 'bg-custom-purple text-white'
                        : 'bg-gray-200'
                    }`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Dialog for viewing session details */}       
          <Transition appear show={isOpen} as={React.Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={React.Fragment}
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
                      Session Details
                    </Dialog.Title>
                    {selectedSession && (
                      <div className="mt-4">
                        <p><strong>Student ID:</strong> {selectedSession.student?.id}</p>
                        <p><strong>Subject:</strong> {selectedSession.subject}</p>
                        <p><strong>Course:</strong> {selectedSession.course}</p>
                        <p><strong>Day & Time:</strong> {selectedSession.day} - {selectedSession.time}</p>
                        <p><strong>Duration:</strong> {formatDuration(selectedSession.duration)}</p> {/* Format duration */}
                        <p><strong>Venue:</strong> {selectedSession.venue}</p>
                        <p><strong>Status:</strong> {selectedSession.session_status}</p>
                        <p><strong>Additional Information:</strong> {selectedSession.additional_information || 'None'}</p>
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
      </div>
    </>
  );
}

export default AdminSession;
