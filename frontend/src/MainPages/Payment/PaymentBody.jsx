import React from 'react';
import { TrashIcon, TruckIcon } from '@heroicons/react/24/outline';
import bookedSessionsData from '../../Placeholders/bookedSessions.json';

const PaymentBody = () => {
  // Filter sessions with status "Accepted"
  const acceptedSessions = bookedSessionsData.filter(session => session.SessionStatus === 'Accepted');
  
  // Calculate the total cost of accepted sessions + service fee
  const totalCost = acceptedSessions.reduce((total, session) => total + session.Charge, 0) + 200;

  const handleRemoveSession = (id) => {
    // Handle session removal logic here
    console.log(`Remove session with ID: ${id}`);
  };

  return (
    <div className="p-8 bg-gray-100 flex flex-col md:flex-row justify-between">
      {/* Left Side */}
      <div className="bg-custom-blue p-6 rounded-lg md:w-1/2">
        <h1 className="text-xl font-bold mb-4">Thank You for Choosing TMSServices</h1>
        <p className="mb-4">Your session request has been submitted successfully. You will receive a confirmation email shortly. Once your session is booked, you will receive another email with the session details.</p>
        <div className="mb-4">
          <h2 className="font-bold">Payment details:</h2>
          <p>Session ID: 1122334455 Session date: 15 January 2022 Session fee: $25.00</p>
        </div>
        <div className="mb-4">
          <h2 className="font-bold">Session status:</h2>
          <p>Pending...</p>
        </div>
        <div className="mb-4">
          <h2 className="font-bold">Payment method:</h2>
          <p>Credit Card</p>
        </div>
        <div className="mb-4">
          <h2 className="font-bold">Billing address:</h2>
          <p>John Doe, 123 Main Street, Anytown, NY 12345</p>
        </div>
        <div className="flex items-center mb-4">
          <TruckIcon className="h-6 w-6 mr-2" />
          <p>Est. session date: 20 January 2022</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Track session status</button>
      </div>
      
      {/* Right Side */}
      <div className="bg-[#21266a] text-white p-6 rounded-lg md:w-1/2 mt-6 md:mt-0 md:ml-6">
        <h2 className="text-xl font-bold mb-4">Session Details</h2>
        {acceptedSessions.map((session) => (
          <div key={session.ID} className="flex items-center justify-between mb-4">
            <div>
              <p>{session.Topic}</p>
              <p className="text-sm">{session.Subject}, {session.Level}</p>
              <p className="text-sm">{session.FrequencyofMeeting}</p>
            </div>
            <div className="text-right">
              <p>${session.Charge.toFixed(2)}</p>
              <button onClick={() => handleRemoveSession(session.ID)}>
                <TrashIcon className="h-6 w-6 text-red-500" />
              </button>
            </div>
          </div>
        ))}
        <hr className="border-gray-500 my-4" />
        <div className="flex justify-between">
          <p>Subtotal:</p>
          <p>${acceptedSessions.reduce((total, session) => total + session.Charge, 0).toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p>Service fee:</p>
          <p>$200.00</p>
        </div>
        <div className="flex justify-between font-bold mt-4">
          <p>Total:</p>
          <p>${totalCost.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentBody;
