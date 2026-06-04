"use client";
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import SectionHeading from '../common/SectionHeading';
import { Link } from 'next-view-transitions';

const Clients = () => {

  const clientsData = [
    {
      icon: "/images/clients/1_Vishwa_Samudra.png"
    },
    {
      icon: "/images/clients/2_Rupay.png"
    },
    {
      icon: "/images/clients/3_Devgn.png"
    },
    {
      icon: "/images/clients/6_Imagine.png"
    },
    {
      icon: "/images/clients/9_Piramal.png"
    },
    {
      icon: "/images/clients/10_Prominance.png"
    },
    {
      icon: "/images/clients/13_Flaunt Your Ink.png"
    },
    {
      icon: "/images/clients/14_SDAF.png"
    },
    {
      icon: "/images/clients/15_Superyou.png"
    },
    {
      icon: "/images/clients/16_TLH.png"
    },
    {
      icon: "/images/clients/19_Ellementry.png"
    },
  ]

  const containerRef = useRef(null);

  // useEffect(() => {
  //   const boxes = containerRef.current.querySelectorAll(".client-box");

  //   boxes.forEach((box) => {
  //     const icon = box.querySelector(".client-icon");
  //     const img = box.querySelector(".client-img");

  //     box.addEventListener("mouseenter", () => {
  //       gsap.to(icon, { filter: "invert(0%)", duration: 0.15, ease: "power3.out" });
  //       gsap.to(img, { opacity: 1, scale: 1, duration: 0.15, ease: "power3.out" });
  //     });

  //     box.addEventListener("mouseleave", () => {
  //       gsap.to(icon, { filter: "invert(100%)", duration: 0.3, ease: "power3.in" });
  //       gsap.to(img, { opacity: 0, scale: 1.05, duration: 0.3, ease: "power3.in" });
  //     });
  //   });

  //   return () => {
  //     boxes.forEach((box) => {
  //       box.replaceWith(box.cloneNode(true)); 
  //     });
  //   };
  // }, []);

  return (
    <>
      <div className="  py-12 md:py-24 ">

        <div className="w-full space-y-5 md:space-y-16">
          <SectionHeading
            btnText="who trust us"
            heading="Trusted by  visionary brands."
            desc={"We collaborate with industry leaders and emerging icons to create bold digital experiences that leave a lasting impression."} />
          <div
            ref={containerRef}
            className="container w-full grid grid-cols-3 md:grid-cols-6"
          >
            {clientsData
              .map((item, index) => (
                <div
                  key={index}
                  className="group client-box aspect-square border border-[#8585855b] overflow-hidden relative flex items-center justify-center"
                >
                  <img
                    className="client-icon invert-100 group-hover:scale-80 transition-all duration-150 absolute z-[1] w-[90%] "
                    src={item.icon}
                    alt="logo"
                  />
                </div>
              ))}
            <Link href="/contact" className="w-full h-full bg-[#0a369d] p-5 hover:scale-90 tranition-transform duration-300 flex flex-col justify-between text-white">
              <p className="uppercase text-xs  opacity-70">
                Join the list
              </p>
              <h5 className="  leading-none">
                Ready to become our next success story?
              </h5>

            </Link>

          </div>
        </div>
      </div>

    </>
  )
}

export default Clients