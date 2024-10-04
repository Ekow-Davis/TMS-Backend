// src/components/FeatureBox.js
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const FeatureBox = ({ imageSrc, altText, heading, listItems, imagePosition }) => {
  const imageAlignment = imagePosition === 'left' ? 'order-1' : 'order-2';
  const textAlignment = imagePosition === 'left' ? 'order-2 ml-8' : 'order-1 mr-8';

  return (
    <div className="flex flex-col md:flex-row items-center mb-12">
      <img 
        src={imageSrc} 
        alt={altText} 
        className={`w-full md:w-1/2 h-auto object-cover rounded-lg shadow-lg ${imageAlignment}`} 
      />
      <div className={`flex-1 p-6 ${textAlignment}`}>
        <h3 className="text-3xl font-bold mb-4 text-custom-heading">{heading}</h3>
        <ul className="list-none space-y-2">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-center text-lg text-gray-600">
              <CheckCircleIcon className="w-6 h-6 text-custom-blue mr-2" />
              {item}
            </li>
          ))}
        </ul>
        <Link to="/SignIn">
          <button className="block bg-custom-purple text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-custom-blue mt-6 mx-auto">
            Start Your Free Trial
          </button>
        </Link>
      </div>
    </div>
  );
};

FeatureBox.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  imagePosition: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default FeatureBox;
