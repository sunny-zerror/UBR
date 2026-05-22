import { Link } from 'next-view-transitions'
import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <div className='w-full border-b border-black/10 bg-[#CDCECF] z-100 fixed py-3 '>
      <div className=" container  flex items-center justify-between   ">
        <div className=" w-[25%] relative">
          <Link href="/">
            <img className='w-20' src="/logo.png" alt="logo" />
          </Link>
        </div>
        <div className=" w-1/2 capitalize  flex items-center justify-center gap-x-10">
          <Link href="/" className='hover:underline'>Home</Link>
          <a href="#about" className='hover:underline'>Approach</a>
          <Link href="/work" className='hover:underline'>Work</Link>
          <Link href="/team" className='hover:underline'>Team</Link>
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