import React, { useState, useEffect, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import {
  PendingOutlined as PendingIcon,
  CancelOutlined as CancelIcon,
  AccessTimeOutlined as AcceptedIcon,
  AccessTime as AccessTimeIcon, 
  CalendarToday as CalendarTodayIcon, 
  Payment as PaymentIcon,
} from '@mui/icons-material';
import SessionCard from '../../Components/SessionCard';
import RequestCard from '../../Components/RequestCard';
import Sidebar from '../../Components/Layout/Sidebar';

const SessionsHistoryPage = () => {
  const [sessions, setSessions] = useState([]);
  const [filteredSessions, setFilteredSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false); // Edit dialog state
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('approved');
  const [sessionStats, setSessionStats] = useState({
    totalRequests: 0,
    upcomingSessions: 0,
    pendingPayments: 0,
  });

  const token = localStorage.getItem('token');

  // Fetch session requests data
  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/session-requests/student', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await response.json();
        console.log("Session Data:", data);  // Ensure you're receiving the expected data
        if (Array.isArray(data)) {  // Check if the data is an array
          setSessions(data);
          updateSessionStats(data);
          setFilteredSessions(data);
        } else {
          console.error("Expected array but got:", data);
          setSessions([]);  // Handle cases where data is not an array
        }
      } catch (error) {
        console.error('Error fetching sessions:', error);
      }
    };
  
    fetchSessions();
  }, [token]);
  
  const handleUpdateSession = async (id, updatedData) => {
    try {
      const response = await fetch(`http://localhost:8000/api/session-requests/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        alert('Session updated successfully');
        // Update state or refresh sessions
        setSessions(); // Refresh session list
        closeEditDialog(); // Close the dialog after successful update
      } else {
        alert('Failed to update session');
      }
    } catch (error) {
      console.error('Error updating session:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/session-requests/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert(`Session ${id} deleted successfully`);
        setSessions(); // Refresh session list
      } else {
        alert('Failed to delete session');
      }
    } catch (error) {
      console.error('Error deleting session:', error);
    }
  };

  // Open edit dialog
  const openEditDialog = (session) => {
    setSelectedSession(session);
    setIsEditOpen(true);
  };

  // Close edit dialog
  const closeEditDialog = () => {
    setIsEditOpen(false);
    setSelectedSession(null);
  };

  const updateSessionStats = (sessionData) => {
    const totalRequests = sessionData.length;
    const upcomingSessions = sessionData.filter(session => session.created_at >= new Date().toISOString().split('T')[0]).length;
    const pendingPayments = sessionData.filter(session => session.session_status === 'pending_payment').length;

    setSessionStats({ totalRequests, upcomingSessions, pendingPayments });
  };

  useEffect(() => {
    if (Array.isArray(sessions)) {  // Ensure sessions is an array before filtering
      const filtered = sessions.filter((session) => {
        const sessionTime = new Date(`1970-01-01T${session.time}:00`).getTime();
        const nowTime = new Date().getTime();
  
        const matchFilter = filter === 'All' || 
          sessionTime >= nowTime || 
          session.session_status === filter;
  
        const matchSearch = session.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
          session.day.toLowerCase().includes(searchQuery.toLowerCase());
  
        return matchFilter && matchSearch;
      });
  
      setFilteredSessions(filtered);
    }
  }, [filter, searchQuery, sessions]);
  
  

  return (
    <div className='flex h-screen'>
      <Sidebar />
      <div className='flex-grow overflow-y-auto bg-gray-100 p-6'>
        {/* Page Heading */}
        <div className='flex p-2'>
          <h1 className="text-3xl text-custom-heading font-bold mb-4">
            Sessions History
          </h1>            
        </div>

        {/* Session Stats */}
        <div className='rounded-lg my-6 bg-white'>
          <div className="mx-auto p-8">
            <SessionCard
              stats={[
                { title: 'Total Session Requests', value: sessionStats.totalRequests, icon: <CalendarTodayIcon />, bgColor: 'bg-blue-100' },
                { title: 'Upcoming Sessions (1 Month)', value: sessionStats.upcomingSessions, icon: <AccessTimeIcon />, bgColor: 'bg-green-100' },
                { title: 'Pending Payments', value: sessionStats.pendingPayments, icon: <PaymentIcon />, bgColor: 'bg-yellow-100' },
              ]}
            />
          </div>
        </div>

        {/* Pending Requests (Scrollable Section) */}
        <div className="rounded-lg my-6 bg-white max-h-[20rem] flex gap-3 overflow-y-auto p-4">
          {filteredSessions.filter(session => session.session_status === 'approved').map(session => (
            <RequestCard
              key={session.id}
              session={session}
              onDelete={handleDelete(session.id)}
              handleUpdateSession={handleUpdateSession(session.id)}
            />
          ))}
        </div>

        {/* All Session Requests */}
        <div className='rounded-lg bg-white'>
          <div className="mx-auto p-8">
            {/* Search and Filter Bar */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search sessions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="p-2 border border-custom-blue/40 outline-none rounded-md"
              />

              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="py-2 px-3 border border-custom-blue/40 rounded-md ml-2"
              >
                <option value="pending">pending</option>
                <option value="All">All</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>

              <Link to="/bookedSessions">
                <button className='p-2 m-2 bg-custom-purple rounded-[10px] mx-8 text-white'>
                  Booked Sessions
                </button>
              </Link>

              <Link to='/RequestSessionFormPage'>
                <button className='p-2 m-2 bg-custom-purple rounded-[10px] mx-8 text-white'>
                  Request Session
                </button>          
              </Link>
            </div>

            {/* Session Requests List */}
            <div className="flex">
              <div className="w-1/3 pr-4">
                <div className="flex max-h-[31rem] overflow-y-auto flex-col">
                  {filteredSessions.length > 0 ?filteredSessions.map(session => (
                    <div
                      key={session.id}
                      className="p-4 py-3 my-2 border rounded-lg mb-2 cursor-pointer hover:shadow-lg"
                      onClick={() => setSelectedSession(session)}
                    >
                      <h3 className="text-lg font-semibold">{session.subject}</h3>
                      <div className='flex gap-4'>
                        <div className={`rounded-lg p-2 ${
                            session.session_status === 'pending'
                              ? 'bg-yellow-200'
                              : session.session_status === 'rejected'
                              ? 'bg-red-200'
                              : session.session_status === 'approved'
                              ? 'bg-green-200'
                              : ''
                          }`}>
                          {session.session_status === 'pending' && <PendingIcon className="text-yellow-500" />}
                          {session.session_status === 'rejected' && <CancelIcon className="text-red-500" />}
                          {session.session_status === 'approved' && <AcceptedIcon className="text-green-500" />}
                          <span className="ml-2">{session.session_status}</span>                      
                        </div>
                        <p className='items-center justify-center flex'>{session.day} at {session.time.slice(0, 5)}</p>
                      </div>
                    </div>
                  )) : <p> no sessions found</p>}
                </div>
              </div>


              {selectedSession && (
          <div className="p-4 border rounded">
            <h2 className="text-xl font-bold mb-2">{selectedSession.subject}</h2>
            <p>Course: {selectedSession.course}</p>
            <p>Date(s): {selectedSession.day}</p>
            <p>Time(s): {selectedSession.time}</p>
            <p>Duration: {Math.floor(selectedSession.duration / 60)} hours {selectedSession.duration % 60} minutes</p>
            <p>Venue: {selectedSession.venue}</p>
            <p>Status: {selectedSession.session_status}</p>
            <p>Level of Study: {selectedSession.level_of_education}</p>
            <p>Extra: {selectedSession.additional_information}</p>

            {/* Edit Button */}
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={() => openEditDialog(selectedSession)}
            >
              Edit
            </button>
            {/* Delete Button */}
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={() => handleDelete(selectedSession.id)}
            >
              Delete
            </button>
          </div>
        )}

        {/* Edit Dialog */}
        <Transition appear show={isEditOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeEditDialog}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="fixed inset-0 bg-black bg-opacity-30" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex items-center justify-center min-h-[80%] p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-y-auto rounded-lg bg-white p-3 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      Edit Session
                    </Dialog.Title>

                    {selectedSession && (
                      <form
                        className="mt-4"
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleUpdateSession({
                            subject: e.target.subject.value,
                            course: e.target.course.value,
                            day: e.target.day.value,
                            time: e.target.time.value,
                            duration: e.target.duration.value,
                            venue: e.target.venue.value,
                            level_of_education: e.target.venue.value,
                            repetition_period: e.target.venue.value,
                            additional_information: e.target.venue.value,
                          });
                        }}
                      >
                        <div className="mb-4">
                          <label className="block text-sm">Subject</label>
                          <input
                            type="text"
                            name="subject"
                            defaultValue={selectedSession.subject}
                            className="w-full border rounded p-2"
                          />
                        </div>

                        <div className="mb-4">
                          <label className="block text-sm">Course</label>
                          <input
                            type="text"
                            name="course"
                            defaultValue={selectedSession.course}
                            className="w-full border rounded p-2"
                          />
                        </div>

                        <div className="mb-4">
                          <label className="block text-sm">Date(s)</label>
                          <input
                            type="text"
                            name="day"
                            defaultValue={selectedSession.day}
                            className="w-full border rounded p-2"
                          />
                        </div>

                        <div className="mb-4">
                          <label className="block text-sm">Time(s)</label>
                          <input
                            type="text"
                            name="time"
                            defaultValue={selectedSession.time}
                            className="w-full border rounded p-2"
                          />
                        </div>

                        <div className="mb-4">
                          <label className="block text-sm">Duration (hours)</label>
                          <input
                            type="number"
                            name="duration"
                            defaultValue={Math.floor(selectedSession.duration / 60)}
                            className="w-full border rounded p-2"
                          />
                        </div>
                        
                        <div className='flex gap-4'>
                          <div className="mb-4">
                            <label className="block text-sm">Venue</label>
                            <input
                              type="text"
                              name="venue"
                              defaultValue={selectedSession.venue}
                              className="w-full border rounded p-2"
                            />
                          </div>

                          <div className="mb-4">
                            <label className="block text-sm">Monthly Duration</label>
                            <input
                              type="text"
                              name="Repetition period"
                              defaultValue={selectedSession.repetition_period}
                              className="w-full border rounded p-2"
                            />
                          </div>
                        </div>
                        

                        <div className="mb-4">
                          <label className="block text-sm">Educational Level</label>
                          <input
                            type="text"
                            name="level_of_education"
                            defaultValue={selectedSession.level_of_education}
                            className="w-full border rounded p-2"
                          />
                        </div>

                        <div className="mb-4">
                          <label className="block text-sm">Additional Information</label>
                          <input
                            type="text"
                            name="Additional Information"
                            defaultValue={selectedSession.additional_information}
                            className="w-full border rounded p-2"
                          />
                        </div>

                        <div className="flex justify-end">
                          <button
                            type="submit"
                            className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                          >
                            Save Changes
                          </button>
                        </div>
                      </form>
                    )}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        </div>
      </div>
    </div>
    </div>
  </div>

  )
}

export default SessionsHistoryPage

