import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const CollapsableBox = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border p-4">
      <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <span className="font-bold">{label}</span>
        {isOpen ? <FontAwesomeIcon icon={faChevronUp} className="h-5 w-5" /> : <FontAwesomeIcon icon={faChevronDown} className="h-5 w-5" />}
      </div>
      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default CollapsableBox;
