"use client";
import React, { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SectionHeading from '../common/SectionHeading';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const statsData = [
    {
        value: "$4.3",
        suffix: "T",
        title: "Consumer market by 2030",
        description:
            "India's spending becomes the world's second largest, expanding 46% from 2024.",
    },
    {
        value: "$600",
        suffix: "B",
        title: "Brand unlock",
        description:
            "Structural shift from unbranded retail creates white space for new players.",
    },
    {
        value: "28",
        suffix: "",
        title: "Median age",
        description:
            "Versus 39 in China. A young, aspirational population drives global consumption.",
    },
    {
        value: "3",
        suffix: "X",
        title: "E-commerce users by 2030",
        description:
            "Online shoppers more than triple, building a vast accessible marketplace.",
    },
    {
        value: "$350",
        suffix: "B",
        title: "Digital GMV by 2030",
        description:
            "Reaches the same scale as Brazil's full retail sector today.",
    },
];
const MacroPicture = () => {

     const containerRef = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            },
        })
        tl.to(".anim_y", {
           yPercent:-80,
           ease:"none"
        })

    }, { scope: containerRef });

    return (
        <>
            <div className=" pt-12 md:pt-24 border-t border-black/50">
                <SectionHeading
                    btnText={"The context"}
                    heading={
                        "India's consumer market is about to double."
                    }
                    desc={"The winners will be the brands that built the right operating model before the wave broke."}
                />
            </div>
            <div ref={containerRef} className=' container w-full  relative h-[250vh]! '>
                <div className=" sticky top-0 w-full h-screen  center ">

                    <div className=" absolute left-1/2 top-1/2 text-center -translate-x-1/2">
                    <div className="anim_y">

                        {statsData.map((row, rowIndex) => (
                            <div key={rowIndex} className="">
                                <p className=' text-9xl h-56'>{row.value}</p>
                            </div>
                        ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-12 ">
                        <div className="col-span-4 relative center ">
                            <div className="w-full h-28 text-center overflow-hidden">
                                <div className="anim_y">
                                    {statsData.map((row, rowIndex) => (
                                        <div key={rowIndex} className=" h-28 center">
                                            <h3 className=' leading-none'>{row.title}</h3>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className=" col-span-4 relative  ">
                            <div className="perspective-[40rem] transform-3d">
                                <div className="w-full aspect-4/3 rotate-x-15 -rotate-y-6 transform-3d center  rounded-xl overflow-hidden">
                                    <img src="/images/footer/img1.jpeg" className='cover' alt="" />
                                </div>
                            </div>

                            <div className=" absolute w-full aspect-4/3 inset-0 z-[99] text-white center text-center">
                                <div className="w-full h-56 text-center overflow-hidden">
                                    <div className="anim_y">
                                        {statsData.map((row, rowIndex) => (
                                            <div key={rowIndex} className=" h-56 center">
                                                <p className=' text-9xl leading-none'>{row.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 relative center">
                            <div className="w-full h-16 text-center overflow-hidden">
                                <div className="anim_y">
                                    {statsData.map((row, rowIndex) => (
                                        <div key={rowIndex} className=" h-16 center w-[80%] mx-auto">
                                            <p className=' text-lg leading-none'>{row.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default MacroPicture