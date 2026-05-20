"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useRef } from 'react'
gsap.registerPlugin(ScrollTrigger);

const OurThesis = () => {

    const containerRef = useRef()

useGSAP(() => {

    gsap.to(".bar_inner", {
        height: "100%",
        ease: "none",
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
        },
    });

    gsap.utils.toArray([
        ".box_1",
        ".box_2",
        ".box_3",
        ".box_4",
        ".box_5",
        ".box_6",
    ]).forEach((box) => {

        gsap.fromTo(
            box,
            {
                scale: 0,
                opacity: 0,
            },
            {
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: box,
                    start: "top center+=100",
                    toggleActions: "play none none reverse",
                    scrub: false,
                },
            }
        );
    });

}, { scope: containerRef });
    return (
        <div ref={containerRef} className='bg-blue w-full h-[280vh] relative'>
            <div className="container h-full flex ">
                <div className="w-1/2 h-screen sticky! top-0 flex flex-col gap-y-10 justify-center">
                    <h6 className=''>Our thesis</h6>
                    <h2 className=''>We replace paid CAC with  trust CAC.</h2>
                    <p className='text-lg leading-tight w-[80%] '>UBR × DISRPTVE is a venture builder that installs a complete operating system for profitable scaling, whether you are launching a new brand or reigniting an established one.</p>
                </div>
                <div className="w-1/2 h-full relative">
                    <div className="w-full h-[40vh]"></div>
                    <div className=" box_1 scale-0 w-full h-[40vh] relative flex  items-center justify-center">
                        <div className="px-8 py-6  absolute -translate-x-[60%] border bg-white text-blue rounded-lg">
                            <p className='text-2xl font-semibold'>Talent</p>
                        </div>
                        <div className="size-5 rounded-full bg-white"></div>
                    </div>
                    <div className=" box_2 scale-0 w-full h-[40vh] relative  flex  items-center justify-center">
                        <div className="size-5 rounded-full bg-white"></div>
                        <div className="px-8 absolute translate-x-[60%] py-6 border bg-white text-blue rounded-lg">
                            <p className='text-2xl font-semibold'>Capital</p>
                        </div>
                    </div>
                    <div className=" box_3 scale-0 w-full h-[40vh] relative  flex  items-center justify-center">
                        <div className="px-8 absolute -translate-x-[60%] py-6 border bg-white text-blue rounded-lg">
                            <p className='text-2xl font-semibold'>Design</p>
                        </div>
                        <div className="size-5 rounded-full bg-white"></div>
                    </div>
                    <div className=" box_4 scale-0 w-full h-[40vh] relative  flex  items-center justify-center">
                        <div className="size-5 rounded-full bg-white"></div>
                        <div className="px-8 absolute translate-x-[60%] py-6 border bg-white text-blue rounded-lg">
                            <p className='text-2xl font-semibold'>Strategy</p>
                        </div>
                    </div>
                    <div className=" box_5 scale-0 w-full h-[40vh] relative  flex  items-center justify-center">
                        <div className="px-8 py-6 absolute -translate-x-[60%] border bg-white text-blue rounded-lg">
                            <p className='text-2xl font-semibold'>Distribution</p>
                        </div>
                        <div className="size-5 rounded-full bg-white"></div>
                    </div>
                    <div className="box_6 scale-0 w-full h-[40vh]  flex flex-col  items-center justify-center">
                        <div className="size-5 rounded-full bg-white"></div>
                        <div className="px-8 py-6 border bg-white text-blue rounded-lg">
                            <p className='text-2xl font-semibold'>Sustainable Scale</p>
                        </div>
                    </div>
                    <div className="h-[77%] bg-white/10 w-1 rounded-full absolute top-[40vh] left-1/2 -translate-x-1/2">
                        <div className=" bar_inner w-full h-0 bg-white rounded-full"></div></div>
                </div>
            </div>
        </div>
    )
}

export default OurThesis