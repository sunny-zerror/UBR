"use client";
import React, { useRef } from 'react'
import DotButton from '../common/DotButton'
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

    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: workRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            },
        })

        tl.to(".work_circ_1",{

        })
    })

    return (
        <div ref={workRef} className=' night_bg text-white h-[300vh] py-12 md:py-24'>
            <div className="">
                <SectionHeading
                    btnText="How we work"
                    heading="Co-founders, not consultants."
                    desc="We embed across all five pillars from day one. Equity-aligned. Vested against KPIs. Same room as the founder, same target on the wall." />
            </div>
            <div className=" container w-full h-screen! flex sticky!   top-0">
                <div className=" w-full md:w-1/2 h-[50vh] md:h-full flex flex-col gap-y-5 md:gap-y-20 justify-center">
                    <div className="space-y-5">
                        <DotButton text="The Outcome" className={"text-white!"} />
                        <h3 data-para-effect className='capitalize md:font-semibold leading-tight'>We replace paid CAC <br /> with   trust CAC.</h3>
                    </div>
                    <p data-para-effect className='md:text-lg opacity-60 leading-tight md:w-[80%] '>Paid acquisition gets more expensive every quarter and never pays back. When talent already owns the audience, demand arrives warm. CAC bends. Pricing power compounds. The brand stops renting attention and starts owning it.</p>
                </div>
                <div className="w-1/2 relative h-full flex  justify-center items-center ">
                    <div className="size-[16rem] work_circ_1 opacity-50 transition-all duration-300 shrink-0   relative pointer-events-none  ">
                        <div className="w-full h-full border border-white translate-x-[8rem] rounded-full center ">
                            <div className="size-2 bg-white rounded-full"></div>
                        </div>
                    </div>
                    <div className="size-[16rem] work_circ_2 opacity-50 transition-all duration-300 shrink-0   relative pointer-events-none ">
                        <div className="w-full h-full border border-white  rounded-full center ">
                            <div className="size-2 bg-white rounded-full"></div>
                        </div>
                    </div>
                    <div className="size-[16rem] work_circ_3 opacity-50 transition-all duration-300 shrink-0   relative pointer-events-none ">
                        <div className="w-full h-full border border-white  -translate-x-[8rem] rounded-full center ">
                            <div className="size-2 bg-white rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowWeWork