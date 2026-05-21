import CapitalAdvisory from '@/components/team/CapitalAdvisory'
import CoFounders from '@/components/team/CoFounder'
import HowWeWork from '@/components/team/HowWeWork'
import TeamHero from '@/components/team/TeamHero'
import React from 'react'

const page = () => {
  return (
    <>
        <TeamHero/>
        <CoFounders/>
        <CapitalAdvisory/>
        <HowWeWork/>
    </>
  )
}

export default page