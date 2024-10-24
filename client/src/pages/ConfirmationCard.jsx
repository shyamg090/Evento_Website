import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmationCard = ({ message }) => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm text-center">
        <div className="text-red-600 text-[2rem] font-semibold mb-4">
          Event Added Successfully!
        </div>
        <h1 className="text-black text-lg font-medium">{message}</h1>

        <div className="mt-6">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
          >
            <Link to={'/events'}>  View Events </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationCard;
