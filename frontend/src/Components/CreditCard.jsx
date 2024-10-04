import React from 'react';
import clsx from 'clsx';
import Chip from 'frontend/public/Images/Payment/creditcard-chip-gold.jpg'


const cardLogos = {
  'Amazon Pay': './Images/Payment/amazon-pay.png',
  'Pay Pal': './Images/Payment/PayPal-Logo.png',
  'Master Card': './Images/Payment/mastercard.png',
  'Visa Card': './Images/Payment/visa.png',
};

const cardStyles = {
  'Amazon Pay': {
    Orange: 'bg-gradient-to-b from-orange-400 to-orange-700',
    Black: 'bg-gradient-to-b from-gray-400 to-black',
  },
  'Pay Pal': {
    Blue: 'bg-gradient-to-b from-blue-400 to-blue-700',
    Teal: 'bg-gradient-to-b from-teal-400 to-teal-600',
  },
  'Master Card': {
    Red: 'bg-gradient-to-b from-red-500 to-red-700',
    Yellow: 'bg-gradient-to-b from-yellow-400 to-yellow-600',
  },
  'Visa Card': {
    Blue: 'bg-gradient-to-b from-blue-600 to-blue-800',
    Black: 'bg-gradient-to-b from-gray-600 to-black',
  },
};

const CreditCard = ({ cardType, cardNumber, holderName, expiry, cvv, scheme }) => {
  const formattedCardNumber = `${cardNumber.slice(0, 3)} **** **** ${cardNumber.slice(-3)}`;
  
  // Get the corresponding logo and style for the card type and scheme
  const cardLogo = cardLogos[cardType];
  const cardBackground = cardStyles[cardType][scheme];

  return (
    <div className={clsx("w-96 h-56 rounded-xl relative text-white p-6", cardBackground)}>
      {/* Card Logo */}
      <div className="absolute top-4 left-4">
        <img src={cardLogo} alt={`${cardType} logo`} className="w-16 ml-2" />
      </div>

      {/* Card Chip */}
      <div className="absolute top-24 right-6">
        <img src={Chip} alt="Credit Card Chip" className="w-12 rounded-lg" />
      </div>

      {/* Card Number */}
      <div className="mt-16">
        <p className="text-3xl tracking-widest">{formattedCardNumber}</p>
      </div>

      {/* Card Details */}
      <div className="flex justify-between mt-6">
        <div>
          <p className="text-sm">Card Holder</p>
          <p className="font-bold text-xl">{holderName}</p>
        </div>
        <div>
          <p className="text-sm">Expiry</p>
          <p className="font-bold text-xl">{expiry}</p>
        </div>
        <div>
          <p className="text-sm">CVV</p>
          <p className="font-bold text-xl">{cvv}</p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
