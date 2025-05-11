import React from 'react'
import { WPOurServicesData } from '../../../utils/wp-services'
import RegularCard from '@/ui/RegularCard'
import StandardCard from '@/ui/StandardCard'
import ModernCard from '@/ui/ModernCard'
const WPOurServices = () => {
    return (
        <div>
            <section className="py-20 px-8 md:px-16 bg-white">
                <h2 className='text-[32px] sm:text-[42px] font-bold text-[#04213F]  text-center'>Our Web Development Services
                </h2>
                <div className="flex justify-center">
                    <p className='text-base text-gray-600 sm:w-[65%]  mt-5 text-center'>From the first spark of an idea to a fully scaled product, we offer everything you need to build exceptional digital experiences.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-20">
                    {WPOurServicesData.length > 0 && WPOurServicesData.map((card, index) => {
                        return (
                            <>
                            {/* <ModernCard  key={index} step={card.step} title={card.title} desc={card.desc} /> */}
                            <div className="bg-white/10  backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg w-full border-t-4 border-t-[#9F1940]/50">
                                <h3 className="text-xl font-semibold text-[#04213F] mb-2">{card.title}</h3>
                                <p className="text-[#04213F]">
                                  {card.desc}
                                </p>
                                <div className="mt-4 border-t border-[#9F1940]/50 pt-2 text-xl font-bold text-[#04213F]/80">
                                   {card.step}
                                </div>
                            </div>
                            </>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default WPOurServices
