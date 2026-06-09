"use client";
import React from 'react'
import SectionHeading from '../common/SectionHeading'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const pillarsData = [
    {
        id: "01",
        title: "Talent",
        metric: "Blended CAC ↓",
        description: [
            "Why co-ownership beats endorsement. Aligned incentives buy you more than reach; they buy a trust engine that compounds.",
            "Equity plus milestones drive sustained content, credibility and community lift. Warm demand replaces cold spend, with creative and distribution in one stroke."
        ],
        services: [
            "Co-ownership structuring",
            "Performance marketing",
            "CRM & retention",
            "Community engagement"
        ]
    },

    {
        id: "02",
        title: "Capital",
        metric: "Time-to-close ↓",
        description: [
            "Investment story anchored in unit economics and execution proof. Curated fit, managed outreach, better terms.",
            "We do not invest from this track. We avoid conflicts and stay aligned to outcomes the founders own."
        ],
        services: [
            "Investor narrative",
            "Data room setup",
            "Warm introductions",
            "Term sheet support"
        ]
    },

    {
        id: "03",
        title: "Strategy",
        metric: "Contribution Margin ↑",
        description: [
            "A P&L-first playbook. Packaging, pricing and channel mix designed for target CVR and contribution margin.",
            "Clear priorities. Faster tests. Measurable lift in 90-day clocks, tracked on dashboards built for operating cadence."
        ],
        services: [
            "Unit economics & P&L",
            "GTM & channel strategy",
            "Pricing & margin analysis",
            "90-day growth planning"
        ]
    },

    {
        id: "04",
        title: "Design",
        metric: "Conversion rate ↑",
        description: [
            "Customers instantly get what we’re selling, why it’s better, how to use it. Pages and packs answer objections without needing a salesperson.",
            "One coherent visual system across brand, packaging, digital and social. Higher CVR. Consistent brand. Fewer reworks and returns."
        ],
        services: [
            "Identity & positioning",
            "Packaging design",
            "PDP & marketplace kits",
            "Social content engine"
        ]
    },

    {
        id: "05",
        title: "Distribution",
        metric: "Sell-through velocity ↑",
        description: [
            "Solving for high logistics percentages, fragmented retail and lengthy cash cycles. Map demand. Pilot precisely. Scale what works.",
            "Structural answers to structural problems, with weekly visibility on what is selling and what is not."
        ],
        services: [
            "Supply chain & 3PL",
            "Demand planning",
            "Retail pilot management",
            "Omnichannel rollout"
        ]
    }
];

const PlaybookDetail = () => {

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".playbook_sticky_paren",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            }
        })

        tl.to(".dec_h_01", {
            height: "0px",
            ease: "none"
        }).to(".dec_h_02", {
            height: "0px",
            ease: "none"
        }).to(".dec_h_03", {
            height: "0px",
            ease: "none"
        }).to(".dec_h_04", {
            height: "0px",
            ease: "none"
        }).to(".dec_h_05", {
            height: "0px",
            ease: "none"
        })
    })

    return (
        <>
            <div className="w-full pt-0 md:pt-12 relative">
                <SectionHeading
                    btnText="The playbook in detail"
                    heading="Five pillars. In depth."
                    desc="Each pillar moves a specific metric and brings its own capabilities. Together they form one integrated operating system, delivered by an embedded team." />

                <div className="playbook_sticky_paren container h-[250vh]! ">
                    <div className="sticky pt-18 top-0 left-0">
                        {pillarsData.map((item) => (
                            <div
                                onClick={() =>
                                    setOpenId((prev) => (prev === item.id ? null : item.id))
                                }
                                key={item.id}
                                className={` border-t cursor-pointer group border-black/50 last:border-b   `}>
                                <div className="flex items-center h-14">
                                    <h5 data-para-effect className="md:font-semibold">{item.title}</h5>
                                </div>
                                <div className={`dec_h_${item.id} max-sm:hidden h-10`}></div>
                                <div className={`dec_h_${item.id} overflow-hidden flex flex-col-reverse md:grid grid-cols-6`}>
                                    <div className="col-span-3 max-sm:mt-5">
                                        <div className={`   space-y-1`}>
                                            {item.services.map((subItem, i) => (
                                                <div key={i} className="flex max-sm:text-sm  items-center gap-x-2">
                                                    <div className="size-1.5 bg-black"></div>
                                                    <p key={subItem}> {subItem}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-span-3 space-y-5">

                                        <div className={` max-sm:text-sm  grid grid-cols-2 gap-x-5  md:gap-x-10  `}>
                                            {item.description.map((desc, i) => (
                                                <div key={i} className="">
                                                    <p key={desc} className='leading-tight'> {desc}</p>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                                <div className={`dec_h_${item.id} h-5`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlaybookDetail