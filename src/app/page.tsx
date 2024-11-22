import React from 'react'
import { HeroParallel } from './components/HeroParallel'
import { Team } from './components/Team'
import { AuroraBackgrounds } from './components/AuroraBackground'
import  Hero  from './components/Hero'
function page() {
  return (
    <div>
      <Hero />
      <HeroParallel/>
      <AuroraBackgrounds/>
      
      <Team/>
    </div>
  )
}

export default page
