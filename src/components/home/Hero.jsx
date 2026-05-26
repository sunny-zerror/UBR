"use client"
import React, { useRef } from 'react'
import DotButton from '../common/DotButton'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'
import Image from 'next/image';
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

  useGSAP(() => {

    gsap.to(".hero_bg", {
      opacity: 1,
      delay: 1.5
    })

    gsap.to(".hero_bg", {
      scrollTrigger: {
        trigger: ".hero_section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: 200,
      ease: "none"
    });
  })

  return (
    <div className=" hero_section w-full h-screen overflow-hidden content_box relative bg-[#000000]">
      <div className='container flex items-end text-white pb-16'>
        <Image fill
          className="hero_bg absolute inset-0  opacity-0 cover"
          src="/images/hero_bg.png"
          alt=""
        />
        <div className="absolute top-1/2 -translate-y-1/2 z-10 left-8 ">
          <DotButton text="A venture builder for India" className={"opacity-0 text-white! blink_btn"} />
        </div>
        <div className="pointer-events-none w-full  relative z-10 grid items-end grid-cols-6">
          <h1 className=' capitalize leading-none tracking-tighter heading_split col-span-4'>The integrated model <br /> for    non-linear growth.</h1>
          <div className=" pb-4  pointer-events-none relative z-10 w-full col-span-2">
            <p className=' leading-tight  paragraph_split'>We build consumer brands faster, profitably. Talent, capital, strategy, design and distribution, fused into one operating system that replaces paid CAC with trust.</p>
            <p className='leading-tight  paragraph_split  mt-5'>Built by <b> Binoy Khimji,</b> <b> Ashish Chowdhry </b> and  <b>Kaushik Sundararajan.</b></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero