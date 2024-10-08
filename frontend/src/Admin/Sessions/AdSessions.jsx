import React, { useState } from 'react';
import { MoreVert, Search, Notifications } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import '../Dashboard/style.css'; // Contains styles for Admin Dashboard


const AdminSession = () => {
  // Sample session data
  const sessionData = [
    { id: 1, studentID: 'S101', subject: 'Math', venue: 'Online', status: 'Pending', days: ['Monday', 'Wednesday'], note: '' },
    { id: 2, studentID: 'S102', subject: 'Physics', venue: 'Room 5', status: 'Accepted', days: ['Tuesday', 'Thursday'], note: 'Special materials needed' },
    // More sample data...
  ];

  const [sessions] = useState(sessionData);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);

  const filteredSessions = sessions.filter(
    (session) =>
      (statusFilter === 'All' || session.status === statusFilter) &&
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

  return (
    <>
      <div className="top-container">
        {/* Navbar */}
        <nav className="nav">
          <div className="logo">
            <i className="bx bxl-codepen"></i>
            <Link to="/" className="text-white">TMSServices</Link>
          </div>
          <div className="nav-links">
            <Link to="/Admin/Dashboard">Dashboard</Link>
            <Link to="/Admin/Session">Sessions</Link>
            <Link to="/Admin/Jobs">Jobs</Link>
            <Link to="/Admin/Students">Students</Link>
            <Link to="/Admin/Tutors">Tutors</Link>
            <Link to="/Admin/Employee">Employees</Link>
            <Link to="/Admin/Settings">Settings</Link>
          </div>
          <div className="right-section">
            <Notifications className="text-white" />
            <Search className="text-white" />
            <div className="profile">
              <div className="info">
                <img src="assets/profile.png" alt="Profile" />
                <div>
                  <p className="font-semibold">User's Name</p>
                  <p>1st Rank Admin</p>
                </div>
              </div>
              <i className="bx bx-chevron-down"></i>
            </div>
          </div>
        </nav>

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
              <option value="Pending">Pending</option>
              <option value="Accepted">Accepted</option>
              <option value="Rejected">Rejected</option>
              <option value="Payment Awaiting">Payment Awaiting</option>
              <option value="Completed">Completed</option>
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
                    <th className="p-4 text-center">Days/Week</th>
                    <th className="p-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSessions
                    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                    .map((session) => (
                      <tr key={session.id} className="border-b">
                        <td className="p-4 text-center">{session.id}</td>
                        <td className="p-4 text-center">{session.studentID}</td>
                        <td className="p-4 text-center">{session.subject}</td>
                        <td className="p-4 text-center">{session.venue}</td>
                        <td className="p-4 text-center">{session.status}</td>
                        <td className="p-4 text-center">{session.days.length}</td>
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
                        <p><strong>Student ID:</strong> {selectedSession.studentID}</p>
                        <p><strong>Subject:</strong> {selectedSession.subject}</p>
                        <p><strong>Course:</strong> {selectedSession.subject}</p>
                        <p><strong>Day & Time:</strong></p>
                        <ul>
                          {selectedSession.days.map((day, index
                            ) => (
                              <li key={index}>
                                {day} - 10:00 AM - 12:00 PM {/* Example Time */}
                              </li>
                            ))}
                          </ul>
                          <p><strong>Venue:</strong> {selectedSession.venue}</p>
                          <p><strong>Status:</strong> {selectedSession.status}</p>
                          <p><strong>Note:</strong> {selectedSession.note || 'No additional notes'}</p>
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
        </div>
        </>
      )
    };

    export default AdminSession;
