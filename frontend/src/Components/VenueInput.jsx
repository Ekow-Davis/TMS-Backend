import React, { useState, useEffect } from 'react';

const RadioInputBox = ({ options, selectedOption = '', setSelectedOption, miniLabel, label }) => {
  const [localSelectedOption, setLocalSelectedOption] = useState(selectedOption);

  // Handle radio selection change
  const handleChange = (option) => {
    setLocalSelectedOption(option);
  };

  // Update parent component whenever selection changes
  useEffect(() => {
    setSelectedOption(localSelectedOption);
  }, [localSelectedOption, setSelectedOption]);

  return (
    <div className="flex flex-col">
      <label className="mb-2 font-bold">{label}</label>
      <div className="mb-1">
        {options.map((option) => (
          <div key={option} className="flex items-center mb-2">
            <input
              type="radio"
              name="modeOfTeaching"
              checked={localSelectedOption === option}
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

export default RadioInputBox;
