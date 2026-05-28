"use client"
import React from 'react'
import { RiArrowDownLine } from '@remixicon/react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'
import { useGSAP } from '@gsap/react'
import SectionHeading from '../common/SectionHeading';
gsap.registerPlugin(ScrollTrigger, SplitText)

const audiencesData = [
  {
    id: "01",
    group: "Founders",
    title: "Pre-launch or early traction",
    description:
      "You have a credible plan or a brand finding its first thousand customers. You want capital and operating help in the same conversation.",
    tags: ["Capital", "Operating help", "0 → 1"],
  },
  {
    id: "02",
    group: "Founders",
    title: "Scaling brands",
    description:
      "Already operating, generating revenue, and ready for the next leg. A partner who can sharpen the P&L, fix the leaky parts, and bring talent and capital to compound what is working.",
    tags: ["P&L", "Talent", "Compounding"],
  },
  {
    id: "03",
    group: "Founders",
    title: "Established brands",
    description:
      "You've built a business. Reignite growth, restructure for profitability, or bring in a celebrity co-owner who can change the brand's trajectory.",
    tags: ["Growth", "Restructure", "Celebrity co-owner"],
  },
  {
    id: "04",
    group: "Talent & Creators",
    title: "Equity, not endorsements",
    description:
      "You want a real stake in a brand you help build — not another one-off campaign.",
    tags: ["Equity", "Co-ownership"],
  },
  {
    id: "05",
    group: "Investors",
    title: "Back consumer ventures",
    description:
      "Back the brands we're building, or co-invest into deals already in motion.",
    tags: ["LP", "Co-invest", "Deal flow"],
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
      yPercent: 0,
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
    <div className=' contact_hero w-full pb-12 md:pb-24   night_bg text-white'>
      <div className=" container mb-12 md:mb-24 content_box h-[60vh]! w-full flex items-end pb-5 border-b border-white/50">
        <div className="space-y-5 w-full  relative z-10 ">
          <h1 className=' heading_split md:w-[80%] leading-none capitalize'>Get In Touch</h1>
          <p className=' paragraph_split md:w-[45%] leading-tight'>Tell us what you are building, raising, or backing. One of us reads everything that comes in and replies within two working days.</p>
        </div>
      </div>
      <SectionHeading
        heading={"Five seats. One table."}
        btnText={"Who we partner with"}
        desc={"Whichever seat you're in, the answer starts the same way — with a direct conversation about what you're building, and what it needs next."}
      />
      <div className="container md:pt-16">

        {audiencesData.map((item, index) => (
          <div key={index} className=" group border-b pt-10 border-white/30 w-full grid grid-cols-6">
            <div className="col-span-2 space-y-5">
              <h6>{item.id} </h6>
              <h6> {item.group}</h6>
            </div>
            <div className=" max-sm:pb-5 col-span-4 md:col-span-3 capitalize">
              <h4 className=' md:h-20 leading-tight '>{item.title}</h4>
              <div className="md:h-0 group-hover:h-[10rem] transition-all duration-300 overflow-hidden">
                <p className='  w-full max-sm:mt-2 md:w-[80%] leading-tight text-sm  md:text-lg'>{item.description}</p>
                <div className="flex gap-x-2 mt-5 leading-none">
                  {item.tags.map((tag, index) => (
                    <span key={index} className=' px-2 py-1 text-xs leading-none aeonik uppercase border-white border  transition-all duration-300'>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="max-sm:hidden flex justify-end">
              <div className={` size-8 md:size-10 center rounded-full border border-white/10 group-hover:bg-[#FFFFFF] group-hover:text-[#000000] transition-all duration-300`}>
                <RiArrowDownLine size={16} className='-rotate-[135deg] group-hover:-rotate-90 transition-all duration-300' />
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default ContactHero