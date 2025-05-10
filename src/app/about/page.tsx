
import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import OurTeam from '@/components/home/OurTeam';
import CoreValues from '@/components/about/CoreValues';
import OurJourney from '@/components/about/OurJourney';
import AboutServices from '@/components/about/AboutServices';
import WayAreWeUnique from '@/components/about/WayAreWeUnique';
import OurStory from '@/components/about/OurStory';
import TestimonialsSlider from '../../components/about/TestimonialsSlider';
import BelieveSection from '@/components/about/BelieveSection';
import CallToAction from '@/components/home/CallToAction';

export const metadata = {
  title: 'About Us | TechNexus',
  description: 'Learn about TechNexus - our story, mission, values and the team behind our innovative IT solutions.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <OurStory/>
      <BelieveSection/>
      <AboutServices/>
      <CoreValues />
      <TestimonialsSlider/>
      <WayAreWeUnique />
      <CallToAction/>
      {/* <OurJourney /> */}
      {/* <OurTeam /> */}
    </div>
  );
} 