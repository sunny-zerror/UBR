"use client";
import { RiCloseLine } from '@remixicon/react'
import React, { useRef, useState } from 'react'
import DotButton from '../common/DotButton'
import SectionHeading from '../common/SectionHeading'
import { Link } from 'next-view-transitions'
import { WorkData } from '@/store/WorkData'
import Marquee from 'react-fast-marquee'
import gsap from 'gsap';

const SelectedWork = () => {

    const marqueeRef = useRef(null);


    const xTo = useRef(null);
    const yTo = useRef(null);

    const mouse = useRef({
        x: 0,
        y: 0,
    });

    const handleMouseEnter = (e, title) => {

        if (!marqueeRef.current) return;

        mouse.current.x = e.clientX + 5;
        mouse.current.y = e.clientY - 25;

        gsap.set(marqueeRef.current, {
            x: mouse.current.x,
            y: mouse.current.y,
        });

        // create smooth followers once
        if (!xTo.current || !yTo.current) {
            xTo.current = gsap.quickTo(marqueeRef.current, "x", {
                duration: 0.4,
                ease: "expo.out",
            });

            yTo.current = gsap.quickTo(marqueeRef.current, "y", {
                duration: 0.4,
                ease: "expo.out",
            });
        }

        gsap.to(marqueeRef.current, {
            width: "6rem",
            paddingRight: ".5rem",
            paddingLeft: ".5rem",
            autoAlpha: 1,
            duration: 0.3,
            ease: "expo.out",
        });
    };

    const handleMouseMove = (e) => {
        if (!marqueeRef.current) return;

        mouse.current.x = e.clientX + 5;
        mouse.current.y = e.clientY - 25;

        xTo.current?.(mouse.current.x);
        yTo.current?.(mouse.current.y);
    };

    const handleMouseLeave = () => {
        if (!marqueeRef.current) return;

        gsap.to(marqueeRef.current, {
            width: 0,
            paddingRight: 0,
            paddingLeft: 0,
            autoAlpha: 0,
            duration: 0.3,
            ease: "expo.out",
        });
    };

    return (
        <div className='py-12 md:py-24 space-y-5 md:space-y-16  border-b border-black/50  '>
            <div
                ref={marqueeRef}
                className="fixed top-0 left-0 pointer-events-none z-[999] w-0 opacity-0 text-white uppercase aeonik text-xs bg-[#000063] px-0 py-1 will-change-transform overflow-hidden"
            >
                <Marquee speed={40}>
                    <p className="mr-1 whitespace-nowrap">
                        View CaseStudy |
                    </p>
                </Marquee>
            </div>
            <SectionHeading
                btnText="Selected work"
                heading="Brands we have backed."
                desc={"Capital and celebrity, structured as a single move. Strategic advisory anchored to talent. A full-stack engagement that compounds."} />
            <div className="container grid md:grid-cols-2 gap-x-5 gap-y-10">
                {WorkData.map((item, i) => (
                    <Link onMouseEnter={(e) => handleMouseEnter(e, item.title)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave} key={i} href={`/work/${item.slug}`} className=" w-full space-y-4 group cursor-pointer">
                        <div className={`w-full center aspect-video overflow-hidden rounded-sm  ${item.classname} `}>
                            <div data-img-effect className="w-full h-full center">
                                <img className=' max-sm:scale-50 md:group-hover:scale-110 transition-all duration-300' src={item.image} alt="img" />
                            </div>
                        </div>
                        <div className="">
                            <h6 className='opacity-80'>{item.engagement}</h6>
                            <h5 className='capitalize md:font-semibold flex items-center gap-x-2'>{item.title}</h5>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SelectedWork