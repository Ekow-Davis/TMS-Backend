import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../Components/Layout/Sidebar';  

const sessions = [
  {
    id: 1,
    title: 'React Basics',
    date: '2024-07-01',
    time: '10:00 AM',
    duration: '2 hours',
    status: 'Completed',
    outcomes: 'Learned about components and state management in React.',
    recording: 'https://link-to-recording.com',
    participants: ['John Doe', 'Jane Smith'],
    feedback: 'Great session!',
    rating: 4.5,
    actionItems: ['Review state management', 'Practice building components'],
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    date: '2024-06-20',
    time: '02:00 PM',
    duration: '1.5 hours',
    status: 'Completed',
    outcomes: 'Covered closures, promises, and async/await.',
    recording: 'https://link-to-recording.com',
    participants: ['John Doe', 'Sam Wilson'],
    feedback: 'Very informative!',
    rating: 4.7,
    actionItems: ['Practice promises', 'Read more on async/await'],
  },
  // Add more session data as needed
];

const SessionsHistoryPage = () => {
  const [selectedSession, setSelectedSession] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const handleSessionClick = (session) => {
    setSelectedSession(session);
  };

  const filteredSessions = sessions.filter((session) => {
    return (
      (filter === 'All' || session.status === filter) &&
      (session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        session.date.includes(searchQuery))
    );
  });

  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-grow'>
    <div className="container mx-auto overflow-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sessions History</h1>

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
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Canceled">Canceled</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSessions.map((session) => (
          <div
            key={session.id}
            className="p-4 border rounded hover:shadow-lg cursor-pointer"
            onClick={() => handleSessionClick(session)}
          >
            <h2 className="text-xl font-bold">{session.title}</h2>
            <p>{session.date}</p>
            <p>{session.time}</p>
            <p>{session.duration}</p>
            <p>Status: {session.status}</p>
          </div>
        ))}
      </div>

      {selectedSession && (
        <div className="mt-4 p-4 border rounded">
          <h2 className="text-xl font-bold mb-2">{selectedSession.title}</h2>
          <p>Date: {selectedSession.date}</p>
          <p>Time: {selectedSession.time}</p>
          <p>Duration: {selectedSession.duration}</p>
          <p>Status: {selectedSession.status}</p>
          <h3 className="font-bold mt-2">Outcomes:</h3>
          <p>{selectedSession.outcomes}</p>
          <h3 className="font-bold mt-2">Recording:</h3>
          <a href={selectedSession.recording} className="text-blue-500">
            View Recording
          </a>
          <h3 className="font-bold mt-2">Participants:</h3>
          <ul>
            {selectedSession.participants.map((participant, index) => (
              <li key={index}>{participant}</li>
            ))}
          </ul>
          <h3 className="font-bold mt-2">Feedback:</h3>
          <p>{selectedSession.feedback}</p>
          <h3 className="font-bold mt-2">Rating:</h3>
          <p>{selectedSession.rating} / 5</p>
          <h3 className="font-bold mt-2">Action Items:</h3>
          <ul>
            {selectedSession.actionItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
    <div>
      <Link to="/bookedSessions">
      <button>
        Booked Sessions
      </button>
      </Link>
    </div>
    </div>
  );
};

export default SessionsHistoryPage;
