"use client"
import React from 'react'
import DotButton from '../common/DotButton'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger, SplitText)

const WorkListingHero = () => {

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
    tl.to([".blink_btn",], {
      opacity: 1,
      stagger: 0.15
    }, "<");

  });

  return (
    <div className=" content_box w-full bg-black">
      <div className='container h-[70vh]! items-end grid grid-cols-6  pt-32 pb-16'>
        <div className="space-y-5 col-span-4">
          <DotButton text="Selected work" className={"blink_btn opacity-0 text-[#C4BAB0]!"} />
          <h1 className=' heading_split leading-none capitalize'>Brands we have <br />  backed.</h1>
        </div>
        <div className="col-span-2"></div>
        <div className="col-span-4"></div>
        <div className="w-full col-span-2 flex flex-col justify-end">
          <p className=' paragraph_split leading-tight'>Capital and celebrity, structured as a single move. Strategic advisory anchored to talent. Full-stack engagements that compound.</p>
        </div>
      </div>
    </div>
  )
}

export default WorkListingHero