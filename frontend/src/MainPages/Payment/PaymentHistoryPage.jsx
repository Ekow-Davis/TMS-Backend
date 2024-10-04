import React, { useState } from 'react';
import CardHolder from '../../Components/CardHolder'
import { Link } from 'react-router-dom';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import Sidebar from '../../Components/Layout/Sidebar';
import StatusDot from '../../Components/StatusDot';
import PaymentData from '../../Placeholders/paymentHistoryData.json';

const cardsData = [
  {
    cardType: 'Visa Card',
    cardNumber: '1234567890123456',
    scheme: 'Blue', // Scheme for Visa
    holderName: 'John Doe',
    expiry: '08/24',
    cvv: '123',
  },
  {
    cardType: 'Amazon Pay',
    cardNumber: '9876543210987654',
    scheme: 'Black', // Scheme for Amazon Pay
    holderName: 'Jane Doe',
    expiry: '09/25',
    cvv: '456',
  },
  {
    cardType: 'Amazon Pay',
    cardNumber: '5678123498762345',
    scheme: 'Orange', // Scheme for Amazon Pay
    holderName: 'John Smith',
    expiry: '01/26',
    cvv: '789',
  },
];

const PaymentHistoryPage = () => {
  const [payments] = useState(PaymentData);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const openDialog = (payment) => {
    setSelectedPayment(payment);
    setIsOpen(true);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow overflow-auto p-6 bg-gray-100">
      
      {/* Main Body */}
      <div>
       <h1 className="text-4xl text-custom-heading font-bold mb-6">
          Payment
        </h1>
      </div>

        <div className='bg-white p-6 rounded-lg'>
        {/* Inner Body */}        
        <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center my-8 p-6 bg-gradient-to-r from-custom-purple to-custom-blue rounded-lg shadow-lg">
          <h1 className="text-3xl text-center text-white font-bold mb-4 animate-pulse">Make Payment</h1>
          
          <p className="text-lg text-center text-gray-200 mb-6">Click the button below to proceed with your payment for accepted sessions</p>
          
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-lg blur-lg opacity-50"></div>
            <Link to="/Payment">
              <button className="relative bg-white text-custom-purple text-lg font-semibold px-6 py-3 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                Make Payment
              </button>
            </Link>
          </div>
          
          <div className="mt-4">
            <svg className="w-8 h-8 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </div>
        </div>


          <div>
            <h1 className="text-2xl text-center text-custom-heading font-bold mb-6">
              Registered Payment Options
            </h1>
            <CardHolder cards={cardsData} />
          </div>

          {/* <div className="flex justify-around mb-6">
            <img src="./Images/Payment/PayPal-Logo.png" alt="PayPal" className="w-32" />
            <img src="./Images/Payment/mastercard.png" alt="MasterCard" className="w-32" />
            <img src="./Images/Payment/amazon-pay.png" alt="Amazon Pay" className="w-32" />
            <img src="./Images/Payment/apple-pay.png" alt="Apple Pay" className="w-32" />
          </div>
          <div>
            <p className='my-4 text-right text-custom-purple mx-10 underline hover:text-custom-blue'>
              Add Payment Method
            </p>
          </div> */}

          
          <div>
          <h1 className="text-2xl my-3 text-center text-custom-heading font-bold mb-6">
            Payment History
          </h1>
          </div>
          <div className="overflow-auto max-h-96 bg-white rounded-lg mb-6">
            <table className="min-w-full border-2">
              <thead className="sticky top-0 bg-white z-10">
                <tr className="w-full bg-custom-purple text-white border-b-2 border-gray-200">
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
                    className="border-b hover:bg-custom-hover-teal transition-all"
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
                      <button
                        onClick={() => openDialog(payment)}
                        className="text-custom-blue p-1 border-2 border-custom-blue hover:bg-custom-purple hover:text-white rounded-[6px]"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        </div>
      </div>

      {/* Dailog Box for selected Payment */}
      {selectedPayment && (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="flex min-h-full items-center justify-center p-4">
              <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg transform transition-all duration-300 ease-out">
                <DialogTitle className="font-bold text-custom-purple mb-4">
                  Payment Details for {selectedPayment.ID}
                </DialogTitle>
                <div className="grid grid-cols-2 gap-4 text-lg">
                  <p className="font-bold">Amount:</p>
                  <p>${selectedPayment.amount}</p>
                  <p className="font-bold">Date:</p>
                  <p>{new Date(selectedPayment.date).toLocaleDateString()}</p>
                  <p className="font-bold">Time:</p>
                  <p>{new Date(selectedPayment.date).toLocaleTimeString()}</p>
                  <p className="font-bold">Description:</p>
                  <p>{selectedPayment.description}</p>
                  <p className="font-bold">Status:</p>
                  <p className="capitalize">{selectedPayment.status}</p>
                  <p className="font-bold">Sessions Involved:</p>
                  <p>{selectedPayment.sessionID}</p>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default PaymentHistoryPage;
