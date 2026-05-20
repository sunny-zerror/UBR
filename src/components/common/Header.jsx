import { Link } from 'next-view-transitions'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full border-b border-black/20 bg-white z-100 fixed py-3 '>
      <div className=" container  flex items-center justify-between   ">
        <div className=" w-[25%] relative">
          <Image src="/logo.png" alt="logo" width={80} height={80} />
        </div>
        <div className=" w-1/2 capitalize  text-sm  flex items-center justify-center gap-x-10">
          <Link href="/" className='hover:underline'>Home</Link>
          <a href="#about" className='hover:underline'>Approach</a>
          <a href="#works" className='hover:underline'>Work</a>
          <a href="#contact" className='hover:underline'>Team</a>
        </div>
        <div className="w-[25%] flex justify-end">
          <Link href={"/contact"}>
            <button className='bg-black text-white text-sm px-4 py-2.5 rounded-full'>Get in Touch</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header