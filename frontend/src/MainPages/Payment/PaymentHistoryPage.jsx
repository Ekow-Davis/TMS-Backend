import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../Components/Layout/Sidebar'
import StatusDot from '../../Components/StatusDot';
import PaymentData from '../../Placeholders/paymentHistoryData.json';

const PaymentHistoryPage = () => {
  const [payments, setPayments] = useState(PaymentData);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Payments history</h1>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-around mb-6">
            <img src="./Images/Payment/PayPal-Logo.jpg" alt="PayPal" className="w-32" />
            <img src="./Images/Payment/mastercard.png" alt="MasterCard" className="w-32" />
            <img src="./Images/Payment/Amazon-Pay.png" alt="Amazon Pay" className="w-32" />
            <img src="./Images/Payment/apple-pay.png" alt="Apple Pay" className="w-32" />
          </div>
          <div className="overflow-auto max-h-96 bg-white rounded-lg">
            <table className="min-w-full">
              <thead>
                <tr className="w-full border-b-2 border-gray-200">
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">ID</th>
                  <th className="p-3 text-left">Amount</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Time</th>
                  <th className="p-3 text-left">Description</th>
                  <th className="p-3 text-left"></th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr
                    key={payment.ID}
                    className="border-b hover:bg-custom-blue transition-all"
                  >
                    <td className="p-3 flex items-center">
                      <StatusDot status={payment.status} />
                      <span className="ml-2 capitalize">{payment.status}</span>
                    </td>
                    <td className="p-3">{payment.ID}</td>
                    <td className="p-3">${payment.amount}</td>
                    <td className="p-3">{new Date(payment.date).toLocaleDateString()}</td>
                    <td className="p-3">{new Date(payment.date).toLocaleTimeString()}</td>
                    <td className="p-3">{payment.description}</td>
                    <td className="p-3">
                      <button className="text-custom-purple p-1 border-2 border-custom-purple hover:bg-custom-purple hover:text-white rounded-[6px]">Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>        
        <div className='justify-center items-center'>
          <h1>Click on the button below to make payment for accepted sessions</h1>
          <Link to="/Payment">
          <button className="bg-custom-purple text-white p-2 rounded-lg">
            Make Payment
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default PaymentHistoryPage;
