import React from 'react'

const ProgressBar = ({  progress }) => (    
    <div className="relative h-2 bg-gray-300 rounded-full mt-2">
      <div className="absolute top-0 left-0 h-2 bg-blue-600 rounded-full" style={{ width: `${progress}%` }}></div>
    </div>  
);

export default ProgressBar