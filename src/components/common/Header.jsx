"use client";
import { Link } from 'next-view-transitions'
import React from 'react'
import Button from './Button'
import { usePathname } from 'next/navigation'

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
  return (
    <div className='w-full border-b border-black/10 bg-white z-100 fixed py-3 '>
      <div className=" container  flex items-center justify-between   ">
        <div className=" w-[25%] relative">
          <Link href="/">
            <img className='w-20' src="/logo.png" alt="logo" />
          </Link>
        </div>
        <div className=" w-1/2 capitalize  flex items-center justify-center gap-x-10">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;

            return (
              <div key={i} className="w-fit flex flex-col group cursor-pointer">
                <Link href={link.href} className="relative leading-none">
                  {link.label}

                  <span
                    className={`
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