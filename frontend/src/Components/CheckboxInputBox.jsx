import React, { useState } from 'react';

const CheckboxInputBox = ({ options, selectionType, miniLabel, label }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (option) => {
    if (selectionType === 'multiple') {
      setSelectedOptions(prev => prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option]);
    } else {
      setSelectedOptions([option]);
    }
  };

  return (
    <div className="flex flex-col">
      <label className="mb-2 font-bold">{label}</label>
      <div className="mb-1">
        {options.map(option => (
          <div key={option} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={selectedOptions.includes(option)}
              onChange={() => handleChange(option)}
              className="mr-2"
            />
            <label>{option}</label>
          </div>
        ))}
      </div>
      <small className="text-gray-500">{miniLabel}</small>
    </div>
  );
};

export default CheckboxInputBox;
