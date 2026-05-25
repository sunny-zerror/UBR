"use client";
import React, { useRef } from "react";
import DotButton from "../common/DotButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const collaborations = [
  "Vishwa Samudra",
  "Rupay",
  "Devgn Cinex",
  "Flipkart",
  "Imagine",
  "Tata",
  "Proost",
  "Prominance",
  "Sdaf",
  "SuperYou",
  "Candor Foods",
];

const Clients = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.to(".arc_container", {
      "--progress": 1,

      ease: "none",

      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="container h-[200vh]! bg-[#003049] relative"
    >
      <div className="arc flex flex-col gap-y-20 justify-center pt-24">
        <div className="space-y-5">
        <DotButton text={"who trust us"} />
        <h2 data-heading-effect className='capitalize w-[60%] '>Trusted by <br /> visionary brands.</h2>
        </div>
        <p data-para-effect className='text-xl leading-tight w-[40%] '>We collaborate with industry leaders and emerging icons to create bold digital experiences that leave a lasting impression.</p>
        <div
          className="arc_container"
          style={{
            "--total-items": collaborations.length,
            "--progress": 0,
          }}
        >
          {collaborations.map((item, index) => (
            <div
              key={index}
              className={`arc_item ${index < 3 ? "active" : ""}`}
              style={{
                "--index": index,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;