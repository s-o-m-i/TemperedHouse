import React from 'react';

const AboutHero = () => {
  return (
    <div className="bg-[#28536B] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-[#9f193f] rounded-bl-[100%]"></div>
        <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-[#9f193f] rounded-tr-[100%]"></div>
      </div>
      
      <div className="container mx-auto px-8 md:px-16 py-32 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
            About TechNexus
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Transforming Businesses Through Technology
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl">
            We're a team of passionate developers, designers, and digital strategists committed to helping businesses thrive in the digital landscape.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-10">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3">
              <div className="text-3xl font-bold text-white mr-2">12+</div>
              <div className="text-white/80">Years of Experience</div>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3">
              <div className="text-3xl font-bold text-white mr-2">150+</div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3">
              <div className="text-3xl font-bold text-white mr-2">35+</div>
              <div className="text-white/80">Team Members</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero; 