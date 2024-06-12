import React, { useState, useEffect } from 'react';

const CheckboxInputBox = ({ options, selectionType, setSelectedOptions, miniLabel, label }) => {
  const [selectedOptions, setLocalSelectedOptions] = useState([]);
  

  const handleChange = (option) => {

    if (selectionType === 'multiple') {
      setLocalSelectedOptions(prev => prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option]);
    } else {
      setLocalSelectedOptions([option]);
    }
  };

  useEffect(() => {
    setSelectedOptions(selectedOptions);
  }, [selectedOptions, setSelectedOptions]);

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
