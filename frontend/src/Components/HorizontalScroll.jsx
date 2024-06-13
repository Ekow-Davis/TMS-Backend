import React from 'react'

const HorizontalScroll = ({ children}) => {
  return (
    <div className="flex overflow-x-auto space-x-4 p-4">
      {children}
    </div>
  )
}

export default HorizontalScroll