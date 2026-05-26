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
    tl.to('.navLinkBar', {
      backgroundColor: "black",
      ease: "expo.out",
    }, 0);
    tl.to('.navLink', {
      color: "black",
      fontWeight: "bold",
      ease: "expo.out",
    }, 0);
    tl.to('.logo_white', {
      opacity: 0,
      ease: "expo.out",
    }, 0);
    tl.to('.logo_black', {
    opacity:1,
      ease: "expo.out",
    }, 0);
  })

  return (
    <div className='header w-full  z-100 fixed'>
      <div className=" container py-3  flex items-center justify-between   ">
        <div className="header_bg absolute bg-[#C4BAB0] pointer-events-none z-[-1] w-full h-full left-0 -translate-y-full"></div>
        <div className="flex items-end w-[75%] gap-x-20">
          <Link href="/" className='block  w-fit relative'>
            <img className='w-20 logo_white' src="/logo_white.png" alt="logo" />
            <img className='w-20 logo_black opacity-0 absolute inset-0' src="/logo_black.png" alt="logo" />
          </Link>
          <div className="flex items-center gap-x-5">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;

              return (
                <div key={i} className=" navLink text-[#C4BAB0] w-fit  text-sm uppercase aeonik  group cursor-pointer">
                  <Link href={link.href} className="relative  leading-none">
                    {link.label}

                    <span
                      className={`
                        navLinkBar
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