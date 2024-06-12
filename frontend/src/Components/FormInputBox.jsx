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



{/*
  import React, { useState, useEffect } from 'react';

const FormInputBox = ({ width, validationRegex, type, miniLabel, label, placeholder, value, setValue }) => {
  const [localInputValue, setLocalInputValue] = useState(value);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setLocalInputValue(value);
  }, [value]);

  const validateInput = (inputValue) => {
    if (validationRegex) {
      return validationRegex.test(inputValue);
    }
    return true;
  };

  const handleChange = (e) => {
    const newInputValue = e.target.value;
    setLocalInputValue(newInputValue);
    const valid = validateInput(newInputValue);
    setIsValid(valid);
    if (valid) {
      setValue(newInputValue);
    }
  };

{/*
const FormInputBox = ({ width, validationRegex, type, miniLabel, label, placeholder, setValue }) => {
  const [inputValue, setInputValue] = useState('');
  

  useEffect(() => {
    if (setValue) {
      setValue(inputValue); // Ensure the parent state is updated when the inputValue changes
    }
  }, [inputValue, setValue]);

  const handleChange = (e) => {
    const newInputValue = e.target.value;
    setInputValue(newInputValue);
  };

  const validateInput = (inputValue) => {
    if (validationRegex) {
      return validationRegex.test(inputValue);
    }
    return true;
  };
*/}

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
  };

  return (
    <div className={`flex flex-col ${width}`}>
      <label className="mb-2 font-bold">{label}</label>
      <input
        type={type}
        value={localInputValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={`border p-2 mb-1 ${isValid ? 'border-gray-300' : 'border-red-500'}`}
      />
      <small className="text-gray-500">{miniLabel}</small>
      {!isValid && <p className="text-red-500 text-sm mt-1">Invalid input</p>}
    </div>
  );
};

export default FormInputBox;
*/}
