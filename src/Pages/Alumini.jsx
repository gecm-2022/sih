import React from "react";
import { NavLink } from "react-router-dom";

const Alumini = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      {/* Welcome Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">Welcome, Alumni!</h1>
        <p className="text-lg text-gray-600 mt-4">
          Stay connected, celebrate our community, and get involved in upcoming
          events and initiatives.
        </p>
      </div>

      {/* Achievements Section */}
      <div className="bg-white p-6 shadow-lg rounded-md max-w-3xl mx-auto mb-8">
        <h2 className="text-2xl font-semibold mb-4">Alumni Achievements</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Mr. Prashant Bhavsar - Associate Consultant (DT-CDIR) @KPMG.</li>
          <li>Mr. Zeel Rajkumar Pathak - Software Engineer – AWS Developer</li>
          <li>
            Rohit Bhadani- Chief Development Officer at Full-Stack Developer
          </li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <p className="text-xl font-semibold text-gray-800">Get Involved</p>
        <NavLink to={"/NewsandEvents"} className={"removeLinkHover"}>
          <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600">
            Join Our Next Event
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Alumini;
