import { RiBarChartBoxLine, RiFocus3Line, RiSettings3Line, RiShieldCheckLine, RiStarLine, RiTeamLine } from '@remixicon/react'
import Image from 'next/image'
import React from 'react'

const WhoWeAre = () => {
    return (
        <div className='py-24'>
            <div className='container space-y-5'>
                <h6 className='text-blue'>Who we are</h6>
                <div className="grid grid-cols-2 items-end ">
                    <h2>Two operators. <br /> One model.</h2>
                    <div className="flex justify-end">
                        <p className='w-[60%] leading-tight '>UBR and DISRPTVE come from opposite ends of the consumer ventures spectrum. Together, they fix the two things most consumer brands get wrong at once.</p>
                    </div>
                </div>
            </div>
            <div className="container  pt-20 overflow-hidden">

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
                        <p className="relative mt-10 leading-tight text-xl text-gray-700 w-[90%]">Disciplined capital, enterprise scaling, a proven playbook for turning revenue into profit. The operator side of the model, anchored by <b> Binoy Khimji </b> and the Cornerstone ecosystem. Governance, unit economics, and the patience to compound.</p>
                        <div className="relative mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="rounded-2xl  px-5 py-5 bg-white">
                                <div className="flex items-center gap-4">
                                    <RiBarChartBoxLine
                                        size={24}
                                        className=""
                                    />

                                    <h5 className="uppercase">
                                        Capital
                                    </h5>
                                </div>
                            </div>

                            <div className="rounded-2xl  px-5 py-5 bg-white">
                                <div className="flex items-center gap-4">
                                    <RiSettings3Line
                                        size={24}
                                        className=""
                                    />

                                    <h5 className="uppercase">
                                        Operations
                                    </h5>
                                </div>
                            </div>

                            <div className="rounded-2xl  px-5 py-5 bg-white">
                                <div className="flex items-center gap-4">
                                    <RiShieldCheckLine
                                        size={24}
                                        className=""
                                    />

                                    <h5 className="uppercase">
                                        Governance
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group relative bg-[#F8F8F8] rounded-xl  p-8 md:p-10 overflow-hidden ">
                        <div className="relative h-20 ">
                            <Image width={200} height={100} src="/images/logo-disrptve-dark.png" alt="" />
                        </div>
                        <div className="relative">
                            <h3 className="leading-none">
                                DISRPTVE brings the <br /> audience.
                            </h3>
                        </div>
                        <p className="relative mt-10 leading-tight text-xl text-gray-700   w-[95%]">
                            Authentic celebrity co-ownership, deep brand-building experience, unrivalled access to high-affinity audiences. Led by <b> Ashish Chowdhry </b> and <b> Kaushik Sundararajan,</b> with a decade of running culture-first agencies behind them. Trust as the unfair advantage.</p>
                        <div className="relative  mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="rounded-2xl  px-5 py-5 bg-white">
                                <div className="flex items-center gap-4 ">
                                    <RiTeamLine
                                        size={24}
                                        className=""
                                    />

                                    <h5 className="uppercase">
                                        Talent
                                    </h5>
                                </div>
                            </div>

                            <div className="rounded-2xl  px-5 py-5 bg-white">
                                <div className="flex items-center gap-4">
                                    <RiStarLine
                                        size={24}
                                        className=""
                                    />

                                    <h5 className="uppercase">
                                        Brand
                                    </h5>
                                </div>
                            </div>

                            <div className="rounded-2xl  px-5 py-5 bg-white">
                                <div className="flex items-center gap-4">
                                    <RiFocus3Line
                                        size={24}
                                        className=""
                                    />

                                    <h5 className="uppercase">
                                        Audience
                                    </h5>
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