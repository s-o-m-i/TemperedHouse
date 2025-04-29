import React from 'react'
import { AboutWhyUsFeatures } from "../../utils/about-whyus"
const AboutServices = () => {
    return (
        <div>
            <section className="py-20 px-8 md:px-16 bg-white">
                <h2 className='text-[32px] sm:text-[42px] font-bold text-[#04213F]  text-center'>Why Choose Us?

                </h2>
                <div className="flex justify-center">
                    <p className='text-base text-gray-600 sm:w-[65%]  mt-5 text-center'>Take your businesses and organizations to another level by taking our development and design services by adding automatic and easy user experiences to your existing structures and new start-ups.
                    </p>
                </div>
                <div className="mt-20 grid grid-cols-3 gap-5">
                    {AboutWhyUsFeatures.map((card, index) => (
                        <div className=" bg-gray-50 p-4 linear border-l-2 shadow-sm hover:shadow-lg border-[#9F1940] transition-all duration-300 ease-in-out ">
                            <div className="question group">
                                <h4 className=''>01.</h4>
                                <h3 className='text-xl font-semibold'>{card.title}</h3>
                                <div className="answer mt-2 ">
                                    <p className='text-sm  text-gray-700 '>{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </section>
        </div>
    )
}

export default AboutServices
