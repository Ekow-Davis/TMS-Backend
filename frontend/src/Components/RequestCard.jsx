import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

const RequestCard = ({ session, handleUpdateSession }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [updatedCourse, setUpdatedCourse] = useState(session.course);
  const [updatedSubject, setUpdatedSubject] = useState(session.subject);
  const [updatedLevel, setUpdatedLevel] = useState(session.level_of_education);
  const [updatedTime, setUpdatedTime] = useState(session.time.slice(0, 5)); // time without seconds

  const handleEdit = () => setIsOpen(true);

  const handleSave = async (e) => {
    e.preventDefault();

    // Create updated session data object
    const updatedData = {
      topic: updatedTopic,
      subject: updatedSubject,
      level_of_education: updatedLevel,
      time: updatedTime,
    };

    // Call the update function with session ID and updated data
    await handleUpdateSession(session.id, updatedData);

    // Close the dialog after saving
    setIsOpen(false);
  };

  return (
    <div className="bg-[#D5D7F5] p-6 rounded-lg shadow-md relative">
      <div className="absolute top-2 right-4 text-gray-400">{session.newCount}</div>
      <h4 className="text-lg font-bold">{session.course} - {session.subject}</h4>
      <div className='flex gap-2'>
        <p>{session.day}</p>
        <p>{session.time.slice(0, 5)}</p> {/* Time without seconds */}
      </div>

      <div className="mt-4 flex space-x-4">
        <button className="text-custom-blue" onClick={() => session.onCancel(session.id)}>Cancel</button>
        <button className="text-custom-purple" onClick={handleEdit}>Edit</button>
      </div>

      {/* Dialog for editing the session */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black bg-opacity-25"></div>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
            <Dialog.Title>Edit Session</Dialog.Title>
            <form onSubmit={handleSave}>
              <div className="mb-4">
                <label className="block text-sm font-medium">course</label>
                <input
                  type="text"
                  value={updatedCourse}
                  onChange={(e) => setUpdatedCourse(e.target.value)}
                  className="mt-1 block w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Subject</label>
                <input
                  type="text"
                  value={updatedSubject}
                  onChange={(e) => setUpdatedSubject(e.target.value)}
                  className="mt-1 block w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Level</label>
                <input
                  type="text"
                  value={updatedLevel}
                  onChange={(e) => setUpdatedLevel(e.target.value)}
                  className="mt-1 block w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Time</label>
                <input
                  type="time"
                  value={updatedTime}
                  onChange={(e) => setUpdatedTime(e.target.value)}
                  className="mt-1 block w-full"
                />
              </div>
              <button type="submit" className="bg-blue-600 text-white p-2 rounded-lg">Save</button>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default RequestCard;
