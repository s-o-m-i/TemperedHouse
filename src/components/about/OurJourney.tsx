import React from 'react';

const OurJourney = () => {
  const milestones = [
    {
      year: "2011",
      title: "The Beginning",
      description: "TechNexus was founded with a vision to help businesses leverage technology for growth. Started with a small team of 5 passionate developers."
    },
    {
      year: "2014",
      title: "Expansion Phase",
      description: "Expanded our team to 15 members and opened our first official office. Began offering a comprehensive range of IT services."
    },
    {
      year: "2016",
      title: "International Recognition",
      description: "Received our first international client and recognition for innovative web solutions. Expanded service offerings to include mobile app development."
    },
    {
      year: "2018",
      title: "Technology Partnership",
      description: "Formed strategic partnerships with leading technology providers to enhance our service capabilities and deliver cutting-edge solutions."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Pivoted to help businesses adapt to remote work environments with cloud solutions and digital workplace tools during the global pandemic."
    },
    {
      year: "2023",
      title: "Growth & Innovation",
      description: "Expanded to a team of 35+ professionals across multiple specialties. Opened a new innovation lab focused on AI, blockchain, and emerging technologies."
    }
  ];

  return (
    <section className="py-24 px-8 md:px-16 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#9f193f]/10 text-[#9f193f] rounded-full text-sm font-semibold mb-6">
            Our Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#28536B] mb-6">
            Milestones That Shaped Us
          </h2>
          <p className="text-gray-600 md:text-lg">
            The story of TechNexus is one of continuous growth, innovation, and adaptation. Here are some key milestones from our journey.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-[#28536B] to-[#9f193f] h-full rounded-full"></div>
          
          {/* Timeline events */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Year bubble */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-[#9f193f] rounded-full flex items-center justify-center z-10">
                  <span className="text-sm font-bold text-[#28536B]">{milestone.year}</span>
                </div>
                
                {/* Content box */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-16 md:pl-0`}>
                  <div className="bg-[#f8f8f8] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-[#9f193f] mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* End circle */}
          <div className="absolute bottom-0 left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#9f193f] rounded-full"></div>
        </div>
        
        {/* Future Vision */}
        <div className="max-w-3xl mx-auto mt-24 text-center">
          <h3 className="text-2xl font-bold text-[#28536B] mb-4">Looking to the Future</h3>
          <p className="text-gray-600">
            As we continue our journey, we remain committed to pushing the boundaries of innovation, helping businesses navigate digital transformation, and creating technology solutions that make a meaningful impact. The future is bright, and we're excited to see what comes next.
          </p>
          
          <div className="mt-10">
            <a 
              href="/contact" 
              className="inline-block bg-[#9f193f] text-white px-8 py-3 rounded-full font-medium hover:bg-[#7E1C32] transition-colors duration-300"
            >
              Be Part of Our Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney; 