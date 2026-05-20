import { RiArrowRightLine } from '@remixicon/react'
import { usePathname } from 'next/navigation';
import React from 'react'

const Footer = () => {
  const pathname = usePathname();

  const skipBlackBox = pathname === '/contact'
  return (
    <>
      {!skipBlackBox && (
        <div className="w-full mt-24 bg-black">
          <div className='container py-24 text-white space-y-5'>
            <div className="grid grid-cols-2 items-end ">
              <h2>Let's build India's <br /> next iconic brand. <br /> <span className='text-blue'>Together.</span></h2>
              <div className="flex justify-end">
                <div className="w-[60%] space-y-5">
                  <p className=' leading-tight '>We are looking for our next cohort of partners. Founders, talent, investors and retailers, all welcome.</p>
                  <div className="flex gap-x-4">
                    <button className='flex items-center px-4 py-2.5 rounded-full text-sm gap-x-2 bg-blue'>Get in Touch <RiArrowRightLine size={18} /> </button>
                    <button className='border border-white px-4 py-2.5 rounded-full text-sm '>See our Work </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="bg-[#F4F4F2]">
        <div className="container pt-24 grid grid-cols-6">
          <div className="space-y-5 col-span-3">
            <img className='w-[15%]' src="/logo.png" alt="" />
            <p className='text-sm w-[50%] opacity-70 '>A venture builder for India 1. Talent, capital, strategy, design and distribution, fused into one operating model for profitable scale.</p>
          </div>
          <div className="space-y-5">
            <h6 className='text-blue'>Sitemap</h6>
            <div className=" capitalize space-y-2">
              <p>Home</p>
              <p>Approach</p>
              <p>Work</p>
              <p>Team</p>
              <p>contact</p>
            </div>
          </div>
          <div className="space-y-5">
            <h6 className='text-blue'>Contact</h6>
            <div className=" space-y-2">
              <p>binoykhimji@gmail.com</p>
              <p>ashish@disrptve.com</p>
              <p>kaushik@disrptve.com</p>
            </div>
          </div>
          <div className="space-y-5">
            <h6 className='text-blue'>Socials</h6>
            <div className=" capitalize space-y-2">
              <p>LinkedIn</p>
              <p>Instagram</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="w-full  border-t border-black/10 mt-10 py-5">
            <h6 className='text-xs opacity-60'>© 2026 UBR × DISRPTVE</h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer