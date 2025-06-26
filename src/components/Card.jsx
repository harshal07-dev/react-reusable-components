import React from "react";

const Card = ({ username = "Margret", role = "not-assigned" }) => {
  return (
    <>
      <div className="max-w-sm mx-auto bg-gray-500 shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col items-center p-6">
          <img
            className="w-34 h-34 rounded-full border-4 border-teal-400 object-cover"
            src="https://images.pexels.com/photos/1029572/pexels-photo-1029572.jpeg"
            alt="Profile"
          />
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
            {username}
          </h2>
          <p className="text-red-400 font-medium text-md">{role}</p>
          <p className="mt-2 text-gray-100 text-center text-sm">
            Passionate about crafting responsive and accessible web interfaces
            with love.
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
