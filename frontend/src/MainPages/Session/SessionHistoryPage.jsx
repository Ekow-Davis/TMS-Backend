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
  const [filter, setFilter] = useState('Upcoming');
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
        const response = await fetch('https://tms.ghanaglobalinitiative.com/api/session-requests/student', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setSessions(data);
        updateSessionStats(data);
        setFilteredSessions(data); // Default filtered sessions
      } catch (error) {
        console.error('Error fetching sessions:', error);
      }
    };

    fetchSessions();
  }, [token]);

  const handleUpdateSession = async (id, updatedData) => {
    try {
      const response = await fetch(`https://tms.ghanaglobalinitiative.com/api/session-requests/${id}`, {
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
      const response = await fetch(`https://tms.ghanaglobalinitiative.com/api/session-requests/${id}`, {
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
    const upcomingSessions = sessionData.filter(session => session.StartDate >= new Date().toISOString().split('T')[0]).length;
    const pendingPayments = sessionData.filter(session => session.SessionStatus === 'Pending Payment').length;

    setSessionStats({ totalRequests, upcomingSessions, pendingPayments });
  };

  useEffect(() => {
    const currentDate = new Date().toISOString().split('T')[0];
    const filtered = sessions.filter((session) => {
      const matchFilter = filter === 'All' || 
        (filter === 'Upcoming' && session.StartDate >= currentDate) ||
        session.SessionStatus === filter;

      const matchSearch = session.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        session.StartDate.includes(searchQuery);

      return matchFilter && matchSearch;
    });
    setFilteredSessions(filtered);
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
        <div className="rounded-lg my-6 bg-white max-h-[20rem] overflow-y-auto p-4">
          {filteredSessions.filter(session => session.SessionStatus === 'Pending').map(session => (
            <RequestCard
              key={session.id}
              session={{
                id: session.id,
                newCount: 1,
                topic: session.subject,
                subject: session.course,
                level: session.level_of_education,
                time: session.time.join(', '),
                onCancel: (id) => console.log(`Cancel request ${id}`),
              }}
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
                <option value="Upcoming">Upcoming</option>
                <option value="All">All</option>
                <option value="Accepted">Accepted</option>
                <option value="Cancelled">Cancelled</option>
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
                  {filteredSessions.map(session => (
                    <div
                      key={session.id}
                      className="p-4 py-3 my-2 border rounded-lg mb-2 cursor-pointer hover:shadow-lg"
                      onClick={() => setSelectedSession(session)}
                    >
                      <h3 className="text-lg font-semibold">{session.subject}</h3>
                      <div className='flex gap-4'>
                        <div className={`rounded-lg p-2 ${
                            session.SessionStatus === 'Pending'
                              ? 'bg-yellow-200'
                              : session.SessionStatus === 'Cancelled'
                              ? 'bg-red-200'
                              : session.SessionStatus === 'Accepted'
                              ? 'bg-green-200'
                              : ''
                          }`}>
                          {session.SessionStatus === 'Pending' && <PendingIcon className="text-yellow-500" />}
                          {session.SessionStatus === 'Cancelled' && <CancelIcon className="text-red-500" />}
                          {session.SessionStatus === 'Accepted' && <AcceptedIcon className="text-green-500" />}
                          <span className="ml-2">{session.SessionStatus}</span>                      
                        </div>
                        <p className='items-center justify-center flex'>{session.StartDate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


              {/* Selected Session Details */}
        <div className="w-2/3 pl-4">
          {selectedSession && (
            <div className="p-4 border rounded">
              <h2 className="text-xl font-bold mb-2">{selectedSession.subject}</h2>
              <p>Course: {selectedSession.course}</p>
              <p>Date(s): {selectedSession.day.join(', ')}</p>
              <p>Time(s): {selectedSession.time.join(', ')}</p>
              <p>Duration: {Math.floor(selectedSession.duration / 60)} hours {selectedSession.duration % 60} minutes</p>
              <p>Venue: {selectedSession.venue}</p>
              <p>Additional Info: {selectedSession.additional_information}</p>
              <p>Status: {selectedSession.SessionStatus}</p>

              {/* Action Buttons */}
              <div className="mt-4">
        

              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                onClick={() => handleUpdateSession(selectedSession.id)}
              >
                Edit
              </button>

              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                onClick={() => handleDelete(selectedSession.id)}
              >
                Delete
              </button>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
    </div>
  </div>
</div>

  )
}

export default SessionsHistoryPage

