"use client";
import { Link } from 'next-view-transitions'
import React from 'react'
import Button from './Button'
import { usePathname } from 'next/navigation'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

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
const Header = () => {
  const pathname = usePathname();
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".header",
        start: "+=500",
        toggleActions: "play none none reverse",
      },
    });
    tl.to('.header_bg', {
      transform: "translateY(0%)",
      duration: .6,
      ease: "expo.out",
    });
  })

  return (
    <div className='header w-full  z-100 fixed'>
      <div className=" container py-3  flex items-center justify-between   ">
        <div className="header_bg absolute bg-[#FFFFFF] pointer-events-none z-[-1] w-full h-full left-0 -translate-y-full"></div>
        <div className="flex items-end w-[75%] gap-x-20">
          <Link href="/" className='block  w-fit relative'>
            <img className='w-20 logo_black ' src="/logo_black.png" alt="logo" />
          </Link>
          <div className="flex items-center gap-x-5">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;

              return (
                <div key={i} className=" navLink font-semibold w-fit  text-sm uppercase aeonik  group cursor-pointer">
                  <Link href={link.href} className="relative  leading-none">
                    {link.label}

                    <span
                      className={`
                        navLinkBar
              absolute left-0 bottom-0 h-[1.5px] rounded-full w-full bg-black
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
        <div className="w-[25%] flex justify-end">
          <Link href={"/contact"}>
            <Button text={"Get in Touch"} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header