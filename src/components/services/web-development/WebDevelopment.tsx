import InfiniteScrollCompanies from '@/components/InfiniteScrollCompanies/InfiniteScrollCompanies';
import Button from '@/ui/Button/Button';
import PrimaryButton from '@/ui/PrimaryButton/PrimaryButton';
import React from 'react';

const WebDevelopment = () => {
    return (
        <div className='bg-[#9f193f]  relative rounded-md '>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12  ">
            <section className="flex flex-col md:flex-row mt-32 justify-between px-8 md:px-16 ">
                <div className="max-w-xl mb-10 md:mb-0">
                    <h1 className="text-[42px] leading-[1.3] font-bold text-[#fff]  mb-6">
                        Web Development Services For Online Success
                        e
                    </h1>
                    <p className="text-[16px] sm:w-[75%] text-white mb-10">
                        Design and scale custom, high-performing web solutions that engage users and deliver seamless experience at every touchpoint. At TekRevol, our web development services help businesses amplify their online presence with modern, user-first innovation.





                    </p>
                    <div className="flex items-center gap-5">
                        <PrimaryButton text={"Get Consultation"} />
                        <Button />
                        {/* <SecondaryButton/> */}
                    </div>
                </div>
            </section>
            <div className="flex items-center  mt-5">
                <div className="bg-white rounded-lg shadow-lg p-8 relative max-w-xl mx-auto ">
                    <div className="absolute -top-4 -right-4 bg-[#28536B] text-white px-6 py-2 rounded-full font-bold shadow-md">
                        Contact Us
                    </div>
                    <h3 className="text-2xl font-bold text-[#28536B] mb-6">Book a Free Consultation</h3>
                    <form>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#28536B]"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#28536B]"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="company" className="block text-white mb-2">Company Name</label>
                            <input
                                type="text"
                                id="company"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#28536B]"
                                placeholder="Your Company"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="service" className="block text-white mb-2">Service You&apos;re Interested In</label>
                            <select
                                id="service"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#28536B]"
                            >
                                <option value="">Select a service</option>
                                <option value="web">Web Development</option>
                                <option value="mobile">Mobile App Development</option>
                                <option value="ui">UI/UX Design</option>
                                <option value="digital">Digital Marketing</option>
                                <option value="cloud">Cloud Solutions</option>
                                <option value="other">Other Services</option>
                            </select>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="message" className="block text-white mb-2">Your Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#28536B]"
                                placeholder="Tell us about your project..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#28536B] text-white py-3 rounded-lg font-medium hover:bg-[#9f193f] transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                            Submit Request
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div className="mt-20 pb-20 bg-[#9f193f] rounded-lg">

            <InfiniteScrollCompanies/>
        </div>
        </div>
    );
};

export default WebDevelopment; 