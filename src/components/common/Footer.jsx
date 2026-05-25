"use client";
import { useGSAP } from '@gsap/react';
import { RiArrowRightLine } from '@remixicon/react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { usePathname } from 'next/navigation';
import React from 'react'
import Button from './Button';
import { Link } from 'next-view-transitions';
gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  const pathname = usePathname();

  const skipBlackBox = pathname === '/contact'


  useGSAP(() => {
    gsap.to('.sticky_box', {
      ease: "none",
      transformOrigin: "50% 50%",
      scrollTrigger: {
        trigger: ".sticky_box",
        endTrigger: ".box_left",
        start: "center center",
        end: "center center",
        scrub: true,
        pin: true
      },
    });
  })

  return (
    <div className='mt-24'>
      {!skipBlackBox && (
        <div className=" sticky_box_paren w-full h-[75vw] relative">
          <img className=' absolute cover z-[-1] inset-0' src="https://plus.unsplash.com/premium_photo-1673326630848-fecf43ae8db1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <div className=" absolute top-0 w-[calc(50%-15vw)] h-[60vw] left-0 ">
            <div className="w-full h-1/2 bg-[#003049]"></div>
            <div className=" box_left w-full h-1/2 "></div>
          </div>
          <div className="absolute top-0 w-[calc(50%-15vw)] h-[30vw] right-0 bg-[#003049]"></div>
          <div className=" sticky_box aspect-square relative left-1/2 -translate-x-1/2 h-[30vw] w-[30vw] bg-[#003049]">
            <div className="w-full h-full border-2 flex flex-col justify-between border-white/50 text-white p-10">
              <div className="space-y-5">
                <h2 data-heading-effect>Let’s build India’s next iconic brand. Together.</h2>
                <p data-para-effect className='leading-tight opacity-80 text-lg'>We are looking for our next cohort of partners. Founders, talent, investors and retailers, all welcome.</p>
              </div>
              <div className="w-full flex items-center justify-between">
                <Link href={"/contact"} className={`group block w-fit  text-white text-sm px-4 border hover:text-[#ffffff] border-transparent hover:border-[#ffffff] py-2.5 relative overflow-hidden rounded-full transition-all duration-300 `}>
                  <span className='absolute w-full h-full z-[-1] bg-[#F20908]  inset-0 group-hover:-top-full transition-all duration-300'></span>
                  get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className=" bg-[#003049] text-white">
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
    </div>
  )
}

export default Footer