"use client"
import React from 'react'
import { RiArrowDownLine } from '@remixicon/react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger, SplitText)

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

    useGSAP(() => {
    const heading_split = SplitText.create(".heading_split", {
      type: "lines",
      linesClass: "split-line"
    });
    const paragraph_split = SplitText.create(".paragraph_split", {
      type: "lines",
      linesClass: "split-line"
    });

    [...heading_split.lines, ...paragraph_split.lines].forEach((line) => {
      const wrapper = document.createElement("div");

      wrapper.classList.add("line-wrapper");

      line.parentNode.insertBefore(wrapper, line);
      wrapper.appendChild(line);
    });

    gsap.set([heading_split.lines, paragraph_split.lines], { yPercent: 100 });

    const tl = gsap.timeline({
      delay: .5
    })
    tl.to(".content_box", {
      opacity: 1,
      duration: 0.01
    })
    tl.to(".border_bar", {
      height: "100%",
      stagger: 0.2
    });
    tl.to(heading_split.lines, {
      yPercent: -8,
      duration: 0.8,
      ease: "expo.out",
      stagger: 0.05,
    }, "<");
    tl.to(paragraph_split.lines, {
      yPercent: 0,
      duration: 0.8,
      ease: "expo.out",
      stagger: 0.05,
    }, "<+0.2");

  });

  return (
    <div className='container pt-32  bg-[#CDCECF]'>
      <div className="  content_box pb-16 border-b border-black/10">
        <div className="space-y-5">
          <h1 className=' heading_split capitalize text-white'>Get In Touch <br /> <span className=' normal-case text-black hover:opacity-80 cursor-pointer transition-all duration-300'>info@ubr.com</span></h1>
        </div>
      </div>
      <div className=" w-full pt-16 pb-24 grid grid-cols-6 ">
        <div className=" content_box col-span-3">
          <p className=' paragraph_split capitalize w-[60%] opacity-80 leading-tight'>Founders, talent partners, investors and retailers, we’d like to hear from you. Tell us where you are and we’ll come back within two working days.</p>
        </div>
          <div className="col-span-3">
            <div className="space-y-7">
              {foundersData.map((item, index) => (
                <div
                  key={index}
                  className=" hover:px-3 transition-all duration-300 pb-2 border-b flex items-center justify-between group cursor-pointer border-black/10 "
                >
                  <div className="space-y-5">
                    <div className="">
                      <h5 className="">
                        {item.name}
                      </h5>
                      <h6 className="flex items-center gap-2 opacity-80 text-sm uppercase ">
                        <span>{item.role}</span>
                        <span>•</span>
                        <span>{item.company}</span>
                      </h6>
                    </div>
                    <a
                      href={`mailto:${item.email}`}
                      className="inline-block  "
                    >
                      {item.email}
                    </a>
                  </div>
                  <div className={`size-10 center rounded-full border border-black/10 group-hover:bg-[#191b1d] group-hover:text-white transition-all duration-300`}>
                    <RiArrowDownLine size={18} className='-rotate-[135deg] group-hover:-rotate-90 transition-all duration-300' />
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export default ContactHero