"use client"
import React, { useEffect, useRef } from 'react'
import DotButton from '../common/DotButton'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'
import ColorBends from './../animation/ColorBends';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger, SplitText)

const modelCards = [
  {
    brand: "UBR Brings",
    logo: "/images/logo-ubrxdisrptve.png",
    title: "The Capital And The Muscle.",
    desc: "A capital and operating advisory founded by Binoy Khimji. Institutional capital access, multiple consumer ventures built and scaled, and deep distribution intelligence across India. Anchored in the Cornerstone Group ecosystem.",
    img: "/images/home/ubr_bg.png",
    tags: [
      {
        label: "CAPITAL",
        icon: "/icons/capital.png",
      },
      {
        label: "OPERATIONS",
        icon: "/icons/operation.png",
      },
      {
        label: "DISTRIBUTION",
        icon: "/icons/distribution.png",
      }
    ],
  },

  {
    brand: "DISRPTVE Brings ",
    logo: "/images/logo-disrptve-dark.png",
    title: "The Brand And The Audience.",
    desc: "A marketing and communications agency built by Ashish Chowdhry and Kaushik Sundararajan. Over a decade of brand strategy across Indian consumer categories, with deep access to celebrity and creator talent. Built by serial entrepreneurs who have raised capital and scaled multiple businesses themselves.",
    img: "/images/home/disrptve_bg.png",
    tags: [
      {
        label: "TALENT",
        icon: "/icons/talent.png",
      },
      {
        label: "BRAND",
        icon: "/icons/brand.png",
      },
      {
        label: "AUDIENCE",
        icon: "/icons/audience.png",
      },
    ],
  },
]

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

    gsap.to([".hero_bg", ".video_section"], {
      opacity: 1,
      delay: 0.5,
      stagger: 1
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero_section",
        start: "top top",
        end:"+=300%",
        pin: true,
        scrub: true,
        pinSpacing: true,
      }
    })

    tl.to(".hero_content", {
      opacity: 0
    })
    tl.to(".video_section", {
      width: "100vw",
      ease: "linear",
      rotateX: 0,
      height: "100vh",
      borderRadius: "0px"
    }, "<")
    tl.to(".over_txt", {
      top: "0%",
      ease: "linear",
    })
    tl.to(".over_txt", {
      top: "-100%",
      ease: "linear",
    })
    tl.to(".card_paren", {
      top: "0%",
      ease: "linear",
    }, "<")
    tl.from(".card_1", {
      opacity:0,
      transform: "translateY(105%)",
      ease: "linear",
    })
  })

  return (
    <div className=" hero_section w-full h-screen perspective-distant center  overflow-hidden text-white content_box relative ">
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

      <div
        className="video_section opacity-0 rotate-x-20 w-[30vw] h-[20vw]  absolute  z-[-1] rounded-xl overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <video src="https://cdn.sanity.io/files/5uq66tk5/production/4fee2d6b505315287e75383bb655905060cdcb06.mp4" loop autoPlay muted playsInline className='cover'></video>
      </div>

      <div className=" top-full absolute w-full h-full text-center center  over_txt bg-[#000063]">
        <h1 className=' font-semibold  leading-tight  text-white'>Together, UBR × DISRPTVE is a venture builder that installs the operating model behind profitable scaling, whether you are launching a new brand or reigniting an established one.</h1>
      </div>

      <div className=' hero_content container h-screen flex items-end pb-10  md:pb-16'>
        <div className="pointer-events-none w-full  relative z-10 md:grid items-end grid-cols-6">
          <DotButton text="A venture builder for India" className={"opacity-0 md:hidden  text-white!  blink_btn"} />
          <h1 className=' max-sm:mb-5 max-sm:mt-2 max-sm:hidden capitalize leading-12 lg:leading-24 tracking-tighter heading_split col-span-4'>Built for entrepreneurs chasing meaningful outcomes.</h1>
          <h1 className=' max-sm:mb-5 max-sm:mt-2 md:hidden capitalize leading-12 md:leading-24 tracking-tighter heading_split col-span-4'>Built for entrepreneurs chasing meaningful outcomes.</h1>
          <div className=" pb-4  pointer-events-none relative z-10 w-full col-span-2">
            <p className='leading-tight w-full md:text-lg   paragraph_split  mt-5'>Built by <b> Binoy Khimji,</b> <b> Ashish Chowdhry </b> and  <b>Kaushik Sundararajan.</b></p>
          </div>
        </div>
      </div>

      <div className=" card_paren top-full absolute w-full h-full inset-0 bg-[#000063]">
        <div className="w-full container flex h-full items-center overflow-hidden">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
            {modelCards.map((card, index) => (
              <div
                key={index}
                className={` card_${index} group relative border bg-white flex flex-col justify-between text-black  rounded-lg p-7 md:p-10 overflow-hidden `}
              >
                <div className="relative">
                  <div className="relative h-10 mb-5  ">
                    <img
                      src={card.logo}
                      alt="logo"
                      className="h-full"
                    />
                  </div>
                  <h4 className="leading-none capitalize md:md:font-semibold">
                    {card.brand}
                  </h4>
                  <h4 className="leading-none capitalize md:md:font-semibold">
                    {card.title}
                  </h4>
                  <p className="relative mt-5 md:mt-10 opacity-80  leading-tight md:text-lg">
                    {card.desc}
                  </p>
                </div>


                <div className="relative mt-5 md:mt-10 grid grid-cols-3  gap-3">
                  {card.tags.map((tag, i) => {
                    return (
                      <div
                        key={i}
                        className={`rounded-md font-medium text-sm p-3 border border-black/20  bg-[#FFFFFF80] text-black`}
                      >
                        <div className="flex flex-col justify-center items-center gap-5">
                          <Image height={40} width={40} src={tag.icon} className='' alt='icon' />

                          <p className=" max-sm:text-xs aeonik md:md:font-semibold   uppercase">
                            {tag.label}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero