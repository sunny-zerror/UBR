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
        brand: "UBR Brings",
        title: " The P&L Rigour.",
        desc: "Disciplined capital, enterprise scaling, a proven playbook for turning revenue into profit. The operator side of the model, anchored by Binoy Khimji and the Cornerstone ecosystem. Governance, unit economics, and the patience to compound.",
        img:"/images/home/ubr_bg.png",
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
        brand: "DISRPTVE brings ",
        title: "the audience.",
        desc: "Authentic celebrity co-ownership, deep brand-building experience, unrivalled access to high-affinity audiences. Led by Ashish Chowdhry and Kaushik Sundararajan, with a decade of running culture-first agencies behind them. Trust as the unfair advantage.",
        img:"/images/home/disrptve_bg.png",
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
        <div className='py-24 space-y-16'>
            <SectionHeading
                btnText={"Who we are"}
                heading={
                    <>
                        Two operators.
                        <br />
                        One model.
                    </>
                }
                desc="UBR and DISRPTVE come from opposite ends of the consumer ventures spectrum. Together, they fix the two things most consumer brands get wrong at once."
            />
            <div className="w-full container overflow-hidden">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {modelCards.map((card, index) => (
                        <div
                            key={index}
                            className="group relative border border-black/20  rounded-lg p-8 md:p-10 overflow-hidden"
                        >
                            <img className=' cover absolute inset-0 group-hover:opacity-100 opacity-50 transition-all duration-300' src={card.img} alt="" />
                            <div className="relative">
                                <h4 className="leading-none capitalize font-semibold">
                                    {card.brand}
                                </h4>
                                <h4 className="leading-none capitalize font-semibold">
                                    {card.title}
                                </h4>
                            </div>

                            <p className="relative mt-10 w-[85%] leading-6 text-lg">
                                {card.desc}
                            </p>

                            <div className="relative mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {card.tags.map((tag, i) => {
                                    const Icon = tag.icon

                                    return (
                                        <div
                                            key={i}
                                            className={`rounded-md font-medium text-sm p-3 border border-black/20  bg-[#FFFFFF80] text-black`}
                                        >
                                            <div className="flex flex-col justify-center items-center gap-5">
                                                <Icon size={34} />

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