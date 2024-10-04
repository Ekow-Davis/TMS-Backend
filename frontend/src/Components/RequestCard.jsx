import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import matchInput  from './MatchInput'; // import your MatchInput component

const RequestCard = ({ session }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEdit = () => setIsOpen(true);
  const handleSave = () => {
    // Handle saving the updated session data
    setIsOpen(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md relative">
      <div className="absolute top-2 right-4 text-gray-400">{session.newCount}</div>
      <h4 className="text-lg font-bold">{session.topic}</h4>
      <p>{session.date}</p>
      
      <div className="mt-4 flex space-x-4">
        <button className="text-red-600" onClick={() => session.onCancel(session.id)}>Cancel</button>
        <button className="text-blue-600" onClick={handleEdit}>Edit</button>
      </div>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black bg-opacity-25"></div>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
            <Dialog.Title>Edit Session</Dialog.Title>
            <form onSubmit={handleSave}>
              <div className="mb-4">
                <label className="block text-sm font-medium">Topic</label>
                <input type="text" defaultValue={session.topic} className="mt-1 block w-full" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Subject</label>
                <input type="text" defaultValue={session.subject} className="mt-1 block w-full" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Level</label>
                <input type="text" defaultValue={session.level} className="mt-1 block w-full" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Time</label>
                <matchInput defaultDay={session.dayTime.day} defaultTime={session.dayTime.time} />
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
