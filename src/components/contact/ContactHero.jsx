import React from 'react'
import DotButton from '../common/DotButton'
import { RiArrowDownLine } from '@remixicon/react';

const foundersData = [
  {
    role: "Co-Founder",
    company: "UBR",
    name: "Binoy Khimji",
    email: "binoykhimji@gmail.com",
  },
  {
    role: "Co-Founder",
    company: "DISRPTVE",
    name: "Ashish Chowdhry",
    email: "ashish@disrptve.com",
  },
  {
    role: "Co-Founder",
    company: "DISRPTVE",
    name: "Kaushik Sundararajan",
    email: "kaushik@disrptve.com",
  },
];
const ContactHero = () => {
  return (
    <div className='container pt-32  bg-[#CDCECF]'>
      <div className=" pb-16 border-b border-black/10">
        <div className="space-y-5">
          <DotButton text="Contact" />
          <h1 className='capitalize'>Let’s <span className='text-[#F20908]'>build</span> <br /> something.</h1>
        </div>
        <div className="w-full flex justify-end">
          <div className="w-[35%]">
            <p className='text-xl  leading-tight'>Founders, talent partners, investors and retailers, we’d like to hear from you. Tell us where you are and we’ll come back within two working days.</p>
          </div>
        </div>
      </div>
      <div className="w-full pt-16 pb-24 grid grid-cols-2 ">
        <div className=" space-y-5">
          <DotButton text="Direct" />
          <h2 className='capitalize'>Mail us</h2>
        </div>
        <div className="">
          <div className="col-span-2">
            <div className="grid mt-5 grid-cols-1 gap-7">
              {foundersData.map((item, index) => (
                <div
                  key={index}
                  className=" pb-2 border-b flex items-center justify-between group cursor-pointer border-black/10 "
                >
                  <div className="space-y-5">
                    <div className="">
                      <h6 className="flex items-center gap-2 text-sm uppercase ">
                        <span>{item.role}</span>
                        <span>•</span>
                        <span>{item.company}</span>
                      </h6>
                      <h5 className="">
                        {item.name}
                      </h5>
                    </div>
                    <a
                      href={`mailto:${item.email}`}
                      className="inline-block  "
                    >
                      {item.email}
                    </a>
                  </div>
                  <div className={`size-10 center rounded-full border border-black/10 group-hover:bg-[#F20908] group-hover:text-white transition-all duration-300`}>
                    <RiArrowDownLine size={18} className='-rotate-[135deg] group-hover:-rotate-90 transition-all duration-300' />
                  </div>
                </div>
              ))}
            </div>
          </div></div>
      </div>
    </div>
  )
}

export default ContactHero