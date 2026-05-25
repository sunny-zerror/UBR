"use client"
import React, { useRef } from 'react'
import DotButton from '../common/DotButton'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'
gsap.registerPlugin(ScrollTrigger, SplitText)

const Hero = () => {
const imageRef = useRef(null);
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

   const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;

    // mouse position from center
    const x = (e.clientX - innerWidth / 2) / innerWidth;
    const y = (e.clientY - innerHeight / 2) / innerHeight;

    gsap.to(imageRef.current, {
      rotateY: x * 12,
      rotateX: -y * 12,

      x: x * 40,
      y: y * 40,

      transformPerspective: 1200,
      transformOrigin: "center",

      duration: 1.2,
      ease: "power3.out",
    });
  };

  const reset = () => {
    gsap.to(imageRef.current, {
      rotateX: 0,
      rotateY: 0,
      x: 0,
      y: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  };
  return (
    <div className=" hero_section w-full h-screen content_box relative bg-[#000000]">
      <div className='container grid grid-cols-6  pt-[40vh] text-white pb-16'>
<div
      className="absolute inset-0 overflow-hidden perspective-[1200px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
    >
      <img
        ref={imageRef}
        className="hero_bg opacity-0 w-full h-full absolute inset-0 object-cover z-[1] scale-110 scale-x-[-1] will-change-transform"
        src="/images/hero_bg.avif"
        alt=""
      />
    </div>        <div className="space-y-5 relative z-10 col-span-4">
          <DotButton text="A venture builder for India" className={"opacity-0 blink_btn"} />
          <h1 className=' capitalize heading_split'>The integrated model <br /> for  <span className=''>  non-linear</span> <br /> growth.</h1>
        </div>
        <div className=" relative z-10 w-full col-span-2 flex flex-col justify-end">
          <p className='text-xl  leading-5.5 paragraph_split'>We build consumer brands faster, profitably. Talent, capital, strategy, design and distribution, fused into one operating system that replaces paid CAC with trust.</p>
          <p className='text-xl leading-5.5 paragraph_split  mt-5'>Built by <b> Binoy Khimji,</b> <b> Ashish Chowdhry </b> and  <b>Kaushik Sundararajan.</b></p>
        </div>
      </div>
    </div>
  )
}

export default Hero