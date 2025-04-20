import React from 'react';
import Image from 'next/image';

const OurMission = () => {
  return (
    <section className="py-24 px-8 md:px-16 bg-white">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#9f193f]/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#28536B]/10 rounded-full blur-xl"></div>
              
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/mission-image.jpg" 
                  alt="Our Mission" 
                  width={600} 
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <h3 className="text-[#28536B] font-bold mb-2">Our Purpose</h3>
                <p className="text-gray-600 text-sm">
                  Empowering businesses with technology solutions that drive growth and innovation.
                </p>
              </div>
            </div>
            
            {/* Right side - Content */}
            <div>
              <span className="inline-block px-4 py-2 bg-[#9f193f]/10 text-[#9f193f] rounded-full text-sm font-semibold mb-6">
                Our Mission & Vision
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-[#28536B] mb-6">
                Driving Digital Transformation Through Innovative Solutions
              </h2>
              
              <p className="text-gray-600 mb-8">
                At TechNexus, we believe in the power of technology to transform businesses and enhance lives. Our mission is to deliver cutting-edge IT solutions that help organizations navigate the digital landscape, optimize operations, and achieve sustainable growth.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#9f193f] rounded-full p-2 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#28536B] mb-2">Innovation-Driven Approach</h3>
                    <p className="text-gray-600">
                      We continuously explore emerging technologies and methodologies to deliver forward-thinking solutions that give our clients a competitive edge.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#9f193f] rounded-full p-2 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#28536B] mb-2">Client Partnership</h3>
                    <p className="text-gray-600">
                      We believe in building lasting relationships with our clients, understanding their unique needs, and collaborating closely to achieve their goals.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#9f193f] rounded-full p-2 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#28536B] mb-2">Quality Excellence</h3>
                    <p className="text-gray-600">
                      We are committed to delivering solutions of the highest quality, adhering to industry best practices and standards at every stage of development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission; 