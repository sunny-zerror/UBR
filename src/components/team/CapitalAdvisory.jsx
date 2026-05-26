import React from 'react'
import DotButton from '../common/DotButton'
import SectionHeading from '../common/SectionHeading'

const CapitalAdvisory = () => {
    return (
        <div className='py-24   border-t border-black/10 mt-24 space-y-16'>
            <SectionHeading
                btnText="Capital advisors"
                heading="Capital, on tap."
                desc={"Ex-bankers with deep relationships across VCs, family offices and angel syndicates in India, the GCC and the USA. The fundraise track is theirs to run."}
            />
            <div className="container grid grid-cols-2 gap-x-5">
                <div className="bg-[#C4BAB010] items-stretch gap-x-5 rounded-xl flex  p-8">
                    <div className="rounded-lg aspect-3/4 w-[35%] overflow-hidden">
                        <div data-img-effect className="w-full h-full">
                            <img className='cover' src="/images/team/akshi.png" alt="" />
                        </div>
                    </div>
                    <div className="w-[65%] flex flex-col justify-between">
                        <div className="">
                            <h4 className='capitalize leading-none'>Akshi Goyal</h4>
                            <h6 className='opacity-60'>Capital • Fundraise</h6>
                        </div>
                        <p className='leading-tight text-lg opacity-80 '>A Chartered Accountant and ex-banker with strong investor relationships and 25+ successfully closed fundraise mandates for early-stage D2C brands, tech companies and B2B SaaS, across VCs, family offices and angel syndicates.</p>
                    </div>
                </div>
                <div className="bg-[#C4BAB010] items-stretch gap-x-5 rounded-xl flex  p-8">
                    <div className="rounded-lg aspect-3/4 w-[35%] overflow-hidden">
                        <div data-img-effect className="w-full h-full">
                            <img className='cover' src="/images/team/ankur.png" alt="" />
                        </div>
                    </div>
                    <div className="w-[65%] flex flex-col justify-between">
                        <div className="">
                            <h4 className='capitalize leading-none'>Ankur Goyal</h4>
                            <h6 className='opacity-60'>Capital • Strategy</h6>
                        </div>
                        <p className='leading-tight text-lg opacity-80 '>An ex-banker with 20+ years of experience addressing capital requirements across industries, stages, geographies and structures. Works closely with startup and SME founders across India, the GCC and the USA on business and fundraising strategy.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CapitalAdvisory