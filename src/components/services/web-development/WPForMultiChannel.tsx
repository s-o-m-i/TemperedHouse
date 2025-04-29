import Image from 'next/image'
import React from 'react'

const WPForMultiChannel = () => {
  return (
    <div>
      <section className='px-8 md:px-16 py-20'>
        <div className="grid grid-cols-2">
          <div className="">
            <Image alt='web-dev' src={"/images/web-development-first.webp"} width={600} height={600} />
          </div>
          <div className="">

            <h3 className='text-[32px] sm:text-[42px] font-bold text-[#04213F]  text-start'>Web Development for Multi-Channel Visibility
            </h3>
            <p className='text-base text-gray-600  mt-5  text-start'>A website or web app is built to facilitate user engagement. Our web development services help create scalable digital platforms with intuitive UI/UX and performant functionalities for accessible online interaction. For further efficiency, we leverage threat resistance, tested architectures, continuous maintenance, and custom CMS solutions.
            </p>
            <p className='text-base text-gray-600  mt-5  text-start'>A website or web app is built to facilitate user engagement. Our web development services help create scalable digital platforms with intuitive UI/UX and performant functionalities for accessible online interaction. For further efficiency, we leverage threat Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt eveniet iure quasi nam nemo consectetur fuga, ea illum assumenda? Vero dicta illum assumenda eaque totam architecto nulla ab fuga tempore. resistance, tested architectures, continuous maintenance, and custom CMS solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WPForMultiChannel
