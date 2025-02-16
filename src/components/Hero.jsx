import React from 'react';
import herologo from '/assets/avlogo.png';

const Hero = () => {
  
  return (
    <section className="min-h-screen flex justify-center items-center bg-gradient-to-r from-[#010030] to-[#7226ff59] px-0 pt-10 ">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-8 max-w-5xl">
        
        {/* Content Section */}
        <div className="text-white w-full md:w-2/3 text-center md:text-left">
          <h1 className="font-audiowide text-4xl md:text-6xl">ALPINE VERGE</h1>
          <p className="mt-4 text-lg">
            A community-driven, open-source, and transparent blockchain project focused on the 
            development and sustainability of eco-friendly agriculture.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img 
            src={herologo} 
            alt="Hero Logo" 
            className="max-w-full w-2/5 sm:w-3/5 md:w-1/2 lg:w-[400px] h-auto flex-shrink-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
