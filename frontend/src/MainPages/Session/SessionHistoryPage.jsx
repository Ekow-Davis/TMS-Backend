import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../Components/Layout/Sidebar';  
import sessionData from '../../Placeholders/bookedSessions.json'; // Import JSON data

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
    <div className='flex'>
      <Sidebar />
      <div className='flex-grow bg-gray-100 overflow-auto'>
        <div className="container mx-auto overflow-auto p-4">
          <div className='flex'>
            <h1 className="text-2xl font-bold mb-4">Sessions History</h1>            
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Search sessions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 border rounded"
            />

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="p-2 border rounded ml-2"
            >
              <option value="Upcoming">Upcoming</option>
              <option value="All">All</option>
              <option value="Accepted">Accepted</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          <div className="flex">
            <div className="w-1/3 pr-4">
              <h2 className="text-xl font-bold mb-2">Upcoming Sessions</h2>
              <div className="flex flex-col">
                {filteredSessions.map((session) => (
                  <div
                    key={session.SessionID}
                    className="p-4 border rounded mb-2 cursor-pointer hover:shadow-lg"
                    onClick={() => setSelectedSession(session)}
                  >
                    <h3 className="text-lg font-semibold">{session.Topic}</h3>
                    <p>{session.StartDate}</p>
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
        <Link to="/bookedSessions">
              <button className='p-2 bg-custom-purple rounded-[10px] mx-3 text-white hover:bg-custom-blue hover:text-black'>
                Booked Sessions
              </button>
            </Link>
      </div>
    </div>
  );
};

export default SessionsHistoryPage;
