import React, { useState } from 'react';

const MatchInput = ({ label, options, onDataChange }) => {
  const [selectedDays, setSelectedDays] = useState(
    options.reduce((acc, day) => {
      acc[day] = { checked: false, time: '' };
      return acc;
    }, {})
  );

  // Handle checkbox toggle
  const handleCheckboxChange = (day) => {
    setSelectedDays((prevState) => ({
      ...prevState,
      [day]: {
        ...prevState[day],
        checked: !prevState[day].checked,
      },
    }));
  };

  // Handle time change
  const handleTimeChange = (day, time) => {
    setSelectedDays((prevState) => ({
      ...prevState,
      [day]: {
        ...prevState[day],
        time,
      },
    }));

    // Pass data back to parent
    onDataChange(
      Object.keys(selectedDays).reduce((acc, currentDay) => {
        if (selectedDays[currentDay].checked) {
          acc[currentDay] = selectedDays[currentDay].time;
        }
        return acc;
      }, {})
    );
  };

  return (
    <div className="space-y-4">
      <label className="text-lg font-semibold">{label}</label>
      {options.map((day) => (
        <div key={day} className="flex items-center space-x-4">
          {/* Circular Checkbox */}
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={selectedDays[day].checked}
              onChange={() => handleCheckboxChange(day)}
              className="hidden"
            />
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                selectedDays[day].checked ? 'border-custom-blue' : 'border-gray-400'
              }`}
            >
              {selectedDays[day].checked && (
                <div className="w-3 h-3 bg-custom-blue rounded-full"></div>
              )}
            </div>
            <span className="ml-2">{day}</span>
          </label>

          {/* Time Input */}
          {selectedDays[day].checked && (
            <input
              type="time"
              className={`border p-2 rounded w-32`}
              value={selectedDays[day].time}
              required={selectedDays[day].checked}
              onChange={(e) => handleTimeChange(day, e.target.value)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default MatchInput;
