import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import Sidebar from '../../Components/Layout/Sidebar';
import StatusDot from '../../Components/StatusDot';
import PaymentData from '../../Placeholders/paymentHistoryData.json';

const PaymentHistoryPage = () => {
  const [payments] = useState(PaymentData);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const openDialog = (payment) => {
    setSelectedPayment(payment);
    setIsOpen(true);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-8 bg-gray-100">
        <h1 className="text-2xl font-bold mb-6">Payment Sources</h1>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-around mb-6">
            <img src="./Images/Payment/PayPal-Logo.png" alt="PayPal" className="w-32" />
            <img src="./Images/Payment/mastercard.png" alt="MasterCard" className="w-32" />
            <img src="./Images/Payment/amazon-pay.png" alt="Amazon Pay" className="w-32" />
            <img src="./Images/Payment/apple-pay.png" alt="Apple Pay" className="w-32" />
          </div>
          <div>
            <p className='my-4 text-right text-custom-purple mx-10 underline hover:text-custom-blue'>Add Payment Method</p>
          </div>
          <div>
          <h1 className="text-2xl font-bold mb-6">Payment History</h1>
          </div>
          <div className="overflow-auto max-h-96 bg-white rounded-lg">
            <table className="min-w-full">
              <thead className="sticky top-0 bg-white z-10">
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
                      <button
                        onClick={() => openDialog(payment)}
                        className="text-custom-purple p-1 border-2 border-custom-purple hover:bg-custom-purple hover:text-white rounded-[6px]"
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
        <div className="justify-center items-center mt-6">
          <h1 className="text-2xl font-bold mb-6">Make Payment</h1>
            <h1>Click on the button below to make payment for accepted sessions</h1>
            <Link to="/Payment">
              <button className="bg-custom-purple text-white p-2 rounded-lg mt-2">
                Make Payment
              </button>
            </Link>
        </div>
      </div>
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
