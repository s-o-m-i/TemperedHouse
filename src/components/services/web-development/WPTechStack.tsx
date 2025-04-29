import React from 'react'

const WPTechStack = () => {
    return (
        <div>
            <section className="py-20 px-8 md:px-16 bg-white">
                <div className="flex justify-center">

                    <h2 className='text-[32px] leading-[1.2] sm:text-[42px] font-bold text-[#04213F]  text-center sm:w-[55%]'>Superb web apps built with
                        top-tier tools & technologies
                    </h2>
                </div>
                <div className="flex justify-center">
                    <p className='text-base sm:w-[75%] mt-5 text-center text-gray-600'>Our webmasters leverage the latest frameworks, libraries, and cloud solutions to craft fast, scalable, and future-ready web solutions.</p>
                </div>

                <div className="grid grid-cols-2 mt-20 gap-8">
                    <div className="technologies">

                        <div className="technology bg-gray-50 p-4 border-l-2 shadow-sm hover:shadow-lg border-[#9F1940]">
                            <h4 className=''>01.</h4>
                            <h3 className='text-2xl font-semibold'>JAVASCRIPT</h3>
                        </div>
                        <div className="technology mt-2 bg-gray-50 p-4 border-l-2 shadow-sm border-[#9F1940]">
                            <h4 className=''>02.</h4>
                            <h3 className='text-2xl font-semibold'>TYPESCRIPT</h3>
                        </div>
                        <div className="technology mt-2 bg-gray-50 p-4 border-l-2 shadow-sm border-[#9F1940]">
                            <h4 className=''>03.</h4>
                            <h3 className='text-2xl font-semibold'>REACT</h3>
                        </div>
                        <div className="technology mt-2 bg-gray-50 p-4 border-l-2 shadow-sm border-[#9F1940]">
                            <h4 className=''>04.</h4>
                            <h3 className='text-2xl font-semibold'>NEXT.JS</h3>
                        </div>
                    </div>
                    <div className="tech-details">
                        <div className="w-32 h-32 bg-[#9F1940] rounded-lg">
                            <h2 className='text-white text-4xl font-semibold my-auto text-center'>JS</h2>
                        </div>
                        <h3 className='text-lg mt-5'>Javascript</h3>
                        <p className='text-base mt-3 text-gray-600'>The backbone of modern web development, JavaScript enables us to build interactive, real-time web apps with dynamic content, smooth animations, and seamless user experiences. Its speed, flexibility, and broad compatibility make it a go-to for high-performance platforms.</p>
                    </div>
                </div>
                <h2 className='text-[32px] leading-[1.2] sm:text-[42px] font-bold text-[#04213F]  text-center  mt-20'>Tech Stack We Use
                </h2>
                <div className="grid grid-cols-4 mt-20 gap-8">
                    <div className="frontend border-b-4 border-[#9F1940] bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md">
                        <h2 className='text-center text-xl mb-5 border-b border-[#9F1940] pb-3'>Frontend</h2>
                        <h5 className='mb-2 text-lg text-gray-600 '>HTML</h5>
                        <h5 className='mb-2 text-lg text-gray-600 '>CSS</h5>
                        <h5 className='mb-2 text-lg text-gray-600'>Javascript</h5>
                        <h5 className='mb-2 text-lg text-gray-600'>React</h5>
                    </div>
                    <div className="frontend border-b-4 border-[#9F1940] bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md">
                        <h2 className='text-center text-xl mb-5 border-b border-[#9F1940] pb-3'>Backend</h2>
                        <h5 className='mb-2 text-lg text-gray-600 '>Node.js</h5>
                        <h5 className='mb-2 text-lg text-gray-600 '>Laravel</h5>
                        <h5 className='mb-2 text-lg text-gray-600'>MySQL</h5>
                    </div>
                    <div className="frontend border-b-4 border-[#9F1940] bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md">
                        <h2 className='text-center text-xl mb-5 border-b border-[#9F1940] pb-3'>Databases</h2>
                        <h5 className='mb-2 text-lg text-gray-600 '>MYSQL</h5>
                        <h5 className='mb-2 text-lg text-gray-600 '>MongoDB</h5>
                        <h5 className='mb-2 text-lg text-gray-600'>Postgressql</h5>
                    </div>
                    <div className="frontend border-b-4 border-[#9F1940] bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md">
                        <h2 className='text-center text-xl mb-5 border-b border-[#9F1940] pb-3'>Tools</h2>
                        <h5 className='mb-2 text-lg text-gray-600 '>Git</h5>
                        <h5 className='mb-2 text-lg text-gray-600 '>Docker</h5>
                        <h5 className='mb-2 text-lg text-gray-600'>AWS</h5>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WPTechStack
