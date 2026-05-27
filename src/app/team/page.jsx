import SectionHero from '@/components/common/SectionHero'
import CapitalAdvisory from '@/components/team/CapitalAdvisory'
import CoFounders from '@/components/team/CoFounder'
import HowWeWork from '@/components/team/HowWeWork'
import TeamHero from '@/components/team/TeamHero'
import React from 'react'

const page = () => {
  return (
    <>
        <SectionHero
        btnText={"The team"}
        heading={"An embedded operating  team."}
        desc={"Operators, strategists and capital advisors, assembled to solve India’s specific challenges. Three co-founders. Two capital partners. One operating system."}
      />
        <CoFounders/>
        <CapitalAdvisory/>
        <HowWeWork/>
    </>
  )
}

export default page