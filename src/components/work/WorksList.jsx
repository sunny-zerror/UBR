"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import Marquee from "react-fast-marquee";
import { Link } from "next-view-transitions";
import { WorkData } from "@/store/WorkData";

export const WorksList = () => {
    const marqueeRef = useRef(null);

    const [activeTitle, setActiveTitle] = useState("Project");

    const xTo = useRef(null);
    const yTo = useRef(null);

    const mouse = useRef({
        x: 0,
        y: 0,
    });

    const handleMouseEnter = (e, title) => {
        setActiveTitle(title);

        if (!marqueeRef.current) return;

        // set current mouse position instantly
        mouse.current.x = e.clientX + 20;
        mouse.current.y = e.clientY - 20;

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

        mouse.current.x = e.clientX + 20;
        mouse.current.y = e.clientY - 20;

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
        <>
            {/* cursor marquee */}
            <div
                ref={marqueeRef}
                className="fixed top-0 left-0 pointer-events-none z-[999] w-0 opacity-0 text-white uppercase aeonik text-xs bg-[#29227d] px-0 py-1 will-change-transform overflow-hidden"
            >
                <Marquee speed={40}>
                    <p className="mr-1 whitespace-nowrap">
                        View {activeTitle} |
                    </p>
                </Marquee>
            </div>

            <div className="container pt-12 md:pt-24 space-y-10 md:space-y-20">
                {WorkData.map((item, i) => (
                    <Link
                        href={`/work/${item.slug}`}
                        key={i}
                        onMouseEnter={(e) => handleMouseEnter(e, item.title)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="border-b pb-10 md:pb-20 border-black/50 last:border-none w-full items-stretch flex flex-col-reverse md:grid grid-cols-5 gap-x-10"
                    >
                        <div className=" max-sm:mt-2 col-span-2 flex flex-col justify-between">
                            <div>
                                <h6 className="opacity-80">{item.category}</h6>

                                <h3
                                    data-para-effect
                                    className="md:font-semibold capitalize leading-tight md:leading-15!"
                                >
                                    {item.title}
                                </h3>
                            </div>

                            <div className="space-y-4">
                                <p className="leading-tight md:text-lg opacity-80 md:w-[80%]">
                                    {item.description}
                                </p>

                                <div className="relative flex flex-wrap gap-2">
                                    {item.services.map((tag, i) => (
                                        <div
                                            key={i}
                                            className="font-medium px-4 py-2 bg-[#29227d] text-white"
                                        >
                                            <p className="text-xs aeonik uppercase">{tag}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div
                            className={`col-span-3 overflow-hidden aspect-video center ${item.classname}`}
                        >
                            <div data-img-effect className="w-full  h-full center">
                                <img src={item.image} alt="img" className="max-sm:scale-50" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};