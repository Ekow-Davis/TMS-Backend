import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const CollapsableBox = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleExpansion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-4 px-8">
      <div className="border shadow-md rounded-md flex hover:bg-blue-200 p-4 bg-custom-blue items-center justify-between cursor-pointer" onClick={toggleExpansion}>
        <span className="font-bold mb-2 ">{label}</span>
        {isOpen ? <FontAwesomeIcon icon={faChevronUp} className="h-5 w-5" /> : <FontAwesomeIcon icon={faChevronDown} className="h-5 w-5" />}
      </div>
      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default CollapsableBox;
