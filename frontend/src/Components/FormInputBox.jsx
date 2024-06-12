import React, { useState, useEffect } from 'react';

const FormInputBox = ({ width, validationRegex, type, miniLabel, label, placeholder, setValue }) => {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (setValue) {
      setValue(inputValue); // Ensure the parent state is updated when the inputValue changes
    }
  }, [inputValue, setValue]);

  const handleChange = (e) => {
    const newInputValue = e.target.value;
    setInputValue(newInputValue);
  };

  {/*const validateInput = (inputValue) => {
    setIsValid(validationRegex.test(inputValue));
  }; 

  const handleChange = (e) => {
    const newInputValue = e.target.value;
    setInputValue(newInputValue);
    if (validationRegex) {
      validateInput(newInputValue);
    } //Validates the new input based on the requirements if validationRegex is provided
    if (setInputValue) {
      setInputValue(newInputValue); // Update the state in the parent component
    }
  };*/}

  return (
    <div className={`flex flex-col ${width}`}>
      <label className="mb-2 font-bold">{label}</label>
      <input
        type={type}
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        className="border p-2 mb-1"
      />
      <small className="text-gray-500">{miniLabel}</small>
      {!isValid && <p className="text-red-500 text-sm mt-1">Invalid input</p>}
    </div>
  );
};

export default FormInputBox;
