"use client";
import Button from '@/ui/Button/Button';
import PrimaryButton from '@/ui/PrimaryButton/PrimaryButton';
import Image from 'next/image';
import React from 'react';
import Lottie from "lottie-react";
import eyeLottie from "../../utils/eyes-lottie.json";
import bulbLottie from "../../utils/bulb-lottie.json";

const AboutHero = () => {
  return (
    <section className=" bg-pattern grid grid-cols-2 py-20 px-8 md:px-16 h-[cacl(100vh-100px)] relative rounded-t-md">
      <div className="flex flex-col md:flex-row items-center justify-between  ">
        <div className="max-w-xl mb-10 md:mb-0">
          <h1 className="text-[42px] leading-[1.3] font-bold text-[#fff] mb-6">
            Transforming Visions into Digital Excellence 
          </h1>
          <p className="text-[16px] sm:w-[75%] text-white mb-10">
            We are a software house dedicated to delivering innovative and reliable technology solutions. Our expert team is driven by a passion for solving complex challenges, leveraging the latest advancements to help businesses succeed. We value quality, collaboration, and client satisfaction, striving to exceed expectations in everything we do.
          </p>
          <div className="flex items-center gap-5">
            <PrimaryButton text={"Get Consultation"} />
            <Button />
            {/* <SecondaryButton/> */}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center relative">
        <Image width={400} height={400} src="/images/developer.png" className='' alt="about us"/>
        {/* <div className="bg-white  rounded-full w-[100px] h-[100px] absolute top-[10px] left-[230px] flex items-center justify-center ">
        <Lottie style={{ width: 200, height: 200 }} className='' animationData={bulbLottie} loop={true} />
        </div>
        <div className="w-[50px] h-[50px] bg-[#28536B] rounded-full">

        </div>
        <Lottie style={{ width: 200, height: 200,color:"white" }} animationData={eyeLottie} loop={true} /> */}
      </div>

    </section>
  );
};

export default AboutHero; 