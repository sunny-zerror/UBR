"use client";
import { Link } from 'next-view-transitions'
import React, { useEffect, useState } from 'react'
import Button from './Button'
import { usePathname } from 'next/navigation'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { Squash as Hamburger } from 'hamburger-react'
import CustomEase from 'gsap/dist/CustomEase';
import ViewTransitionLink from '@/hooks/ViewTransitionLink';
gsap.registerPlugin(CustomEase, ScrollTrigger);

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
  CustomEase.create("in-out-quint", "0.83,0,0.17,1");
  const [isOpen, setOpen] = useState(false)
  const pathname = usePathname();

  useGSAP(() => {
    if (pathname === "/contact") return
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

  useGSAP(() => {
    if (pathname === "/contact") {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".contact_hero",
          start: "bottom 5%",
          toggleActions: "play none none reverse",
        },
      });
      tl.to('.logo_white', {
        opacity: 0,
        duration: .6,
      }, 0);
      tl.to('.navLink', {
        color: "black",
        fontWeight: 800,
        duration: .6,
      }, 0);
      tl.to('.navLinkBar', {
        backgroundColor: "#000000",
        duration: .6,
      }, 0);
    }
  }, [pathname])

  useEffect(() => {
    if (pathname === "/contact") {
      gsap.set('.logo_white', {
        opacity: 1,
        duration: .6,
      }, 0);
      gsap.set('.navLink', {
        color: "white",
        fontWeight: 100,
        duration: .6,
      }, 0);
      gsap.set('.navLinkBar', {
        backgroundColor: "#ffffff",
        duration: .6,
      }, 0);
    } else {
      gsap.set('.logo_white', {
        opacity: 0,
        duration: .6,
      }, 0);
      gsap.set('.navLink', {
        color: "black",
        fontWeight: 1000,
        duration: .6,
      }, 0);
      gsap.set('.navLinkBar', {
        backgroundColor: "#000000",
        duration: .6,
      }, 0);
    }
  }, [pathname])


  useEffect(() => {

    if (isOpen) {
      if (window.lenis) window.lenis.stop();
      const tl = gsap.timeline()
      if (pathname === "/contact") {
        tl.set('.navLink', {
          color: "black",
        });
        tl.set('.logo_white', {
          opacity: 0,
        });
      }
      tl.to('.mobile_menu', {
        right: 0,
        duration: .6,
        ease: "in-out-quint",
      });
      tl.to(".animate-link", {
        transform: "translateY(0)",
        stagger: 0.1,
        duration: 0.6,
        ease: "expo.out",
      })
    } else {
      if (window.lenis) window.lenis.start();
      const tl = gsap.timeline()
      tl.to(".animate-link", {
        transform: "translateY(-100%)",
        stagger: 0.1,
        duration: 0.6,
        ease: "expo.out",
      })
      tl.to('.mobile_menu', {
        right: "-100%",
        duration: .6,
        ease: "in-out-quint",
      });
      tl.set(".animate-link", {
        transform: "translateY(100%)",
      })
       if(pathname === "/contact"){
        tl.set('.navLink', {
          color: "white",
        });
           tl.set('.logo_white', {
          opacity: 1,
        });
      }
    }
  }, [isOpen])


  return (
    <div className='header w-full  z-100 fixed'>

      <div className=" mobile_menu md:hidden center text-center w-full h-screen bg-white z-[10] fixed -right-full top-0">
        <div className=" gap-y-7 flex flex-col justify-center items-center">
          {navLinks.map((link, i) => {
            return (
              <div key={i} onClick={() => setOpen(false)} className={`navLink font-thin!  w-fit block overflow-hidden  text-4xl text-center uppercase   group cursor-pointer text-black`}>
                <ViewTransitionLink delay={1700} href={link.href} className="relative  leading-none">
                  <p className='animate-link translate-y-full'>
                    {link.label}
                  </p>
                </ViewTransitionLink>
              </div>
            );
          })}
        </div>
      </div>

      <div className={` ${pathname === "/contact" && "hidden"} header_bg absolute bg-[#FFFFFF] pointer-events-none z-[-1] w-full h-full left-0 -translate-y-full`}></div>
      <div className=" container py-0 md:py-3  flex items-center justify-between relative z-100   ">
        <div className="flex items-end w-[75%] gap-x-20">
          <Link href="/" className='block  w-fit relative'>
            <img className='w-20 logo_black ' src="/logo_black.png" alt="logo" />
            <img className={`w-20 logo_white absolute inset-0 opacity-0 ${pathname === "/contact" && "opacity-100"} `} src="/logo_white.png" alt="logo" />
          </Link>
          <div className="max-sm:hidden flex items-center gap-x-5">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;

              return (
                <div key={i} className={`navLink  w-fit  text-sm uppercase aeonik  group cursor-pointer ${pathname === "/contact" ? "text-white" : "md:font-semibold text-black"}`}>
                  <Link href={link.href} className="relative  leading-none">
                    {link.label}

                    <span
                      className={`
                        navLinkBar
                        ${pathname === "/contact" ? "bg-white" : "bg-black"}
              absolute left-0 bottom-0 h-[1.5px] rounded-full w-full
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
        <div className="md:w-[25%] flex items-center justify-end">
          <Link href={"/contact"} onClick={() => setOpen(false)}>
            <Button text={"Get in Touch"} />
          </Link>
          <div className={` md:hidden navLink  w-fit  text-sm uppercase aeonik  group cursor-pointer ${pathname === "/contact" ? "text-white" : "md:font-semibold text-black"}`}>
            <Hamburger toggled={isOpen} toggle={() => setOpen(!isOpen)} size={25} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header