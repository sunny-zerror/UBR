import { RiArrowRightLine } from '@remixicon/react'
import React from 'react'

const Hero = () => {
  return (
    <div className='container pb-32 h-screen border-b mb-24 border-black/30 flex justify-end flex-col gap-y-7'>
      <img className='w-[60%] opacity-50 right-0 absolute top-1/2 -translate-y-1/2 z-[-1]' src="https://cdn.prod.website-files.com/667d8d81555e958a89e78d90/667d8d81555e958a89e78e30_map-rest.webp" alt="" />
      <h6 className='text-blue'>A venture builder for India</h6>
      <h1 className=''>The integrated model for <br />  non-linear growth.</h1>
      <p className='text-lg leading-tight w-1/2'>We build consumer brands faster, profitably. Talent, capital, strategy, design and distribution, fused into one operating system that replaces paid CAC with trust.</p>
      <p className='text-lg w-1/2'>Built by <b> Binoy Khimji,</b> <b> Ashish Chowdhry </b> and  <b>Kaushik Sundararajan.</b></p>
        <div className="flex gap-x-4">
          <button className='flex items-center px-4 py-2.5 rounded-full text-sm gap-x-2 bg-blue'>See Our Approach <RiArrowRightLine size={18}/> </button>
          <button className='border px-4 py-2.5 rounded-full text-sm '>View Work </button>
        </div>
    </div>
  )
}

export default Hero