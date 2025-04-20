import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import OurMission from '@/components/about/OurMission';
import OurTeam from '@/components/home/OurTeam';
import CoreValues from '@/components/about/CoreValues';
import OurJourney from '@/components/about/OurJourney';

export const metadata = {
  title: 'About Us | TechNexus',
  description: 'Learn about TechNexus - our story, mission, values and the team behind our innovative IT solutions.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <OurMission />
      <CoreValues />
      <OurJourney />
      <OurTeam />
    </div>
  );
} 