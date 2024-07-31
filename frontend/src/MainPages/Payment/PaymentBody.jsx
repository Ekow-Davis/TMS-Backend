import React, { useState } from 'react';
import { TrashIcon, TruckIcon } from '@heroicons/react/24/outline';
import bookedSessionsData from '../../Placeholders/bookedSessions.json';

const userDetails = {
  Name: "Ekow Davis",
  ID: "STGH000001",
  Email: "paakowdavis@gmail.com"
};

const PaymentBody = () => {
  const [sessions, setSessions] = useState(bookedSessionsData.filter(session => session.SessionStatus === 'Accepted'));
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    isp: '',
    phoneNumber: '',
    cardNumber: '',
    cvv: '',
    expiryDate: ''
  });

  const handleRemoveSession = (id) => {
    setSessions(sessions.filter(session => session.SessionID !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCardSelect = (card) => {
    setFormData({
      ...formData,
      cardNumber: card.cardNumber,
      cvv: card.cvv,
      expiryDate: card.expDate
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const paymentData = {
      ...userDetails,
      paymentMethod,
      ...(paymentMethod === 'mobile' ? {
        isp: formData.isp,
        phoneNumber: `+233${formData.phoneNumber.replace(/^0+/, '').replace(/\s+/g, '')}`
      } : {
        cardNumber: formData.cardNumber,
        cvv: formData.cvv,
        expiryDate: formData.expiryDate
      }),
      amount: totalCost
    };
    console.log(paymentData);
  };

  const totalCost = sessions.reduce((total, session) => total + session.Charge, 0) + 200;

  const cards = [
    {
      cardID: 1,
      cardNumber: 9042355773475,
      cvv: 123,
      expDate: '2029-03',
      cardType: 'Visa',
      img: './Images/Payment/visa.png'
    },
    {
      cardID: 2,
      cardNumber: 4115647821144,
      cvv: 417,
      expDate: '2031-07',
      cardType: 'Master',
      img: './Images/Payment/mastercard.png'
    }
  ];

  return (
    <div className="p-8 bg-gray-100 flex flex-col">
      {/* Top Containers */}
      <div className="flex flex-col md:flex-row justify-between">
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
        <div className="bg-[#21266a] text-white p-6 rounded-lg md:w-1/2 mt-6 md:mt-0 md:ml-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4">Session Details</h2>
            <div className="overflow-y-auto max-h-48">
              {sessions.map((session) => (
                <div key={session.SessionID} className="flex items-center justify-between mb-4">
                  <div>
                    <p>{session.Topic}</p>
                    <p className="text-sm">{session.Subject}, {session.Level}</p>
                    <p className="text-sm">{session.FrequencyofMeeting}</p>
                  </div>
                  <div className="text-right">
                    <p>${session.Charge.toFixed(2)}</p>
                    <button onClick={() => handleRemoveSession(session.SessionID)}>
                      <TrashIcon className="h-6 w-6 text-red-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <hr className="border-gray-500 my-4" />
            <div className="flex justify-between">
              <p>Subtotal:</p>
              <p>${sessions.reduce((total, session) => total + session.Charge, 0).toFixed(2)}</p>
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
      </div>

      {/* Payment Form */}
      <div className="bg-gray-100 p-8 w-full mt-6">
        <h1 className="text-2xl font-bold mb-4">Make Payment</h1>
        <form id="make-payment-form" onSubmit={handleSubmit} >
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Name:</label>
            <input type="text" value={userDetails.Name} disabled className="w-full p-2 border border-gray-300 rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">ID:</label>
            <input type="text" value={userDetails.ID} disabled className="w-full p-2 border border-gray-300 rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email:</label>
            <input type="email" value={userDetails.Email} className="w-full p-2 border border-gray-300 rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Payment Method:</label>
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg">
              <option value="card">Card</option>
              <option value="mobile">Mobile Money</option>
            </select>
          </div>
          {paymentMethod === 'mobile' ? (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">ISP:</label>
                <select name="isp" value={formData.isp} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg">
                  <option value="">Select ISP</option>
                  <option value="MTN">MTN</option>
                  <option value="Telecel">Telecel</option>
                  <option value="AirtelTigo">AirtelTigo</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Phone Number:</label>
                <div className="flex">
                  <span className="p-2 bg-gray-200 border border-gray-300 rounded-l-lg">+233</span>
                  <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-r-lg" />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Select Card:</label>
                <div className="flex flex-wrap gap-4">
                  {cards.map((card) => (
                    <button
                      key={card.cardID}
                      type="button"
                      onClick={() => handleCardSelect(card)}
                      className="flex items-center border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <img src={card.img} alt={card.cardType} className="h-8 w-8 mx-4 m-1  mr-2" />
                      <span>{`********* ${String(card.cardNumber).slice(-4)}`}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Card Number:</label>
                <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">CVV:</label>
                <input type="text" name="cvv" value={formData.cvv} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Expiry Date:</label>
                <input type="month" name="expiryDate" value={formData.expiryDate} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
            </>
          )}
          <button type="submit" className="w-full bg-custom-purple text-white px-4 py-2 rounded-lg">
            Make Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentBody;
