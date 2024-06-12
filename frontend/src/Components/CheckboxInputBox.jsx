import React, { useState, useEffect } from 'react';

const CheckboxInputBox = ({ options, selectedOptions = [], selectionType, setSelectedOptions, miniLabel, label }) => {
  const [localSelectedOptions, setLocalSelectedOptions] = useState(selectedOptions || []);
  

  const handleChange = (option) => {

    if (selectionType === 'multiple') {
      setLocalSelectedOptions(prev => 
        prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option]);
    } else {
      setLocalSelectedOptions([option]);
    }
  };

  useEffect(() => {
    setSelectedOptions(localSelectedOptions);
  }, [localSelectedOptions, setSelectedOptions]);

  

  return (
    <div className="flex flex-col">
      <label className="mb-2 font-bold">{label}</label>
      <div className="mb-1">
        {options.map(option => (
          <div key={option} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={localSelectedOptions.includes(option)}
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
