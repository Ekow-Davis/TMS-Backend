const RequestCard = ({ session }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    // Call an update function here with the updated session data
    setIsOpen(false);
  };

  return (
    <div className="bg-[#D5D7F5] p-6 rounded-lg shadow-md relative">
      <div className="absolute top-2 right-4 text-gray-400">{session.newCount}</div>
      <h4 className="text-lg font-bold">{session.topic} - {session.subject} </h4>
      <div className='flex gap-2'>
        <p>{session.day}</p>
        <p>{session.time.slice(0, 5)}</p>
      </div>
      
      <div className="mt-4 flex space-x-4">
        <button className="text-custom-blue" onClick={() => session.onCancel(session.id)}>Cancel</button>
        <button className="text-custom-purple" onClick={session.onEdit}>Edit</button>
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
                <input type="text" defaultValue={session.level_of_education} className="mt-1 block w-full" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Time</label>
                <input type="time" defaultValue={session.time.slice(0, 5)} className="mt-1 block w-full" />
              </div>
              <button type="submit" className="bg-red-600 text-white p-2 rounded-lg">Save</button>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};
