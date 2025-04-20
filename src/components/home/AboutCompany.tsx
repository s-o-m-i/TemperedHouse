import React from 'react'
import { AboutCompanyData } from "../../utils/about-company"

const AboutCompany = () => {
    return (
        <div>
            <section className="py-20 px-8 md:px-16 bg-white">
                <h2 className='text-[32px] sm:text-[42px] font-bold text-[#04213F]  text-center'>About Company</h2>
                 {/* <div className="w-24 h-1 mt-6 bg-[#9f193f] mx-auto mb-6"></div> */}
                <p className='text-base text-gray-600  mt-5 text-center'>At LLC, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.</p>
                <div className="list pt-[80px]">
                    <div className="grid grid-cols-2 gap-5 ">
                    {AboutCompanyData.map((data, index) => {
                        return (
                            <div key={index} className="card bg-gray-50 p-8  rounded-tl-4xl rounded-tr-md rounded-bl-md rounded-br-4xl shadow-sm hover:shadow-md transition-shadow border-[#9F1940] border-l-4">
                                <h3 className='text-[20px]  text-[#28536B]'>{data.title}</h3>
                                <p className='text-[14px] mt-5 text-gray-600'>{data.desc}</p>
                            </div>

                        )
                    })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutCompany
