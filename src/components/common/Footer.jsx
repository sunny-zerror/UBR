"use client";
import { useGSAP } from '@gsap/react';
import { RiArrowRightLine } from '@remixicon/react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';
import React from 'react'
import Button from './Button';
import { Link } from 'next-view-transitions';
gsap.registerPlugin(ScrollTrigger)

const navLinks = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Approach",
    href: "/approach"
  },
  {
    label: "Work",
    href: "/work"
  },
  {
    label: "Team",
    href: "/team"
  },
]

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
        pin: true,
        pinSpacing: true
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
                <h4 data-para-effect className='leading-none!'>Let’s build India’s next iconic brand. Together.</h4>
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
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;

                return (
                  <div key={i} className={` text-[#C4BAB0] w-fit  text-sm capitalize opacity-60 hover:opacity-100 transition-all duration-150 ${isActive && "opacity-100"}  group cursor-pointer`}>
                    <Link href={link.href} className="relative  leading-none">
                      {link.label}

                      <span
                        className={`
                            absolute left-0 bottom-0 h-[1.5px] rounded-full w-full bg-[#C4BAB0]
                            transition-transform duration-300 ease-out
                            ${isActive ? "scale-x-100 origin-left" : "scale-x-0 origin-left group-hover:scale-x-100"}
                          `}
                      ></span>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" h-full space-y-5">
            <p className=' uppercase text-sm aeonik'>Contact</p>
            <div className=" space-y-2">
              <div className=' relative w-fit block cursor-pointer hover:opacity-100 transition-all duration-150 opacity-60 text-sm group'>
                <span
                  className={`
                            absolute left-0 bottom-0 h-[1.5px] rounded-full w-full bg-[#C4BAB0]
                            transition-transform duration-300 ease-out scale-x-0 origin-left group-hover:scale-x-100
                            `}
                ></span>
                binoykhimji@gmail.com</div>
              <div className=' relative w-fit block cursor-pointer hover:opacity-100 transition-all duration-150 opacity-60 text-sm group'>
                <span
                  className={`
                            absolute left-0 bottom-0 h-[1.5px] rounded-full w-full bg-[#C4BAB0]
                            transition-transform duration-300 ease-out
                            scale-x-0 origin-left group-hover:scale-x-100
                          `}
                ></span>
                ashish@disrptve.com</div>
              <div className=' relative w-fit block cursor-pointer hover:opacity-100 transition-all duration-150 opacity-60 text-sm group'>
                <span
                  className={`
                            absolute left-0 bottom-0 h-[1.5px] rounded-full w-full bg-[#C4BAB0]
                            transition-transform duration-300 ease-out
                            scale-x-0 origin-left group-hover:scale-x-100
                          `}
                ></span>
                kaushik@disrptve.com</div>
            </div>
          </div>
          <div className=" h-full space-y-5 pl-12">
            <p className=' uppercase text-sm aeonik' >Socials</p>
            <div className=" capitalize space-y-2">
               <div className=' relative w-fit block cursor-pointer hover:opacity-100 transition-all duration-150 opacity-60 text-sm group'>
                <span
                  className={`
                            absolute left-0 bottom-0 h-[1.5px] rounded-full w-full bg-[#C4BAB0]
                            transition-transform duration-300 ease-out scale-x-0 origin-left group-hover:scale-x-100
                            `}
                ></span>
               LinkedIn</div> <div className=' relative w-fit block cursor-pointer hover:opacity-100 transition-all duration-150 opacity-60 text-sm group'>
                <span
                  className={`
                            absolute left-0 bottom-0 h-[1.5px] rounded-full w-full bg-[#C4BAB0]
                            transition-transform duration-300 ease-out scale-x-0 origin-left group-hover:scale-x-100
                            `}
                ></span>
                Instagram</div>
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