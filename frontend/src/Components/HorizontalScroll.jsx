import React from 'react';
import PropTypes from 'prop-types';

const HorizontalScroller = ({ width, children }) => {
  return (
    <div className={`overflow-hidden`} style={{ width }}>
      <div className="flex overflow-x-auto whitespace-nowrap space-x-4 p-4">
        {children}
      </div>
    </div>
  );
};

HorizontalScroller.propTypes = {
  width: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default HorizontalScroller;
