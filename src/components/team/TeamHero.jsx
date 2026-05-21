import React from 'react'
import DotButton from '../common/DotButton'

const TeamHero = () => {
  return (
    <div className='container bg-[#CDCECF] pt-32 pb-16'>
      <div className="space-y-5">
        <DotButton text="The team" />
        <h1 className=' capitalize'>An embedded<br /> operating   <span className='text-[#F20908]'>  team.</span></h1>
      </div>
      <div className="w-full flex justify-end">
        <div className="w-[35%]">
          <p className='text-xl  leading-tight'>Operators, strategists and capital advisors, assembled to solve India’s specific challenges. Three co-founders. Two capital partners. One operating system.</p>
        </div>
      </div>
    </div>
  )
}

export default TeamHero