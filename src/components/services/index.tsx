"use client"
import Button from '@/ui/Button/Button'
import PrimaryButton from '@/ui/PrimaryButton/PrimaryButton'
import SecondaryButtonTwo from '@/ui/SecondaryButtonTwo/SecondaryButtonTwo'
import React from 'react'
import services from "../../utils/services-data.js"
import Lottie from "lottie-react";
import servicesLottie from "../../utils/services.json";
import CTA from '../home/CTA.jsx'
import CallToAction from '@/components/home/CallToAction';
const Services = () => {
  return (
    <div>
      <section className="py-20 px-8 md:px-16 bg-pattern h-screen grid grid-cols-2 gap-8">
        <div className="flex flex-col justify-center ">
          <h1 className="text-[32px] font-medium sm:text-[42px]  leading-[1.1]  text-[#fff] mb-6">Our Comprehensive <span> Digital  Solutions</span></h1>
          <p className=" text-[#fff] max-w-2xl text-base text-start">
            At Nexus, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. With a team of skilled professionals, cutting-edge technologies, and a passion for innovation, we are committed to delivering exceptional results for every project we undertake. From captivating web design that leaves a lasting impression to seamless web development that ensures optimal functionality, we cover every aspect of your online presence.
          </p>
        </div>
        <div className="flex items-center justify-center">
        <Lottie style={{color:"white" }} animationData={servicesLottie} loop={true} /> 
        </div>
      </section>
      <div className="py-20 px-8 md:px-16">
        <h2 className='text-[#28536B] text-[32px] font-medium sm:text-[42px] text-center'>Our <span>Services</span></h2>
        <div className="flex justify-center">
          <p className="text-[16px] text-gray-700  sm:w-[75%]  mt-5 text-center">
            At Nexus, we are committed to providing exceptional digital solutions tailored to suit your unique business needs. Our comprehensive service offerings cover a wide spectrum of digital disciplines, including web design, app development, web development, and marketing.         </p>
        </div>
        <div className="services mt-20">
          <div className="grid grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card w-full p-8 rounded-lg bg-gray-50 shadow-sm sm:shadow-md">
                <div className="flex justify-center">
                  <div className="icon-box bg-[#9F193F] mb-5 w-[80px] h-[80px] flex items-center justify-center rounded-full">
                    {service.icon}
                  </div>
                </div>
                <h3 className='text-center text-2xl'>{service.service}</h3>
                <p className="text-[16px] text-gray-700   mt-5 text-center">
                  {service.desc
                  }              </p>
                <div className="flex items-center justify-between mt-8">
                  <div className="">
                    <h4 className='text-gray-700'>Starts at Price: <span className='font-bold'>{service.startingPrice}</span></h4>
                  </div>
                  <Button text={"Explore"} />
                </div>
                <div className="bg-[#9F193F] p-4 hover:bg-[#7E1C32] rounded-lg mt-5 text-center cursor-pointer">
                  <h3 className='text-white'>Book a call</h3>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
      <CallToAction/>

    </div>
  )
}

export default Services







