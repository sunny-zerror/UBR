"use client"
import React from 'react'
import DotButton from '../common/DotButton'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'
gsap.registerPlugin(ScrollTrigger, SplitText)

const Hero = () => {

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
    <div className="w-full content_box ">
      <div className='container grid grid-cols-6  pt-32 pb-16'>
        <div className="space-y-5 col-span-4">
          <DotButton text="A venture builder for India" className={"opacity-0 blink_btn"} />
          <h1 className=' capitalize heading_split'>The integrated model <br /> for  <span className='text-[#F20908]'>  non-linear</span> <br /> growth.</h1>
        </div>
        <div className="col-span-2"></div>
        <div className="col-span-4"></div>
        <div className="w-full col-span-2 flex flex-col justify-end">
          <p className='text-xl  leading-5.5 paragraph_split'>We build consumer brands faster, profitably. Talent, capital, strategy, design and distribution, fused into one operating system that replaces paid CAC with trust.</p>
          <p className='text-xl leading-5.5 paragraph_split  mt-5'>Built by <b> Binoy Khimji,</b> <b> Ashish Chowdhry </b> and  <b>Kaushik Sundararajan.</b></p>
        </div>
      </div>
    </div>
  )
}

export default Hero