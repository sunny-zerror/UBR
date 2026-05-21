import React from 'react'
import DotButton from '../common/DotButton'

const Hero = () => {
  return (
    <div className='container bg-[#CDCECF] pt-32 pb-16'>
      <div className="space-y-5">
        <DotButton text="A venture builder for India" />
        <h1 className=' capitalize'>The integrated model <br /> for  <span className='text-[#F20908]'>  non-linear</span> <br /> growth.</h1>
      </div>
      <div className="w-full flex justify-end">
        <div className="w-[35%]">
          <p className='text-xl  leading-tight'>We build consumer brands faster, profitably. Talent, capital, strategy, design and distribution, fused into one operating system that replaces paid CAC with trust.</p>
          <p className='text-xl leading-tight  mt-5'>Built by <b> Binoy Khimji,</b> <b> Ashish Chowdhry </b> and  <b>Kaushik Sundararajan.</b></p>
        </div>
      </div>
    </div>
  )
}

export default Hero