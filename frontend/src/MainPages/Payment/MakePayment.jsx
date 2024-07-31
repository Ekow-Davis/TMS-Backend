import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const userDetails = {
  Name: "Ekow Davis",
  ID: "STGH000001",
  Email: "paakowdavis@gmail.com"
};

const MakePayment = () => {
  const location = useLocation();
  const totalCost = location.state?.totalCost || 0;
  
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    isp: '',
    phoneNumber: '',
    cardNumber: '',
    cvv: '',
    expiryDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
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

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Make Payment</h1>
      <form onSubmit={handleSubmit}>
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
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-r-lg"
                  placeholder="Enter phone number without leading 0"
                />
              </div>
            </div>
          </>
        ) : (
          <>
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
              <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
          </>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Amount:</label>
          <input type="text" value={`$${totalCost.toFixed(2)}`} disabled className="w-full p-2 border border-gray-300 rounded-lg" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Confirm Payment</button>
      </form>
    </div>
  );
};

export default MakePayment;
