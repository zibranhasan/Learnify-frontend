/* eslint-disable react/no-unescaped-entities */
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center relative h-screen bg-gray-900">
      {/* Background Line */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-full h-1/2 border-t-4 border-yellow-500 relative">
          <span className="block h-full w-4 bg-yellow-500 absolute left-1/2 transform-translate-x-1/2 -translate-y-1/2"></span>
        </div>
      </div>

      <div className="relative z-10 w-96 ml-3 bg-gray-800 p-8 rounded-xl shadow-xl flex flex-col items-center">
        {/* Logo */}
        <div className="bg-yellow-500 p-3 rounded-full mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v18m9-9H3"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-white text-2xl mb-2 font-semibold">
          Log in to Runway
        </h2>
        <p className="text-gray-400 mb-6 text-sm">
          Business planning, designed for humans.
        </p>

        {/* Social Login Buttons */}
        <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg flex items-center justify-between mb-4">
          <span>Continue with Google</span>
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-6 h-6"
          />
        </button>

        <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg flex items-center justify-between mb-4">
          <span>Continue with Microsoft</span>
          <img
            src="https://www.svgrepo.com/show/475638/microsoft-color.svg"
            alt="Microsoft"
            className="w-6 h-6"
          />
        </button>

        <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg flex items-center justify-between mb-4">
          <span>Continue with Rippling</span>
          <img
            src="https://www.svgrepo.com/show/354340/rippling.svg"
            alt="Rippling"
            className="w-6 h-6"
          />
        </button>

        <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg flex items-center justify-between mb-4">
          <span>Continue with Xero</span>
          <img
            src="https://www.svgrepo.com/show/354788/xero.svg"
            alt="Xero"
            className="w-6 h-6"
          />
        </button>

        {/* Disclaimer */}
        <p className="text-gray-500 text-xs text-center mt-6">
          By clicking "Continue" above, you acknowledge that you have read,
          understood, and agree to Runway's Terms of Service & Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default page;
