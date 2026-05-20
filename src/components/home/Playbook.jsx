"use client";
import { useGSAP } from '@gsap/react';
import { RiBriefcaseLine, RiGlobalLine, RiLineChartLine, RiNodeTree, RiUserLine } from '@remixicon/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useRef } from 'react'
gsap.registerPlugin(ScrollTrigger);


const pillarsData = [
    {
        id: "01",
        title: "Talent",
        subtitle: "Co-ownership",
        icon: RiUserLine,
        items: [
            "Co-ownership structuring",
            "Performance marketing",
            "CRM & retention",
            "Community engagement",
        ],
    },

    {
        id: "02",
        title: "Capital",
        subtitle: "Investor-ready",
        icon: RiBriefcaseLine,
        items: [
            "Investor narrative",
            "Data room setup",
            "Warm introductions",
            "Term sheet support",
        ],
    },

    {
        id: "03",
        title: "Strategy",
        subtitle: "Operator discipline",
        icon: RiLineChartLine,
        items: [
            "Unit economics & P&L",
            "GTM & channel strategy",
            "Pricing & margin analysis",
            "90-day growth planning",
        ],
    },

    {
        id: "04",
        title: "Design",
        subtitle: "Brand, social, packaging",
        icon: RiGlobalLine,
        items: [
            "Identity & positioning",
            "Packaging design",
            "PDP & marketplace kits",
            "Social content engine",
        ],
    },

    {
        id: "05",
        title: "Distribution",
        subtitle: "Intelligence",
        icon: RiNodeTree,
        items: [
            "Supply chain & 3PL",
            "Demand planning",
            "Retail pilot management",
            "Omnichannel rollout",
        ],
    },
];

const Playbook = () => {

    const containerRef = useRef();

    useGSAP(() => {
        gsap.to(".content_slider", {
            xPercent:-100,
            ease:"linear",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: true
            }
        })
    }, { scope: containerRef })

    return (
        <>
            <div ref={containerRef} className="w-full h-[400vh] border-t border-b border-black/30">
                <div className=" py-24 sticky top-0 w-full h-screen flex flex-col justify-between">
                    <div className='container space-y-5'>
                        <h6 className='text-blue'>The Playbook</h6>
                        <div className="grid grid-cols-2 items-end ">
                            <h2>Five pillars. <br /> One playbook.</h2>
                            <div className="flex justify-end">
                                <p className='w-[60%] leading-tight '>Not concepts. Integrated capabilities delivered by an embedded team. Each pillar moves a specific metric.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container ">
                        <div className=" content_slider flex gap-x-8">
                            {pillarsData.map((pillar) => (
                                <div key={pillar.id} className="p-8 shrink-0 w-[35vw] h-[45vh] flex flex-col justify-between bg-blue  rounded-xl">
                                    <div className="w-full  flex items-center justify-between">
                                        <div className=" leading-none">
                                            <h3>{pillar.title}</h3>
                                            <p className='text-lg  opacity-70'>{pillar.subtitle}</p>
                                        </div>
                                        <div className="">
                                            <pillar.icon size={44} />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        {pillar.items.map((item) => (
                                            <div className="flex items-center text-xl gap-x-2" key={item}>
                                                <div className="size-2 bg-white"></div>
                                                <p className='text-xl'>{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Playbook