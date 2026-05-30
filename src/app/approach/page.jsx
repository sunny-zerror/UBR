import ApproachHero from '@/components/approach/ApproachHero'
import PlaybookDetail from '@/components/approach/PlaybookDetail'
import TheMindset from '@/components/approach/TheMindset'
import TheOs from '@/components/approach/TheOs'
import SectionHero from '@/components/common/SectionHero'
import React from 'react'

const page = () => {
  return (
    <>
    <ApproachHero/>
      <TheOs />
      <PlaybookDetail />
    </>
  )
}

export default page