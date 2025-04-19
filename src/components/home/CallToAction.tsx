import Image from 'next/image'
import React from 'react'

const CallToAction = () => {
  return (
    <div>
      <section className="py-20 px-8 md:px-16 bg-white">
        <div className="p-[90px] rounded-[16px] bg-[#9f193f]">
            <div className="grid grid-cols-12">
                <div className="col-span-8">

            <h3 className='text-[42px] text-white leading-[63px]'>Ready to take your business to the next level with our expert services?
            </h3>
                </div>
                <div className="col-span-4 flex items-center gap-5">
                    <button className='flex gap-5 items-center btn-glass-morph btn-shimmer p-4 rounded-xl text-white'>
                        <span>03305870851</span> 
                        <Image src="/icons/callIcon.png" width={20} height={20} alt='' className="relative z-2"/>
                    </button>
                    <button className='flex gap-5 items-center btn-glass-morph p-4 rounded-xl text-white btn-shimmer'>Contact Us</button>
                </div>
                
            </div>
        </div>
      </section>
    </div>
  )
}

export default CallToAction
