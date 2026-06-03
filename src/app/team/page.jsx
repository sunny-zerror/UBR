import CapitalAdvisory from '@/components/team/CapitalAdvisory'
import HowWeWork from '@/components/team/HowWeWork'
import TeamHero from '@/components/team/TeamHero'
import { createPageMetadata } from '@/lib/seo'
import React from 'react'

const page = () => {
  return (
    <>

      <TeamHero/>
        
        {/* <HowWeWork/> */}
    </>
  )
}

export default page

export async function generateMetadata() {
  return createPageMetadata("/team");
}
