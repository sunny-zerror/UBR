import CapitalAdvisory from '@/components/team/CapitalAdvisory'
import HowWeWork from '@/components/team/HowWeWork'
import TeamHero from '@/components/team/TeamHero'
import WhoWePartner from '@/components/team/WhoWePartner'
import { createPageMetadata } from '@/lib/seo'
import React from 'react'

const page = () => {
  return (
    <>

      <TeamHero/>
        <WhoWePartner/>
        {/* <HowWeWork/> */}
    </>
  )
}

export default page

export async function generateMetadata() {
  return createPageMetadata("/team");
}
