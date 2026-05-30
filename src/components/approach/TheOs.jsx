"use client";
import React, { useRef } from 'react'
import SectionHeading from '../common/SectionHeading'
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const processData = [
  {
    id: 1,
    tag: "PICK",
    img: "/images/approach/pick.png",
    title: "Audit & Align",
    description:
      "Listen to category, competition and culture. Establish a clear baseline.",
    output: "360° Brand Diagnosis",
  },
  {
    id: 2,
    tag: "REFRAME",
    img: "/images/approach/reframe.png",
    title: "Reframe & Reimagine",
    description:
      "Identify growth bottlenecks. Redefine purpose and positioning for market impact.",
    output: "Sharper Architecture",
  },
  {
    id: 3,
    tag: "DESIGN",
    img: "/images/approach/design.png",
    title: "Design the Engine",
    description:
      "Build the experience layer, identity, packaging, retail-ready, high-converting digital.",
    output: "Brand System That Performs",
  },
  {
    id: 4,
    tag: "SCALE",
    img: "/images/approach/scale.png",
    title: "Scale with Intelligence",
    description:
      "Activate growth, performance media, authentic content, community building.",
    output: "Better CAC, Higher Retention",
  },
  {
    id: 5,
    tag: "CAPITALISE",
    img: "/images/approach/capitalise.png",
    title: "Institutionalise & Capitalise",
    description:
      "Embed governance. Activate our network. Shape the investor narrative. Open doors.",
    output: "Funding-Ready Brand",
  },
];

const TheOs = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useGSAP(() => {
    const slider = sliderRef.current;
    const container = containerRef.current;

    if (!slider || !container) return;

    const updateAnimation = () => {
      const totalWidth = slider.scrollWidth;
      const viewportWidth = window.innerWidth;


  const extraOffset = window.innerWidth >= 768 ? 96 : 15;

  const maxTranslate =
    totalWidth - viewportWidth + extraOffset;

      gsap.to(slider, {
        x: -maxTranslate,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    };

    updateAnimation();

    window.addEventListener("resize", updateAnimation);

    return () => {
      window.removeEventListener("resize", updateAnimation);
    };
  });

  return (
    <div className="w-full  pt-12 md:pt-24 ">
      <SectionHeading
        btnText="The OS"
        heading="A phase-gated journey from vision to velocity."
        desc="Five phases. Clear outputs. We don’t just advise, we co-create." />

      <div ref={containerRef} className=" w-full h-[300vh]">
        <div className=" w-screen sticky top-0 h-screen flex flex-col gap-y-16 justify-center overflow-hidden">
          <div
            ref={sliderRef}
            className="slider flex gap-x-5  px-4 md:px-24"
          >
            {processData.map((item, i) => (
              <div
                key={i}
                className=" w-[95vw] md:w-[40vw] lg:w-[30vw] aspect-[3/4] text-white relative  shrink-0 "
              >

                <div className="w-full h-full relative overflow-hidden">
                  <Image
                    fill
                    src={item.img}
                    className="object-cover"
                    alt="img"
                  />
                </div>
                <div className="absolute w-full h-full bg-linear-to-b from-transparent from-65% to-100% to-[#000713] inset-0"></div>
                <div className=' absolute p-8 space-y-5  bottom-0 left-0 w-full'>
                  <h4 className='leading-none mt-5 mb-1'>{item.title}</h4>
                  <div className="w-24 h-1 rounded-full bg-[#ffffff]"></div>
                  <p className=" opacity-80 leading-tight">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheOs;