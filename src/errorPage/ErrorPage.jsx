import React from "react";
import { FiFrown } from "react-icons/fi";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500">
        <FiFrown className="inline-block m-5" />
        Oops!
      </h1>
      <h2 className="text-2xl font-semibold text-gray-700">Something went wrong!!...</h2>
      <Link to='/'>
      <button className="mt-8 px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 transition-colors duration-300">
        Go Back
      </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
