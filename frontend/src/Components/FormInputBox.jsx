import React, { useState, useEffect } from 'react';

const FormInputBox = ({ width, validationRegex, type, miniLabel, label, placeholder, value, setValue, required }) => {
  const [localInputValue, setLocalInputValue] = useState(value || '');
  const [isValid, setIsValid] = useState(true);
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    setLocalInputValue(value);
  }, [value]);

  const validateInput = (inputValue) => {
    if (validationRegex instanceof RegExp) {
      return validationRegex.test(inputValue);
    }
    return true;
  };

  const handleChange = (e) => {
    const newInputValue = e.target.value;
    setLocalInputValue(newInputValue);
    setIsValid(validateInput(newInputValue));
    setValue(newInputValue);
  };

  const handleBlur = () => {
    setIsTouched(true);
    setIsValid(validateInput(localInputValue) && (!required || localInputValue.trim() !== ''));
  };

  const showError = isTouched && (!isValid || (required && localInputValue.trim() === ''));

  return (
    <div className={`flex flex-col ${width}`}>
      <label className="mb-2 font-bold">{label}</label>
      <input
        type={type}
        value={localInputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={`border p-2 mb-1 ${showError ? 'border-red-500' : ''}`}
      />
      <small className="text-gray-500">{miniLabel}</small>
      {showError && <p className="text-red-500 text-sm mt-1">Invalid input</p>}
    </div>
  );
};

export default FormInputBox;
