import React from 'react';
import CreditCard from './CreditCard'; 

const CardHolder = ({ cards }) => {
  

  return (
    <div className="relative w-full h-60 overflow-x-scroll flex space-x-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`transform transition-transform duration-500 ease-in-out`}
        >
          <CreditCard {...card} />
        </div>
      ))}
    </div>
  );
};

export default CardHolder;