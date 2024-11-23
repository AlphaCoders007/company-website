import React from 'react';
import Hero from './components/Hero'; // Default export
import FloatingIcons from './components/FloatingIcons'; // Default export
import HeroParallel from './components/HeroParallel'; // Default export
import { Team } from './components/Team'; // Named export
import { AuroraBackgrounds } from './components/AuroraBackground'; // Named export

function Page() {
  return (
    <div>
      <Hero /> {/* Hero section */}
      <FloatingIcons /> {/* Floating icons */}
      <HeroParallel /> {/* Parallax hero section */}
      <AuroraBackgrounds /> {/* Aurora background effects */}
      <Team /> {/* Team section */}
    </div>
  );
}

export default Page;