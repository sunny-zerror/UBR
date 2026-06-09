import React from 'react'
import SectionHeading from '../common/SectionHeading'
import Image from 'next/image'

const CapitalAdvisory = () => {
    return (
        <div className='pt-12 md:pt-24 space-y-5 md:space-y-10'>
            <SectionHeading
                btnText="Capital advisors"
                heading="Capital, on tap."
                desc={<>Ex-bankers with deep relationships across VCs, family offices and angel syndicates in India, <span className=' highlight'>the GCC and the USA.</span> The fundraise track is theirs to run.</>}
            />
            <div className="container  grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="   border border-black/50 items-stretch gap-x-5 rounded-xl flex p-4  md:p-8">
                    <div className="rounded-lg aspect-3/4 w-[35%]   overflow-hidden">
                        <div data-clip-effect className="w-full relative   h-full">
                            <Image fill className='cover' src="/images/team/akshi.png" alt="img" />
                        </div>
                    </div>
                    <div className="w-[65%] flex flex-col justify-between">
                        <div className="">
                            <h4 className='  md:font-semibold leading-none'>Akshi Goyal</h4>
                            <h6 className=''>Capital • Fundraise</h6>
                        </div>
                        <p className='leading-tight text-sm md:text-lg  '>A Chartered Accountant and ex-banker with strong investor relationships and 25+ successfully closed fundraise mandates for early-stage D2C brands, tech companies and B2B SaaS, across VCs, family offices and angel syndicates.</p>
                    </div>
                </div>
                <div className="  border  border-black/50 items-stretch gap-x-5 rounded-xl flex p-4  md:p-8">
                    <div className="rounded-lg aspect-3/4 w-[35%]   overflow-hidden">
                        <div data-clip-effect className="w-full relative  h-full">
                            <Image fill className='cover' src="/images/team/ankur.png" alt="img" />
                        </div>
                    </div>
                    <div className="w-[65%] flex flex-col justify-between">
                        <div className="">
                            <h4 className='  md:font-semibold leading-none'>Ankur Goyal</h4>
                            <h6 className=''>Capital • Strategy</h6>
                        </div>
                        <p className='leading-tight text-sm md:text-lg  '>An ex-banker with 20+ years of experience addressing capital requirements across industries, stages, geographies and structures. Works closely with startup and SME founders across India, the GCC and the USA on business and fundraising strategy.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CapitalAdvisory