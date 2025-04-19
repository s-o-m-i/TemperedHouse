"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// We've installed @types/react-slick so we no longer need the module declaration

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechInnovate",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "Working with this team has been transformative for our business. They delivered a custom solution that not only met but exceeded our expectations. Their attention to detail and technical expertise is unmatched.",
      rating: 5,
      company: "TechInnovate",
      logo: "/images/company-logo1.png" // Add actual company logos if available
    },
    {
      id: 2,
      name: "David Chen",
      position: "Marketing Director, GlobalRetail",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "The e-commerce platform they developed for us has significantly increased our conversion rates and enhanced the user experience. Their team was professional, responsive, and genuinely invested in our success.",
      rating: 5,
      company: "GlobalRetail",
      logo: "/images/company-logo2.png"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "CTO, HealthTech Solutions",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "Their expertise in healthcare technology was evident from our first meeting. They developed a secure, compliant solution that has streamlined our operations and improved patient care. I highly recommend their services.",
      rating: 5,
      company: "HealthTech",
      logo: "/images/company-logo3.png"
    },
    {
      id: 4,
      name: "Michael Thompson",
      position: "Founder, FinanceHub",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "The custom financial dashboard they created has given us unprecedented insights into our business performance. Their team&apos;s ability to translate complex requirements into an intuitive interface was impressive.",
      rating: 5,
      company: "FinanceHub",
      logo: "/images/company-logo4.png"
    },
  ];

  // Stats to show credibility
  const stats = [
    { value: "98%", label: "Client Satisfaction" },
    { value: "150+", label: "Projects Completed" },
    { value: "12+", label: "Years Experience" },
    { value: "35+", label: "Team Members" }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    beforeChange: (current: number, next: number) => setActiveSlide(next),
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)"
  };

  // Function to handle manual slide navigation
  const goToSlide = (index: number) => {
    // Using document.querySelector with proper type safety
    const sliderElement = document.querySelector('.slick-slider');
    
    // We need to handle this with a type assertion since the Slider API isn't fully typed
    if (sliderElement) {
      // Need to cast to any since the slick API is not fully typed in the type definitions
      const slickInstance = (sliderElement as { slick?: { slickGoTo: (slideIndex: number) => void } });
      if (slickInstance.slick?.slickGoTo) {
        slickInstance.slick.slickGoTo(index);
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-[#f8f8f8] py-24 px-8 md:px-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <svg width="600" height="600" viewBox="0 0 100 100">
          <path fill="#9f193f" d="M11,-19.3C14.4,-17.6,17.3,-14.8,19.5,-11.4C21.7,-8,23.1,-4,23.6,0.5C24.1,5,23.7,10,21.5,14.3C19.3,18.6,15.3,22.3,10.5,23.6C5.7,24.9,0.1,23.8,-5.3,22.2C-10.7,20.6,-15.9,18.5,-19.2,14.9C-22.4,11.3,-23.6,6.1,-23.9,0.9C-24.2,-4.3,-23.7,-8.6,-21.7,-12.2C-19.7,-15.8,-16.1,-18.8,-12.2,-20.4C-8.3,-22,-4.1,-22.3,-0.1,-22.1C3.9,-22,7.7,-21.1,11,-19.3Z" transform="translate(50 50)" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-10">
        <svg width="600" height="600" viewBox="0 0 100 100">
          <path fill="#28536B" d="M11,-19.3C14.4,-17.6,17.3,-14.8,19.5,-11.4C21.7,-8,23.1,-4,23.6,0.5C24.1,5,23.7,10,21.5,14.3C19.3,18.6,15.3,22.3,10.5,23.6C5.7,24.9,0.1,23.8,-5.3,22.2C-10.7,20.6,-15.9,18.5,-19.2,14.9C-22.4,11.3,-23.6,6.1,-23.9,0.9C-24.2,-4.3,-23.7,-8.6,-21.7,-12.2C-19.7,-15.8,-16.1,-18.8,-12.2,-20.4C-8.3,-22,-4.1,-22.3,-0.1,-22.1C3.9,-22,7.7,-21.1,11,-19.3Z" transform="translate(50 50)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 relative">
          <span className="inline-block px-3 py-1 bg-[#9f193f]/10 text-[#9f193f] rounded-full text-sm font-medium mb-4">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#28536B] mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Don&apos;t just take our word for it. Here&apos;s what some of our valued clients have to say about their experience working with us.
          </p>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12 bg-white rounded-xl shadow-lg py-5 px-2">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-2">
                <div className="text-[#9f193f] font-bold text-3xl">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="max-w-4xl mx-auto mb-16">
            <Slider {...settings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="outline-none">
                  <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1)] relative mx-4 md:mx-0">
                    {/* Quote icon */}
                    <div className="absolute -top-6 left-8 bg-[#9f193f] rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                      </svg>
                    </div>
                    
                    {/* Testimonial content */}
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/3 flex flex-col items-center justify-center">
                        <div className="relative mb-6 w-24 h-24 rounded-full overflow-hidden border-4 border-[#f2f2f2] shadow-md">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="text-lg font-bold text-[#28536B] text-center">{testimonial.name}</h4>
                        <p className="text-[#9f193f] text-sm text-center">{testimonial.position}</p>
                        <div className="flex mt-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      
                      <div className="md:w-2/3">
                        <p className="text-lg text-gray-700 mb-4 relative italic">
                          {testimonial.quote}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          
          {/* Custom indicators */}
          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSlide === index 
                    ? 'bg-[#9f193f] w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
