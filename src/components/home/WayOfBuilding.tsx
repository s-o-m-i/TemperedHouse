// "use client"
import React from 'react';
import Image from 'next/image';

const WayOfBuilding = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-16 bg-[#]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 bg-[#9f193f]/10 text-[#9f193f] rounded-full text-sm font-medium mb-4">Way of building</span>
          {/* <p className="text-[#9f193f] font-medium mb-2">Way of building</p> */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#28536B] mb-4">Great Software</h2>
        </div>

        {/* First Card - Top Row */}
        <div className="border border-[#e0e0e0] rounded-xl bg-white p-6 mb-16 relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-5 h-5 rounded-full bg-[#FFCF56] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/4 right-0 w-5 h-5 rounded-full bg-[#9f193f] translate-x-1/2"></div>
          <div className="absolute bottom-1/3 left-0 w-5 h-5 rounded-full bg-[#28536B] -translate-x-1/2"></div>
          <div className="absolute bottom-0 right-1/4 w-5 h-5 rounded-full bg-[#FFCF56] translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Side - Content */}
            <div>
              <h3 className="text-xl font-bold text-[#28536B] mb-4">Build the right team to scale</h3>
              <p className="text-gray-700 mb-4 text-base">
                Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term that helps you grow.
              </p>
              <p className="text-[#9f193f] font-medium mb-6">
                Our delivery model helps you cut costs and deliver within budget.
              </p>

              {/* Testimonial */}
              <div className="bg-[#f8f8f8] p-4 border-l-4 border-[#9f193f] mt-6">
                <p className="text-gray-700 italic text-sm">
                  &ldquo;Teamwork is key to identify larger problems with no individual is equipped to handle on their own.&rdquo;
                </p>
                
                {/* User Info */}
                <div className="flex items-center mt-4">
                  <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-300 mr-3">
                    <Image 
                      src="/images/wayofprocessOne.png" 
                      alt="James Tolkien" 
                      width={32} 
                      height={32} 
                      className="h-full w-full object-cover"
                    //   onError={(e) => {
                    //     const target = e.target as HTMLImageElement;
                    //     target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23cccccc'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='12' text-anchor='middle' dominant-baseline='middle' fill='%23666666'%3EJT%3C/text%3E%3C/svg%3E";
                    //   }}
                    />
                  </div>
                  <p className="text-xs text-gray-500">James Tolkien</p>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <Image 
                src="/images/wayofprocessOne.png" 
                alt="Team collaborating" 
                width={600} 
                height={400} 
                className="rounded-lg object-cover w-full h-full"
                // onError={(e) => {
                //   const target = e.target as HTMLImageElement;
                //   target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f2f2f2'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' text-anchor='middle' dominant-baseline='middle' fill='%23666666'%3ETeam Working Image%3C/text%3E%3C/svg%3E";
                // }}
              />
            </div>
          </div>
        </div>

        {/* Second Card - Bottom Row */}
        <div className="border border-[#e0e0e0] rounded-xl bg-white p-6 mb-10 relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-5 h-5 rounded-full bg-[#9f193f] translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/4 left-0 w-5 h-5 rounded-full bg-[#FFCF56] -translate-x-1/2"></div>
          <div className="absolute bottom-1/3 right-0 w-5 h-5 rounded-full bg-[#28536B] translate-x-1/2"></div>
          <div className="absolute bottom-0 left-1/4 w-5 h-5 rounded-full bg-[#9f193f] translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Side - Image (For desktop) - Hidden on mobile */}
            <div className="hidden md:block relative">
              <Image 
                src="/images/waytoprocess2.png" 
                alt="Team meeting" 
                width={600} 
                height={400} 
                className="rounded-lg object-cover w-full h-full"
              
              />
            </div>

            {/* Right Side - Content */}
            <div>
              <h3 className="text-xl font-bold text-[#28536B] mb-4">Process-Driven Delivery for Predictable Results</h3>
              <p className="text-gray-700 mb-4">
              Success isn't just about code — it's about process. Our Agile-driven workflows and iterative feedback cycles keep your project on track, on time, and on budget.
              </p>
              <p className="text-[#9f193f] font-medium mb-6">
              We prioritize transparency, collaboration, and proactive communication — so you always know where your project stands.
              </p>

              {/* Testimonial */}
              <div className="bg-[#f8f8f8] p-4 border-l-4 border-[#9f193f] mt-6">
                <p className="text-gray-700 italic text-sm">
                  &ldquo;Software is a great combination of artistry and engineering. Without these systems modern society cannot run.&rdquo;
                </p>
                
                {/* User Info */}
                <div className="flex items-center mt-4">
                  <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-300 mr-3">
                    <Image 
                     src="/images/waytoprocess2.png"
                      alt="Jessica Harkins" 
                      width={32} 
                      height={32} 
                      className="h-full w-full object-cover"
                    //   onError={(e) => {
                    //     const target = e.target as HTMLImageElement;
                    //     target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23cccccc'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='12' text-anchor='middle' dominant-baseline='middle' fill='%23666666'%3EJH%3C/text%3E%3C/svg%3E";
                    //   }}
                    />
                  </div>
                  <p className="text-xs text-gray-500">Jessica Harkins</p>
                </div>
              </div>
            </div>

            {/* Left Side - Image (For mobile) - Visible only on mobile */}
            <div className="md:hidden relative mt-4">
              <Image 
                src="/images/wayofprocess3" 
                alt="Team meeting" 
                width={600} 
                height={400} 
                className="rounded-lg object-cover w-full h-full"
                // onError={(e) => {
                //   const target = e.target as HTMLImageElement;
                //   target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f2f2f2'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' text-anchor='middle' dominant-baseline='middle' fill='%23666666'%3ETeam Meeting Image%3C/text%3E%3C/svg%3E";
                // }}
              />
            </div>
          </div>
        </div>

        {/* Third Card (Bottom) */}
        <div className="border border-[#e0e0e0] rounded-xl bg-white p-6 relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-5 h-5 rounded-full bg-[#28536B] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/4 right-0 w-5 h-5 rounded-full bg-[#FFCF56] translate-x-1/2"></div>
          <div className="absolute bottom-1/3 left-0 w-5 h-5 rounded-full bg-[#9f193f] -translate-x-1/2"></div>
          <div className="absolute bottom-0 right-1/4 w-5 h-5 rounded-full bg-[#28536B] translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Side - Content */}
            <div>
              <h3 className="text-xl font-bold text-[#28536B] mb-4">Technology-Driven Innovation</h3>
              <p className="text-gray-700 mb-4">
                We stay at the forefront of technology trends to deliver innovative solutions. Our expertise spans modern frameworks, cloud architecture, and emerging technologies that give your business a competitive edge.
              </p>
              <p className="text-[#9f193f] font-medium mb-6">
                Our technical excellence ensures your software remains scalable, secure, and future-proof.
              </p>

              {/* Testimonial */}
              <div className="bg-[#f8f8f8] p-4 border-l-4 border-[#9f193f] mt-6">
                <p className="text-gray-700 italic text-sm">
                  &ldquo;Great teams don&apos;t hold back with one another. They are unafraid to air their dirty laundry, admit their mistakes and weaknesses.&rdquo;
                </p>
                
                {/* User Info */}
                <div className="flex items-center mt-4">
                  <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-300 mr-3">
                    <Image 
                     src="/images/wayofprocess3.png"
                      alt="Marcus Thompson" 
                      width={32} 
                      height={32} 
                      className="h-full w-full object-cover"
                    //   onError={(e) => {
                    //     const target = e.target as HTMLImageElement;
                    //     target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23cccccc'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='12' text-anchor='middle' dominant-baseline='middle' fill='%23666666'%3EMT%3C/text%3E%3C/svg%3E";
                    //   }}
                    />
                  </div>
                  <p className="text-xs text-gray-500">Marcus Thompson</p>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <Image 
               src="/images/wayofprocess3.png"
                alt="Team planning" 
                width={600} 
                height={400} 
                className="rounded-lg object-cover w-full h-full"
                // onError={(e) => {
                //   const target = e.target as HTMLImageElement;
                //   target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f2f2f2'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' text-anchor='middle' dominant-baseline='middle' fill='%23666666'%3ETeam Planning Image%3C/text%3E%3C/svg%3E";
                // }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WayOfBuilding;
