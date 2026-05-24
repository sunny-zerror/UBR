"use client";
import React, { useState } from 'react'
import SectionHeading from '../common/SectionHeading'
import { RiArrowDownLine } from '@remixicon/react';

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
    const [openId, setOpenId] = useState(null)
    return (
        <>
            <div className="w-full py-24  pb-0 space-y-16 ">
                <SectionHeading
                    btnText="The playbook in detail"
                    heading="Five pillars. In depth."
                    desc="Each pillar moves a specific metric and brings its own capabilities. Together they form one integrated operating system, delivered by an embedded team."
                />

                <div className="container ">
                    <div className="space-y-5">
                        {pillarsData.map((item) => (
                            <div
                                onClick={() =>
                                    setOpenId((prev) => (prev === item.id ? null : item.id))
                                }
                                key={item.id}
                                className={` grid grid-cols-6 pt-6  last:pb-0 border-t cursor-pointer group border-black/10   `}>
                                <div className="col-span-4">
                                    <div className="uppercase">
                                        <h2 data-para-effect className="">{item.title}</h2>
                                    </div>
                                </div>
                                <div className="col-span-2 space-y-5">

                                    <div className={` capitalize space-y-1`}>
                                        {item.description.map((desc, i) => (
                                            <div key={i} className="">
                                                <p key={desc} className='text-lg'> {desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={` capitalize space-y-1`}>
                                        {item.services.map((subItem, i) => (
                                            <div key={i} className="flex text-lg items-center gap-x-2">
                                                <div className="size-2 bg-black"></div>
                                                <p key={subItem}> {subItem}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlaybookDetail