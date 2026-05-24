import { RiBarChartBoxLine, RiFocus3Line, RiSettings3Line, RiShieldCheckLine, RiStarLine, RiTeamLine } from '@remixicon/react'
import Image from 'next/image'
import React from 'react'
import DotButton from '../common/DotButton'
import SectionHeading from '../common/SectionHeading'

const WhoWeAre = () => {
    return (
        <div className='py-24 space-y-16'>
            <SectionHeading
                btnText={"Who we are"}
                heading={"Two operators. One model."}
                desc={"UBR and DISRPTVE come from opposite ends of the consumer ventures spectrum. Together, they fix the two things most consumer brands get wrong at once."}
            />
            <div className="container overflow-hidden">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    <div className="group relative  bg-[#F8F8F8]  rounded-xl  p-8 md:p-10 overflow-hidden ">
                        <div className="relative h-20">
                            <Image width={100} height={100} src="/images/logo-ubrxdisrptve.png" alt="" />
                        </div>
                        <div className="relative ">
                            <h3 className="leading-none">
                                UBR brings the P&amp;L <br /> rigour.
                            </h3>
                        </div>
                        <p className="relative mt-10 leading-6 text-xl opacity-80 w-[90%]">Disciplined capital, enterprise scaling, a proven playbook for turning revenue into profit. The operator side of the model, anchored by <b> Binoy Khimji </b> and the Cornerstone ecosystem. Governance, unit economics, and the patience to compound.</p>
                        <div className="relative mt-10  grid grid-cols-1 sm:grid-cols-3 gap-5">
                            <div className="rounded-md font-medium  px-4 py-2 bg-[#003049] text-white transition-all duration-300">
                                <div className="flex items-center gap-2">
                                    <RiBarChartBoxLine
                                        size={20}
                                        className=""
                                    />

                                    <p className="uppercase">
                                        Capital
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-md font-medium  px-4 py-2 bg-[#003049] text-white transition-all duration-300">
                                <div className="flex items-center gap-2">
                                    <RiSettings3Line
                                        size={20}
                                        className=""
                                    />

                                    <p className="uppercase">
                                        Operations
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-md font-medium  px-4 py-2 bg-[#003049] text-white transition-all duration-300">
                                <div className="flex items-center gap-2">
                                    <RiShieldCheckLine
                                        size={20}
                                        className=""
                                    />

                                    <p className="uppercase">
                                        Governance
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group relative bg-[#F8F8F8]  rounded-xl  p-8 md:p-10 overflow-hidden ">
                        <div className="relative h-20 ">
                            <Image width={200} height={100} src="/images/logo-disrptve-dark.png" alt="" />
                        </div>
                        <div className="relative">
                            <h3 className="leading-none">
                                DISRPTVE brings the <br /> audience.
                            </h3>
                        </div>
                        <p className="relative mt-10 leading-tight text-xl opacity-80   w-[95%]">
                            Authentic celebrity co-ownership, deep brand-building experience, unrivalled access to high-affinity audiences. Led by <b> Ashish Chowdhry </b> and <b> Kaushik Sundararajan,</b> with a decade of running culture-first agencies behind them. Trust as the unfair advantage.</p>
                        <div className="relative  mt-10 grid grid-cols-1  sm:grid-cols-3 gap-5">
                            <div className="rounded-md font-medium  px-4 py-2 bg-[#003049] text-white transition-all duration-300">
                                <div className="flex items-center gap-2 ">
                                    <RiTeamLine
                                        size={20}
                                        className=""
                                    />

                                    <p className="uppercase">
                                        Talent
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-md font-medium  px-4 py-2 bg-[#003049] text-white transition-all duration-300">
                                <div className="flex items-center gap-2">
                                    <RiStarLine
                                        size={20}
                                        className=""
                                    />

                                    <p className="uppercase">
                                        Brand
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-md font-medium  px-4 py-2 bg-[#003049] text-white transition-all duration-300">
                                <div className="flex items-center gap-2">
                                    <RiFocus3Line
                                        size={20}
                                        className=""
                                    />

                                    <p className="uppercase">
                                        Audience
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre