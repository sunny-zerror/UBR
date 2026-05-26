import React from 'react'
import SectionHeading from '../common/SectionHeading'
import {
    RiBarChartBoxLine,
    RiSettings3Line,
    RiShieldCheckLine,
    RiTeamLine,
    RiStarLine,
    RiFocus3Line,
} from "@remixicon/react"

export const modelCards = [
    {
        title: "UBR Brings The P&L Rigour.",
        desc: "Disciplined capital, enterprise scaling, a proven playbook for turning revenue into profit. The operator side of the model, anchored by Binoy Khimji and the Cornerstone ecosystem. Governance, unit economics, and the patience to compound.",

        tags: [
            {
                label: "CAPITAL",
                icon: RiBarChartBoxLine,
            },
            {
                label: "OPERATIONS",
                icon: RiSettings3Line,
            },
            {
                label: "GOVERNANCE",
                icon: RiShieldCheckLine,
            },
        ],
    },

    {
        title: "DISRPTVE brings the audience.",
        desc: "Authentic celebrity co-ownership, deep brand-building experience, unrivalled access to high-affinity audiences. Led by Ashish Chowdhry and Kaushik Sundararajan, with a decade of running culture-first agencies behind them. Trust as the unfair advantage.",

        tags: [
            {
                label: "TALENT",
                icon: RiTeamLine,
            },
            {
                label: "BRAND",
                icon: RiStarLine,
            },
            {
                label: "AUDIENCE",
                icon: RiFocus3Line,
            },
        ],
    },
]

const WhoWeAre = () => {
    return (
        <div className='py-24 border-b border-black space-y-16'>
            <SectionHeading
                btnText={"Who we are"}
                heading={
                    "Two operators. One model. UBR and DISRPTVE combine brand-building expertise with operational depth to solve the two biggest challenges most consumer brands."
                }
            />
            <div className="w-[75%] mx-auto overflow-hidden">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {modelCards.map((card, index) => (
                        <div
                            key={index}
                            className="group relative bg-black rounded-lg p-8 md:p-10 overflow-hidden"
                        >
                            <div
                                // style={{
                                //     maskImage:
                                //         "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.33) 100%)",
                                //     WebkitMaskImage:
                                //         "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.33) 100%)",
                                // }}
                                className="absolute inset-0 z-10 pointer-events-none">

                                {/* Vertical Lines */}
                                <div
                                    className="absolute inset-0 flex justify-evenly"
                                >
                                    {[...Array(8)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="  w-px h-full bg-[#C4BAB030]  origin-top scale-y-0  group-hover:scale-y-100  transition-transform duration-300  "
                                            style={{
                                                transitionDelay: `${i * 80}ms`,
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Horizontal Lines */}
                                <div
                                    className="absolute inset-0 flex flex-col justify-evenly">
                                    {[...Array(4)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="h-px w-full bg-[#C4BAB030]  origin-left scale-x-0  group-hover:scale-x-100  transition-transform duration-300  "
                                            style={{
                                                transitionDelay: `${i * 120}ms`,
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <h4 className="leading-none capitalize font-semibold">
                                    {card.title}
                                </h4>
                            </div>

                            <p className="relative mt-10 leading-6 text-lg">
                                {card.desc}
                            </p>

                            <div className="relative mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {card.tags.map((tag, i) => {
                                    const Icon = tag.icon

                                    return (
                                        <div
                                            key={i}
                                            className={`rounded-md font-medium text-sm p-3 border bg-[#C4BAB0] text-black`}
                                        >
                                            <div className="flex items-center gap-2">
                                                <Icon size={16} />

                                                <p className=" aeonik font-semibold   uppercase">
                                                    {tag.label}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre