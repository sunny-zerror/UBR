"use client"
import React, { useRef } from 'react'
import DotButton from '../common/DotButton'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'
import Image from 'next/image';
import ColorBends from './../animation/ColorBends';
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
      delay: 1.5
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
      delay: 0.5
    })

    gsap.to(".hero_bg", {
      scrollTrigger: {
        trigger: ".hero_section",
        start: "bottom top",
        toggleActions: "play none none reverse",
      },
      display: "none"
    });
  })

  return (
    <div className=" hero_section w-full h-screen   overflow-hidden text-white content_box relative ">
      <div className="absolute inset-0 z-[-1] hero_bg night_bg  opacity-0">
        <ColorBends
          colors={["#ffffff", "#ffffff", "#ffffff", "#ffffff"]}
          rotation={180}
          speed={0.2}
          scale={1}
          frequency={1.5}
          warpStrength={1}
          mouseInfluence={1}
          noise={0}
          parallax={0.5}
          iterations={1}
          intensity={1.5}
          bandWidth={6}
          transparent
          autoRotate={0}
        />
      </div>
      <div className="gradient h-full w-full absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent from-[80%] to-white to-[100%]"></div>
      <div className='container flex items-end pb-10  md:pb-16'>
        <div className="absolute mix-blend-difference max-sm:hidden top-1/2 -translate-y-1/2 z-10 left-4 xl:left-24 ">
          <DotButton text="A venture builder for India" className={"opacity-0  text-white!  blink_btn"} />
        </div>
        <div className="pointer-events-none w-full  relative z-10 md:grid items-end grid-cols-6">
          <DotButton text="A venture builder for India" className={"opacity-0 md:hidden  text-white!  blink_btn"} />
          <h1 className=' max-sm:mb-5 max-sm:mt-2 max-sm:hidden capitalize leading-12 md:leading-24 tracking-tighter heading_split col-span-4'>The integrated model <br /> for    non-linear growth.</h1>
          <h1 className=' max-sm:mb-5 max-sm:mt-2 md:hidden capitalize leading-12 md:leading-24 tracking-tighter heading_split col-span-4'>The integrated model  for    non-linear growth.</h1>
          <div className=" pb-4  pointer-events-none relative z-10 w-full col-span-2">
            <p className='  w-full leading-tight md:text-lg   paragraph_split'>Built for entrepreneurs chasing meaningful outcomes.</p>
            <p className='leading-tight w-full md:text-lg   paragraph_split  mt-5'>Built by <b> Binoy Khimji,</b> <b> Ashish Chowdhry </b> and  <b>Kaushik Sundararajan.</b></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero