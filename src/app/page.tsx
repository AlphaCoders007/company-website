import React from 'react';
import HeroParallel from './components/HeroParallel';
import { Team } from './components/Team';
import { AuroraBackgrounds } from './components/AuroraBackground';
import Hero from './components/Hero';
import FloatingIcons from './components/FloatingIcons';

function Page() {
  return (
    <div>
      <Hero />
      <FloatingIcons />
      <HeroParallel /> {/* Corrected component name */}
      <AuroraBackgrounds />
      <Team />
    </div>
  );
}

export default Page;