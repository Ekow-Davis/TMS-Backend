import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PendingOutlined as PendingIcon,
  CancelOutlined as CancelIcon,
  AccessTimeOutlined as AcceptedIcon,
  AccessTime as AccessTimeIcon, 
  CalendarToday as CalendarTodayIcon, 
  Payment as PaymentIcon,
} from '@mui/icons-material';
import SessionCard from '../../Components/SessionCard'
import RequestCard from '../../Components/RequestCard'
import Sidebar from '../../Components/Layout/Sidebar';  
import sessionData from '../../Placeholders/bookedSessions.json'; // Import JSON data


const exampleData = [
  {
    title: 'Total Session Requests',
    value: 12,
    icon: <CalendarTodayIcon />,
    bgColor: 'bg-blue-100',
  },
  {
    title: 'Upcoming Sessions (1 Month)',
    value: 4,
    icon: <AccessTimeIcon />,
    bgColor: 'bg-green-100',
  },
  {
    title: 'Pending Payments',
    value: 2,
    icon: <PaymentIcon />,
    bgColor: 'bg-yellow-100',
  },
];


const SessionsHistoryPage = () => {
  const [selectedSession, setSelectedSession] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('Upcoming');

  // Get the current date to filter out past sessions
  const currentDate = new Date().toISOString().split('T')[0];

  // Filter sessions by date and status
  const filteredSessions = sessionData.filter((session) => {
    return (
      (filter === 'Upcoming' ? session.StartDate >= currentDate : filter === 'All') &&
      (session.Topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        session.StartDate.includes(searchQuery))
    );
  });



  return (
    <div className='flex h-screen'>
      <Sidebar />
      <div className='flex-grow overflow-y-auto bg-gray-100 p-6'>
        <div className='flex p-2'>
          <h1 className="text-3xl text-custom-heading font-bold mb-4">
            Sessions History
          </h1>            
        </div>

        <div className='rounded-lg my-6 bg-white'>
          <div className="mx-auto p-8">

            <div>
              <SessionCard stats={exampleData} />
            </div>

            <div className='my-8'>
            <RequestCard
              session={{
                id: 1,
                newCount: 3,
                topic: 'Math Tutoring',
                subject: 'Algebra',
                level: 'Intermediate',
                date: '2024-10-02',
                dayTime: { day: 'Monday', time: '14:00' },
                onCancel: (id) => console.log(`Cancel request ${id}`),
              }}
            />
            
            </div>
            
          </div>

        </div>
      <div className='rounded-lg bg-white'>
        <div className="mx-auto p-8">
          
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

          <div className="flex">
            <div className="w-1/3 pr-4">
              {/* <h2 className="text-xl font-bold mb-2">Upcoming Sessions</h2> */}
              <div className="flex max-h-[31rem] overflow-y-auto flex-col">
                {filteredSessions.map((session) => (
                  <div
                    key={session.SessionID}
                    className="p-4 py-3 my-2 border rounded-lg mb-2 cursor-pointer hover:shadow-lg"
                    onClick={() => setSelectedSession(session)}
                  >
                    <h3 className="text-lg font-semibold">{session.Topic}</h3>
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

            <div className="w-2/3 pl-4">
              {selectedSession && (
                <div className="p-4 border rounded">
                  <h2 className="text-xl font-bold mb-2">{selectedSession.Topic}</h2>
                  <p>Tutor: {selectedSession.Tutor}</p>
                  <p>Date: {selectedSession.StartDate}</p>
                  <p>Time: {selectedSession.Time[0]}</p>
                  <p>Duration: {Math.floor(selectedSession.DurationOfMeeting / 60)} hours {selectedSession.DurationOfMeeting % 60} minutes</p>
                  <p>Location: {selectedSession.Location}</p>
                  <p>Charge: ${selectedSession.Charge.toFixed(2)}</p>
                  <h3 className="font-bold mt-2">Meeting Link:</h3>
                  <a href={selectedSession.MeetingLink} className="text-blue-500">
                    Join Meeting
                  </a>
                  <h3 className="font-bold mt-2">Instructor Contact:</h3>
                  <p>{selectedSession.InstructorContact}</p>
                  <h3 className="font-bold mt-2">Additional Materials:</h3>
                  <ul>
                    {selectedSession.AdditionalMaterials.map((material, index) => (
                      <li key={index}>{material}</li>
                    ))}
                  </ul>
                  <h3 className="font-bold mt-2">Notes:</h3>
                  <p>{selectedSession.Notes}</p>
                  <p>Status: {selectedSession.SessionStatus}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        </div>
      </div>

    </div>
  );
};

export default SessionsHistoryPage;
