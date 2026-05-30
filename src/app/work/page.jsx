import SectionHero from '@/components/common/SectionHero'
import { WorksList } from '@/components/work/WorksList'
import React from 'react'

const page = () => {
  return (
    <>
        <SectionHero
        btnText={"Selected work"}
        heading={"Brands we have backed."}
        desc={"Capital and celebrity, structured as a single move. Strategic advisory anchored to talent. Full-stack engagements that compound."}
      />
        <WorksList/>
    </>
  )
}

export default page