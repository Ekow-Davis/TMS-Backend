import React, { useState } from 'react';

const FormInputBox = ({ width, type, miniLabel, label }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={`flex flex-col ${width}`}>
      <label className="mb-2 font-bold">{label}</label>
      <input
        type={type}
        value={inputValue}
        onChange={handleChange}
        className="border p-2 mb-1"
      />
      <small className="text-gray-500">{miniLabel}</small>
    </div>
  );
};

export default FormInputBox;
