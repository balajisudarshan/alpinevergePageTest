import React from 'react';

const Courses = () => {
  return (
    <section className="bg-gradient-to-r from-[#010030] to-[#7226ff59] px-10 py-10">
      <h1 className="font-audiowide text-center text-3xl text-white mb-8">Our Courses</h1>

      <div className="flex justify-center">
        {/* Course Card */}
        <div className="bg-white p-5 rounded-lg shadow-lg w-80 flex flex-col items-center">
          {/* Thumbnail */}
          <div className="w-24 h-24">
            <img src="/assets/cpplogo.png" alt="C++ Logo" className="w-full h-full object-contain" />
          </div>

          {/* Content */}
          <div className="text-center mt-4">
            <h3 className="text-lg font-bold text-gray-800">C++ Programming</h3>
            <p className="text-gray-600 text-sm mt-2">Learn C++ from scratch with step-by-step tutorials.</p>
          </div>

          {/* Button */}
          <button className="mt-4 bg-[#7226ff] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#5b1ecc] transition">
            Start Learning
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
