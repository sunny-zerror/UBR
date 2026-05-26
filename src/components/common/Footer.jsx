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
    gsap.fromTo('.footer_img', {
      y: -200,
    }, {
      y: 200,
      ease: "none",
      scrollTrigger: {
        trigger: ".sticky_box",
        endTrigger: ".main_footer",
        start: "bottom bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });
  })

  return (
    <div className='mt-24'>
      {!skipBlackBox && (
        <div className=" sticky_box_paren w-full overflow-hidden h-[75vw] relative">
          <img className=' footer_img absolute cover z-[-1] inset-0' src="https://ref.digital/cdn-cgi/image/w=2000,h=2000,f=webp,q=95,fit=crop/https://a.storyblok.com/f/285561750510308/2000x2000/88bf31eac6/halo_thumb.jpg" alt="" />
          <div className=" absolute top-0 w-[calc(50%-15vw)] h-[60vw] left-0 ">
            <div className="w-full h-1/2 bg-[#C4BAB0]"></div>
            <div className=" box_left w-full h-1/2 "></div>
          </div>
          <div className="absolute top-0 w-[calc(50%-15vw)] h-[30vw] right-0 bg-[#C4BAB0]"></div>
          <div className=" sticky_box aspect-square relative left-1/2 -translate-x-1/2 h-[30vw] w-[30vw] bg-[#C4BAB0]">
            <div className="size-2 aspect-square z-10 bg-black absolute -top-1 -left-1 "></div>
            <div className="size-2 aspect-square z-10 bg-black absolute -top-1 -right-1 "></div>
            <div className="size-2 aspect-square z-10 bg-black absolute -bottom-1 -right-1 "></div>
            <div className="size-2 aspect-square z-10 bg-black absolute -bottom-1 -left-1 "></div>
            <div className="w-full h-full border-2 flex flex-col justify-between border-black  p-8">
              <div className="space-y-5">
                <h4 data-heading-effect className='leading-none!'>Let’s build India’s next iconic brand. Together.</h4>
                <p data-para-effect className='leading-tight opacity-80'>We are looking for our next cohort of partners. Founders, talent, investors and retailers, all welcome.</p>
              </div>
              <div className="w-full flex items-center justify-between">
                <Link href={"/contact"} className={`group block w-fit  text-[#C4BAB0] uppercase aeonik text-xs px-4 border hover:text-[#000000] border-transparent hover:border-[#000000] py-2.5 leading-none relative overflow-hidden rounded-full transition-all duration-300 `}>
                  <span className='absolute w-full h-full z-[-1] bg-black  inset-0 group-hover:-top-full transition-all duration-300'></span>
                  get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className=" main_footer bg-black pt-14">
        <div className="container h-[35vh]! grid  grid-cols-6">
          <div className="space-y-5 h-full flex items-end col-span-3">
            <img className='w-[35%]' src="/logo_white.png" alt="" />
          </div>
          <div className=" h-full space-y-5">
            <p className=' uppercase text-sm aeonik'>Sitemap</p>
            <div className=" capitalize space-y-2">
              <p className='opacity-60 text-sm'>Home</p>
              <p className='opacity-60 text-sm'>Approach</p>
              <p className='opacity-60 text-sm'>Work</p>
              <p className='opacity-60 text-sm'>Team</p>
              <p className='opacity-60 text-sm'>contact</p>
            </div>
          </div>
          <div className=" h-full space-y-5">
            <p className=' uppercase text-sm aeonik'>Contact</p>
            <div className=" space-y-2">
              <p className='opacity-60 text-sm'>binoykhimji@gmail.com</p>
              <p className='opacity-60 text-sm'>ashish@disrptve.com</p>
              <p className='opacity-60 text-sm'>kaushik@disrptve.com</p>
            </div>
          </div>
          <div className=" h-full space-y-5 pl-12">
            <p className=' uppercase text-sm aeonik' >Socials</p>
            <div className=" capitalize space-y-2">
              <p className='opacity-60 text-sm'>LinkedIn</p>
              <p className='opacity-60 text-sm'>Instagram</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="w-full  border-t border-white/10 mt-3 py-3">
            <p className=' opacity-60 text-xs aeonik'>© 2026 UBR × DISRPTVE</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer