"use client";
import { useGSAP } from '@gsap/react';
import { RiArrowDownLine, RiArrowDownSLine, RiBriefcaseLine, RiGlobalLine, RiLineChartLine, RiNodeTree, RiUserLine } from '@remixicon/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useRef, useState } from 'react'
import DotButton from '../common/DotButton';
import SectionHeading from '../common/SectionHeading';
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

    const [openId, setOpenId] = useState(null)

    return (
        <>
            <div className="w-full  bg-[#191B1D] text-white">
                <div className=" py-24  w-full space-y-16">

                    <SectionHeading
                        btnText={"The Playbook"}
                        btnOutline={"outline"}
                        heading={"Five pillars. One playbook."}
                        desc={"Not concepts. Integrated capabilities delivered by an embedded team. Each pillar moves a specific metric."}
                    />

                    <div className="container ">
                        <div className="  grid grid-cols-6 items-stretch w-full">
                            <div className=" col-span-3 center pr-24">
                                {pillarsData.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className={`size-[16rem] absolute border border-white rounded-full center transition-opacity duration-300 ${openId === item.id ? "opacity-100" : "opacity-10"
                                            }`}
                                        style={{
                                            transform: `translateX(${(index - 2) * 3}rem)`,
                                        }}
                                    />
                                ))}
                            </div>
                            <div className="col-span-3 pl-2.5">
                                {pillarsData.map((item) => (
                                    <div
                                        onClick={() =>
                                            setOpenId((prev) => (prev === item.id ? null : item.id))
                                        }
                                        key={item.id}
                                        className={`border-b cursor-pointer group border-white/10 transition-all duration-300  `}>
                                        <div className="  mb-2 mt-8 flex w-full justify-between items-center">
                                            <div className="">
                                                <h4 data-para-effect className="">{item.title}</h4>
                                                <p className=" capitalize opacity-60">{item.subtitle}</p>
                                            </div>
                                            <div className={`size-10 center rounded-full group-hover:bg-white group-hover:text-black ${openId === item.id ? "rotate-180 bg-white text-black" : "border text-white/40"}  transition-all duration-300`}>
                                                <RiArrowDownLine />
                                            </div>
                                        </div>
                                        <div className={`h-0 pl-5 ${openId === item.id ? "h-42 opacity-100 pt-5" : "h-0 opacity-0 pt-0"} transition-all duration-300 overflow-hidden capitalize space-y-2`}>
                                            {item.items.map((subItem, i) => (
                                                <div key={i} className="flex text-lg items-center gap-x-2">
                                                    <div className="size-2 bg-white"></div>
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