import React, { useState, useEffect } from 'react';

const FormInputBox = ({ 
  width, 
  validationRegex, 
  type, 
  miniLabel, 
  placeholder, 
  value, 
  setValue, 
  required 
}) => {
  const [localInputValue, setLocalInputValue] = useState(value || '');
  const [isValid, setIsValid] = useState(true);
  const [isTouched, setIsTouched] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

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
    setIsFocused(false);
    setIsValid(validateInput(localInputValue) && (!required || localInputValue.trim() !== ''));
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const showError = isTouched && (!isValid || (required && localInputValue.trim() === ''));

  return (
    <div className={`relative flex flex-col ${width} `}>
      {/* Input Field */}
      <div className={`relative`}>
        <input
          type={type}
          value={localInputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholder={placeholder}
          className={`border rounded-lg outline-none p-2 mb-1 w-full transition-all duration-300 ${showError ? 'border-red-500' : isFocused ? 'border-custom-purple border-2' : 'border-gray-300'}`}
        />

        {/* Floating label (Placeholder) */}
        {(isFocused || localInputValue) && (
          <label className="absolute left-3 -top-2 bg-white rounded-md px-1 text-xs text-custom-teal">
            {placeholder}
          </label>
        )}
      </div>

      {/* Mini label */}
      <small className="text-gray-500">{miniLabel}</small>

      {/* Error Message */}
      {showError && <p className="text-red-500 text-sm ">Invalid input</p>}
    </div>
  );
};

export default FormInputBox;
