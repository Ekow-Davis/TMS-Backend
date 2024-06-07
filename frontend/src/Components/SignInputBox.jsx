import React from 'react'
import { useState, useEffect } from 'react';


const SignInputBox = ({ type, placeholder, width, validationRegex, errorMessage, value, setValue, confirmedValue, differentErrorMessage }) => {
        const [inputValue, setInputValue] = useState(value || '');
        const [isValid, setIsValid] = useState(true);
        const [confirmError, setConfirmError] = useState(false);
      
        useEffect(() => {
          // Check confirmation only if confirmedValue is provided and inputValue is not empty
          if (confirmedValue !== undefined && inputValue !== '') {
            setConfirmError(inputValue !== confirmedValue);
          } //if the confirmed value prop is undefined and if the input value is not empty
           else {
            setConfirmError(false); // Reset confirmError if input field is empty
          }
        }, [inputValue, confirmedValue]);
      
        // Handle changes in the input
        const handleChange = (e) => {
          const newValue = e.target.value;
          setInputValue(newValue);
          if (validationRegex) {
            validateInput(newValue);
          } //Validates the new input based on the requirements if validationRegex is provided
          if (setValue) {
            setValue(newValue); // Update the password state in the parent component
          }
        };
      
        const validateInput = (value) => {
          setIsValid(validationRegex.test(value));
        }; //Updates isValid state based on validation result
      
        const overallValidity = validationRegex ? (isValid && !confirmError) : !confirmError;
        const showError = inputValue !== '' && !overallValidity; // Show error only if input is not empty and overallValidity is false
      
        return (
          <div>
            <input 
              type={type}
              required
              value={inputValue}
              onChange={handleChange}
              placeholder={placeholder}
              className={` border-2 rounded-xl bg-white ${overallValidity ? ' placeholder:text-custom-blue placeholder:px-6 border-gray-400' : 'placeholder:text-red-500 border-red-400 bg-red-300 bg-opacity-20'} outline-none h-14 contain ${width}`}
            />
            {showError && <p className="text-red-300 text-xs">{confirmError ? differentErrorMessage : errorMessage}</p>}
          </div>
        )
    }

      

export default SignInputBox