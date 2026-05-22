import { RiArrowRightLine } from '@remixicon/react'
import { usePathname } from 'next/navigation';
import React from 'react'

const Footer = () => {
  const pathname = usePathname();

  const skipBlackBox = pathname === '/contact'
  return (
    <>
      {/* {!skipBlackBox && (
        <div className="w-full mt-24 bg-black">
          <div className='container py-24 text-white space-y-5'>
            <div className="grid grid-cols-2 items-end ">
              <h2>Let's build India's <br /> next iconic brand. <br /> <spp className=' uppercase text-lg!'>Together.</spp></h2>
              <div className="flex justify-end">
                <div className="w-[60%] space-y-5">
                  <p className=' leading-tight '>We are looking for our next cohort of partners. Founders, talent, investors and retailers, all welcome.</p>
                  <div className="flex gap-x-4">
                    <button className='flex items-center px-4 py-2.5 rounded-full text-sm gapp-text-lg uppercase !'>Get in Touch <RiArrowRightLine size={18} /> </button>
                    <button className='border border-white px-4 py-2.5 rounded-full text-sm '>See our Work </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
      <div className=" mt-24 bg-black">
        <div className="container pt-24 grid items-stretch grid-cols-6">
          <div className="space-y-5 flex flex-col justify-between col-span-3">
            <img className='w-[15%]' src="/logo.png" alt="" />
            <p className=' leading-tight w-[50%] opacity-60 '>A venture builder for India 1. Talent, capital, strategy, design and distribution, fused into one operating model for profitable scale.</p>
          </div>
          <div className="space-y-5">
            <p className=' uppercase text-lg!'>Sitemap</p>
            <div className=" capitalize space-y-2">
              <p className='opacity-60'>Home</p>
              <p className='opacity-60'>Approach</p>
              <p className='opacity-60'>Work</p>
              <p className='opacity-60'>Team</p>
              <p className='opacity-60'>contact</p>
            </div>
          </div>
          <div className="space-y-5">
            <p className=' uppercase text-lg!'>Contact</p>
            <div className=" space-y-2">
              <p className='opacity-60'>binoykhimji@gmail.com</p>
              <p className='opacity-60'>ashish@disrptve.com</p>
              <p className='opacity-60'>kaushik@disrptve.com</p>
            </div>
          </div>
          <div className="space-y-5 pl-12">
            <p className=' uppercase text-lg!'>Socials</p>
            <div className=" capitalize space-y-2">
              <p className='opacity-60'>LinkedIn</p>
              <p className='opacity-60'>Instagram</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="w-full  border-t border-white/10 mt-10 py-5">
            <p className='text-xs opacity-60'>© 2026 UBR × DISRPTVE</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer