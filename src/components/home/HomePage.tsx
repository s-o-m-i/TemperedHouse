import React from 'react';
import LandingPage from './LandingPage';
import WhyUs from './WhyUs';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import CTA from './CTA';
import ServicesPage from '../services';
import OurTeam from './OurTeam';
import AboutCompany from './AboutCompany';
import WayOfBuilding from './WayOfBuilding';
import CallToAction from './CallToAction';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <LandingPage />
      <AboutCompany/>
      <ServicesPage/>
      <CallToAction/>
      <WhyUs />
      <WayOfBuilding/>
      {/* <OurTeam/> */}
      <Portfolio />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default HomePage; 