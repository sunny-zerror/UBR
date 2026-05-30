"use client";
import React, { useRef } from 'react'
import SectionHeading from '../common/SectionHeading';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const valuesData = [
    {
        id: "01",
        label: "Embedded",
        title: "Same room. Same target.",
        description:
            "We sit alongside the founder, in operating reviews, board prep and the daily decisions that shape the brand.",
    },

    {
        id: "02",
        label: "Aligned",
        title: "Equity vested on KPIs.",
        description:
            "No commission-on-spend, no padded retainers. We win when you win, on the metrics agreed at the start.",
    },

    {
        id: "03",
        label: "Long Horizon",
        title: "Built to compound.",
        description:
            "We optimise for the value created at year three, not the campaign rendered at month three.",
    },
];
const HowWeWork = () => {

    const workRef = useRef(null);

    useGSAP(() => {

        const expandSize = window.innerWidth > 750 ? 35 : 18
        const normalSize = window.innerWidth > 750 ? 16 : 12

        const tl = gsap.timeline({
            defaults: { duration: 0.8, ease: "power3.out" },
            scrollTrigger: {
                trigger: workRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            },
        })

        tl.to(".work_circ_1", {
            width: expandSize + "rem",
            height: expandSize + "rem"
        })
        tl.to(".inner_circ_1", {
            background: "linear-gradient(#29227d12, #29227d12), radial-gradient(50% 50%, #29227d00 0%, #29227d08 30%, #29227d12 55%, #29227d20 80%, #29227d35 100%)",
        }, "<")
        tl.to(".work_circ_2", {
            width: expandSize + "rem",
            height: expandSize + "rem"
        })
        tl.to(".work_dt_2", {
            opacity: 1,
            transform: "translateY(0)",
        }, "<")
        tl.to(".work_dt_1", {
            opacity: 0,
            transform: "translateY(-1.25rem)",
        }, "<")
        tl.to(".inner_circ_1", {
            background: "linear-gradient(#29227d00, #29227d00), radial-gradient(50% 50%, #29227d00 0%, #29227d00 30%, #29227d00 55%, #29227d00 80%, #29227d00 100%)",
        }, "<")
        tl.to(".inner_circ_2", {
            background: "linear-gradient(#29227d12, #29227d12), radial-gradient(50% 50%, #29227d00 0%, #29227d08 30%, #29227d12 55%, #29227d20 80%, #29227d35 100%)",
        }, "<")
        tl.to(".work_circ_1", {
            width: normalSize + "rem",
            height: normalSize + "rem"
        }, "<")
        tl.to(".work_circ_3", {
            width: expandSize + "rem",
            height: expandSize + "rem"
        })
        tl.to(".work_dt_3", {
            opacity: 1,
            transform: "translateY(0)",
        }, "<")
        tl.to(".work_dt_2", {
            opacity: 0,
            transform: "translateY(-1.25rem)",
        }, "<")
        tl.to(".inner_circ_2", {
            background: "linear-gradient(#29227d00, #29227d00), radial-gradient(50% 50%, #29227d00 0%, #29227d00 30%, #29227d00 55%, #29227d00 80%, #29227d00 100%)",
        }, "<")
        tl.to(".inner_circ_3", {
            background: "linear-gradient(#29227d12, #29227d12), radial-gradient(50% 50%, #29227d00 0%, #29227d08 30%, #29227d12 55%, #29227d20 80%, #29227d35 100%)",
        }, "<")
        tl.to(".work_circ_2", {
            width: normalSize + "rem",
            height: normalSize + "rem"
        }, "<")
        tl.to(".work_circ_3", {
            width: normalSize + "rem",
            height: normalSize + "rem"
        })
        tl.to(".inner_circ_3", {
            background: "linear-gradient(#29227d00, #29227d00), radial-gradient(50% 50%, #29227d00 0%, #29227d00 30%, #29227d00 55%, #29227d00 80%, #29227d00 100%)",
        }, "<")
    })

    return (
        <div className=' border-t border-black/50  py-12 md:py-24'>
            <div className="">
                <SectionHeading
                    btnText="How we work"
                    heading={<>Co-founders, <br />not consultants.</>}
                    desc="We embed across all five pillars from day one. Equity-aligned. Vested against KPIs. Same room as the founder, same target on the wall." />
            </div>
            <div ref={workRef} className=" w-full relative h-[300vh]">
                <div className=" container w-full h-screen! md:flex sticky!   top-0">
                    <div className=" w-full md:w-1/2 h-[50vh] md:h-full flex items-center">
                        {valuesData.map((item, index) => (
                            <div key={index} className={`work_dt_${index + 1} absolute space-y-5 md:space-y-10 ${[1, 2].includes(index) ? "opacity-0 translate-y-5" : ""}`}>
                                <div className="space-y-2">
                                    <h6>{item.label}</h6>
                                    <h3 data-para-effect className='capitalize md:font-semibold leading-tight w-[80%]'>{item.title}</h3>
                                </div>
                                <p data-para-effect className=' md:text-lg opacity-60 leading-tight md:w-[80%] '>{item.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="-full md:w-1/2 h-[50vh] md:h-full relative flex  justify-center items-center max-sm:overflow-hidden ">
                        <div className=" size-48 md:size-64 work_circ_1  shrink-0   relative pointer-events-none  ">
                            <div className=" inner_circ_1 w-full h-full overflow-hidden border border-[#29227d] translate-x-24  md:translate-x-32 rounded-full center ">
                                <div className="size-3 bg-[#29227d] rounded-full"></div>
                            </div>
                        </div>
                        <div className=" size-48 md:size-64 work_circ_2  shrink-0   relative pointer-events-none ">
                            <div className=" inner_circ_2 w-full h-full overflow-hidden border border-[#29227d]  rounded-full center ">
                                <div className="size-3 bg-[#29227d] rounded-full"></div>
                            </div>
                        </div>
                        <div className=" size-48 md:size-64 work_circ_3  shrink-0   relative pointer-events-none ">
                            <div className=" inner_circ_3 w-full h-full overflow-hidden border border-[#29227d] -translate-x-24  md:-translate-x-32 rounded-full center ">
                                <div className="size-3 bg-[#29227d] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowWeWork