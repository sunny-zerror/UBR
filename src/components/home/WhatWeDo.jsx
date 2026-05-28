"use client";

import React from "react";
import SectionHeading from "../common/SectionHeading";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const engagementData = [
    {
        number: "01",
        icon: "/icons/fundraise.png",
        title: "Fundraise",
        sub: "Success fee engagement",
        desc: "We shape the investment story, build the data room, run the process, and close the round. Diligence costs are covered by the client if financial cleanup is required.",
        tags: [
            "Investment Story",
            "Data Room",
            "Investor Outreach",
            "Round Closure",
        ],
    },
    {
        number: "02",
        icon: "/icons/advisory.png",
        title: "Strategic Advisory + Talent",
        sub: "Equity vested on KPIs",
        desc: "Long-term advisory seat with celebrity co-ownership structured into the same deal. Brand architecture, talent activation, and the systems that turn the signing into a moat.",
        tags: [
            "Brand Strategy",
            "Talent Activation",
            "Celebrity Equity",
            "Growth Systems",
        ],
    },
    {
        number: "03",
        icon: "/icons/venture.png",
        title: "Venture Build",
        sub: "Equity co-owner model",
        desc: "Our deepest engagement. We embed across all five pillars from day one. Sweat-equity hybrid available for early-stage brands with reduced cash retainers.",
        tags: [
            "Embedded Team",
            "Go-To-Market",
            "Sweat Equity",
            "Full Stack Execution",
        ],
    },
];

const WhatWeDo = () => {

    useGSAP(() => {
        gsap.to(".card", {
            transform: "translateY(0)",
            opacity: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".card",
                start: "top 80%",
                toggleActions: "play none none reverse",
            }
        })
    })

    return (
        <section className="relative overflow-hidden space-y-5 md:space-y-16 py-12 md:py-24 ">

            <SectionHeading
                btnText={"what we do"}
                heading={"We build consumer brands. Three ways to engage."}
                desc={"Built for founders who need capital, influence, execution, or all three at once."}
            />
            <div className="container">

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                    {engagementData.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className=" card group translate-y-10 opacity-0   relative flex h-full flex-col justify-between overflow-hidden rounded-xs border border-black/50  p-5"
                            >
                                <div className=" items-stretch">
                                    <div className="relative z-10 flex justify-between">
                                        <h3 className="md:font-semibold">
                                            {item.number}
                                        </h3>

                                        <div className="">
                                            <Image width={40} height={40} src={item.icon} alt="icon" />
                                        </div>
                                    </div>
                                    <div className=" items-stretch">
                                        <h6>{item.sub}</h6>
                                        <h4 className="mt-2 h-16 leading-none">
                                            {item.title}
                                        </h4>
                                        <p className=" mt-5  leading-tight opacity-80">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-3 flex flex-wrap gap-1">
                                    {item.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 text-xs uppercase  aeonik bg-[#29227d] text-white"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;