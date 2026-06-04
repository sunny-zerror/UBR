"use client";
import { RiArrowDownLine } from '@remixicon/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useState } from 'react'
import SectionHeading from '../common/SectionHeading';
gsap.registerPlugin(ScrollTrigger);


const pillarsData = [
    {
        id: "01",
        title: "Talent",
        subtitle: "Co-ownership, not endorsement",
        metric: "Blended CAC",
        items: [
            "Celebrity co-ownership",
            "Creator-led storytelling",
            "Performance marketing",
            "Community & retention",
        ],
    },

    {
        id: "02",
        title: "Capital",
        subtitle: "Brought in warm, on better terms",
        metric: "Time to close",
        items: [
            "Investor introductions",
            "Fundraising strategy",
            "Pitch narrative",
            "Term sheet support",
        ],
    },

    {
        id: "03",
        title: "Strategy",
        subtitle: "P&L first",
        metric: "Contribution margin",
        items: [
            "Unit economics",
            "Pricing strategy",
            "Growth planning",
            "Operational discipline",
        ],
    },

    {
        id: "04",
        title: "Design",
        subtitle: "Built to convert",
        metric: "Conversion rate",
        items: [
            "Brand identity",
            "Packaging systems",
            "Marketplace creatives",
            "Conversion-focused design",
        ],
    },

    {
        id: "05",
        title: "Distribution",
        subtitle: "Sized for India",
        metric: "Sell-through velocity",
        items: [
            "Retail distribution",
            "Marketplace expansion",
            "Supply chain coordination",
            "Omnichannel rollout",
        ],
    },
];

const Playbook = () => {

    const [openId, setOpenId] = useState(null)

    return (
        <>
            <div className="w-full  border-t ">
                <div className=" py-12 md:py-24  w-full space-y-5 md:space-y-16">

                    <SectionHeading
                        btnText={"HOW WE DO IT"}
                        heading={
                            <>
                                Five pillars. <br /> One playbook.
                            </>
                        }
                        desc={"Not concepts. Integrated capabilities delivered by an embedded team. Each pillar moves a specific metric."}
                    />

                    <div className="container ">
                        <div className="  md:grid grid-cols-6 items-stretch w-full">
                            <div className=" max-sm:h-64 col-span-3 center md:pr-24">
                                {pillarsData.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className={` size-56 md:size-64 absolute border border-[#000063] rounded-full center transition-opacity duration-300 ${openId === item.id ? "opacity-100" : "opacity-20"
                                            }`}
                                        style={{
                                            transform: `translateX(${(index - 2) * 3}rem)`,
                                        }}
                                    />
                                ))}
                            </div>
                            <div className=" w-full col-span-3 md:pl-2.5">
                                {pillarsData.map((item) => (
                                    <div
                                        onClick={() =>
                                            setOpenId((prev) => (prev === item.id ? null : item.id))
                                        }
                                        key={item.id}
                                        className={`border-b cursor-pointer group border-[#00000050] transition-all duration-300  `}>
                                        <div className="  mb-2 mt-8 flex w-full justify-between items-center">
                                            <div className="">
                                                <h4 data-para-effect className="">{item.title}</h4>
                                                <p className=" text-xs aeonik uppercase opacity-80">{item.metric}</p>
                                            </div>
                                            <div className={`size-10 center rounded-full border border-[#000063] group-hover:bg-[#000063] group-hover:text-white ${openId === item.id ? "rotate-180 bg-[#000063] text-white " : ""}  transition-all duration-300`}>
                                                <RiArrowDownLine />
                                            </div>
                                        </div>
                                        <div className={`h-0 pl-5 ${openId === item.id ? "h-42 opacity-100 pt-5" : "h-0 opacity-0 pt-0"} transition-all duration-300 overflow-hidden capitalize space-y-2`}>
                                            {item.items.map((subItem, i) => (
                                                <div key={i} className="flex items-center gap-x-2">
                                                    <div className="size-1.75 bg-[#000000]"></div>
                                                    <p key={subItem}> {subItem}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Playbook