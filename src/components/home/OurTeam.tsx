import Image from 'next/image'
import React from 'react'
// import SomiImg from '../../../public/images/SnapInsta.to_447864809_986391686175069_245543238023753410_n.jpg'

const OurTeam = () => {
    return (
        <div>
            <section className="pb-20 relative  h-screen px-8 md:px-16 bg-[#9F1940] bg-pattern bg-[#28536B]">
                <div className="grid grid-cols-4 ">
                    <div className="absolute w-[150px] top-[180px] h-[200px] bg-[#9F1940] blur-[80px]"></div>
                    <div className='w-[200px]'>

                        <div className="member overflow-hidden relative h-[400px] glass-morph  group rounded-b-full w-[200px] ">
                            <Image src="/images/somi.png"
                                alt="Team member"
                                width={200}
                                height={400}
                                className="absolute bottom-0 scale-[1.5] ml-6 mb-10 group-hover:scale-[1.8] transition-all duration-300 ease-in-out" />
                        </div>
                        <h3 className='text-[20px] text-center text-[#fff] font-bold '>Member 1</h3>
                        <p className='text-[16px] text-center text-[#fff] '>MERN-Stack Developer</p>
                    </div>
                    <div className="absolute w-[150px] top-[180px] left-[350px] h-[200px] bg-[#28536B] blur-[80px]"></div>
                    <div className='w-[200px]'>
                        <div className="member overflow-hidden relative h-[350px] glass-morph  group rounded-b-full w-[200px] ">
                            <Image src="/images/dawood.png"
                                alt="Team member"
                                width={200}
                                height={400}
                                className="absolute bottom-0 scale-[1.8] right-20 mb-10 group-hover:scale-[2] transition-all duration-300 ease-in-out" />
                        </div>
                        <h3 className='text-[20px] text-center text-[#fff] font-bold '>Member 2</h3>
                        <p className='text-[16px] text-center text-[#fff] '>CEO</p>
                    </div>

                    <div className="absolute w-[150px] top-[180px] right-[400px] h-[200px] bg-[#28536B] blur-[80px]"></div>
                    <div className='w-[200px]'>
                        <div className="member overflow-hidden relative h-[350px] glass-morph group  rounded-b-full w-[200px] ">
                            <Image src="/images/dawood.png"
                                alt="Team member"
                                width={200}
                                height={400}
                                className="absolute bottom-0 scale-[1.8] right-20 mb-10 group-hover:scale-[2] transition-all duration-300 ease-in-out" />
                        </div>
                        <h3 className='text-[20px] text-center text-[#fff] font-bold '>Member 3</h3>
                        <p className='text-[16px] text-center text-[#fff] '>MERN-Stack Developer</p>
                    </div>
                    <div className="absolute w-[150px] right-[100px] top-[180px] h-[200px] bg-[#9F1940] blur-[80px]"></div>
                    <div className='w-[200px]'>
                        <div className="member group overflow-hidden relative h-[400px] glass-morph   rounded-b-full w-[200px] ">
                            <Image src="/images/somi.png"
                                alt="Team member"
                                width={200}
                                height={400}
                                className="absolute bottom-0 scale-[1.5] ml-6 mb-10 group-hover:scale-[1.8] transition-all duration-300 ease-in-out" />
                        </div>
                        <h3 className='text-[20px] text-center text-[#fff] font-bold '>Member 4</h3>
                        <p className='text-[16px] text-center text-[#fff] '>MERN-Stack Developer</p>
                    </div>
                </div>
                <h2 className='text-[32px] font-bold text-center  text-[#fff] '>Our <span className=''>Team</span></h2>
                <div className="w-24 h-1 bg-[#9f193f] mx-auto mb-6"></div>
            </section>
        </div>
    )
}

export default OurTeam
