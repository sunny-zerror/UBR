import React from 'react'
import DotButton from '../common/DotButton'

const WorkListingHero = () => {
  return (
    <div className='container bg-[#CDCECF] pt-32 pb-16'>
      <div className="space-y-5">
        <DotButton text="Selected work" />
        <h1 className=' capitalize'>Brands we have <br /> <span className='text-[#F20908]'>  backed.</span></h1>
      </div>
      <div className="w-full flex justify-end">
        <div className="w-[35%]">
          <p className='text-xl  leading-tight'>Capital and celebrity, structured as a single move. Strategic advisory anchored to talent. Full-stack engagements that compound.</p>
        </div>
      </div>
    </div>
  )
}

export default WorkListingHero