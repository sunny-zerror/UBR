import ApproachHero from '@/components/approach/ApproachHero'
import PlaybookDetail from '@/components/approach/PlaybookDetail'
import TheMindset from '@/components/approach/TheMindset'
import TheOs from '@/components/approach/TheOs'
import Playbook from '@/components/home/Playbook'
import { createPageMetadata } from '@/lib/seo'
import React from 'react'

const page = () => {
  return (
    <>
      <ApproachHero />
      <TheMindset />
      <TheOs />
      <Playbook/>
    </>
  )
}

export default page

export async function generateMetadata() {
  return createPageMetadata("/approach");
}
