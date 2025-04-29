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
                            <ModernCard  key={index} step={card.step} title={card.title} desc={card.desc} />
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default WPOurServices
