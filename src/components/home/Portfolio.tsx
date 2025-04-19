"use client"
import React, { useState, useRef, useEffect } from 'react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sliderPosition, setSliderPosition] = useState({ left: 0, width: 0 });
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ui', name: 'UI/UX Design' },
    { id: 'other', name: 'Other Services' }
  ];
  
  // Set ref for button at index
  const setButtonRef = (el: HTMLButtonElement | null, index: number) => {
    buttonRefs.current[index] = el;
  };
  
  // Initialize slider position after mount
  useEffect(() => {
    const activeIndex = categories.findIndex(cat => cat.id === activeCategory);
    if (activeIndex !== -1 && buttonRefs.current[activeIndex]) {
      updateSliderPosition(activeIndex);
    }
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'A modern e-commerce platform with advanced product filtering and secure payment processing.'
    },
    {
      id: 2,
      title: 'Healthcare Management App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'A mobile application that helps healthcare providers manage patient records and appointments.'
    },
    {
      id: 3,
      title: 'Finance Dashboard Redesign',
      category: 'ui',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'A complete UI/UX redesign of a financial dashboard for improved user experience and data visualization.'
    },
    {
      id: 4,
      title: 'Inventory Management System',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'A comprehensive inventory management system with real-time tracking and reporting.'
    },
    {
      id: 5,
      title: 'Food Delivery Mobile App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'A feature-rich food delivery application with real-time order tracking and payment processing.'
    },
    {
      id: 6,
      title: 'AI-Powered Data Analytics',
      category: 'other',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'An advanced data analytics platform leveraging AI for business intelligence and predictive analytics.'
    }
  ];

  const updateSliderPosition = (index: number) => {
    const currentButton = buttonRefs.current[index];
    if (currentButton) {
      setSliderPosition({
        left: currentButton.offsetLeft,
        width: currentButton.offsetWidth
      });
    }
  };

  useEffect(() => {
    // Find the index of the active category
    const activeIndex = categories.findIndex(cat => cat.id === activeCategory);
    if (activeIndex !== -1) {
      updateSliderPosition(activeIndex);
    }
  }, [activeCategory]);

  // Update slider position on window resize
  useEffect(() => {
    const handleResize = () => {
      const activeIndex = categories.findIndex(cat => cat.id === activeCategory);
      if (activeIndex !== -1) {
        updateSliderPosition(activeIndex);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeCategory, categories]);

  const handleCategoryChange = (categoryId: string, index: number) => {
    setActiveCategory(categoryId);
    updateSliderPosition(index);
  };

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="bg-[#] py-20 px-8 md:px-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#28536B] mb-4">Our Latest Work</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Take a look at some of our recent projects. We pride ourselves on delivering
          high-quality solutions that exceed our clients&apos; expectations.
        </p>
      </div>

      {/* Category Filter Slider */}
      <div className="flex justify-center mb-16">
        <div className="relative bg-white rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2 max-w-3xl mx-auto">
          {/* The sliding background */}
          <div 
            className="absolute bg-[#9f193f] h-[85%] rounded-full transition-all duration-300 ease-in-out shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] z-10"
            style={{ 
              left: `${sliderPosition.left}px`, 
              width: `${sliderPosition.width}px`,
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          >
            <span className="absolute inset-0 bg-[#9f193f] rounded-full opacity-20 blur-sm"></span>
          </div>
          
          {/* The buttons */}
          <div className="flex flex-wrap justify-center relative z-20">
            {categories.map((category, index) => (
              <button
                key={category.id}
                ref={(el) => setButtonRef(el, index)}
                onClick={() => handleCategoryChange(category.id, index)}
                className={`px-6 py-1 rounded-full relative z-20 transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'text-white font-medium scale-105'
                    : 'text-[#28536B] hover:text-[#9f193f]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <div 
            key={project.id} 
            className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="relative overflow-hidden" style={{ height: '240px' }}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#28536B]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-200 text-sm">{project.description}</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#28536B] mb-2 group-hover:text-[#9f193f] transition-colors duration-300">{project.title}</h3>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm font-medium text-[#9f193f] px-3 py-1 bg-[#f2f2f2] rounded-full">
                  {categories.find(cat => cat.id === project.category)?.name}
                </span>
                <button className="text-[#28536B] hover:text-[#9f193f] transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-12">
        {/* <button className="px-8 py-3 bg-[#28536B] text-white rounded-full shadow-md hover:bg-[#9f193f] transition-colors duration-300 flex items-center gap-2 mx-auto btn-shimmer">
          <span>View All Projects</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button> */}

<a className="inline-flex justify-center gap-5 whitespace-nowrap  text-sm font-medium text-slate-200 dark:text-slate-800 bg-[#9f193f] dark:hover:bg-slate-100  focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms] px-8 py-3 rounded-lg btn-glass-morph shadow-[0_3px_10px_rgb(0,0,0,0.2)]" href="#0">View All Projects  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg></a>
      </div>
    </div>
  );
};

export default Portfolio; 