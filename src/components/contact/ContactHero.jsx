"use client"
import React from 'react'
import { RiArrowDownLine } from '@remixicon/react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'
import { useGSAP } from '@gsap/react'
import SectionHeading from '../common/SectionHeading';
gsap.registerPlugin(ScrollTrigger, SplitText)

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
    <div className=' contact_hero w-full   night_bg text-white'>
      <div className=" container  content_box h-[60vh]! w-full flex items-end pb-5">
        <div className="space-y-5 w-full  relative z-10 ">
          <h1 className=' heading_split md:w-[80%] leading-none capitalize'>Get In Touch</h1>
          <p className=' paragraph_split md:w-[45%] leading-tight'>Tell us what you are building, raising, or backing. One of us reads everything that comes in and replies within two working days.</p>
        </div>
      </div>
    </div>
  )
}

export default ContactHero