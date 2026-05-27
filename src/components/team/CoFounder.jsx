import React from 'react'
import DotButton from '../common/DotButton'
import SectionHeading from '../common/SectionHeading'

const CoFounders = () => {
    return (
        <div className='space-y-16 pt-24'>
            <SectionHeading
                btnText="Co Founders"
                heading="Three operators. One model."
                desc="UBR brings disciplined capital and operator discipline. DISRPTVE brings audience ownership and brand-building. Together, the two cultures most consumer ventures struggle to combine." 
                />
            <div className="container grid grid-cols-3 gap-x-5">
                <div className="space-y-4">
                    <div className="w-full rounded-sm  overflow-hidden aspect-6/7">
                        <div data-img-effect className="w-full h-full">
                            <img className='cover' src="/images/team/binoy.png" alt="" />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h4 className='capitalize font-semibold leading-none'>Binoy Khimji</h4>
                        <h6 className=''>Co-founder • UBR</h6>
                        <p className='leading-tight  w-[90%] mt-5'>Brings disciplined capital, enterprise scaling, and a proven playbook for turning revenue into profit. The P&L rigour and governance side of the model, anchored by the Cornerstone ecosystem.</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="w-full rounded-sm  overflow-hidden aspect-6/7">
                        <div data-img-effect className="w-full h-full">
                            <img className='cover' src="/images/team/ashish.png" alt="" />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h4 className='capitalize font-semibold leading-none'>Ashish Chowdhry</h4>
                        <h6 className=''>Co-founder • disrptve</h6>
                        <p className='leading-tight  w-[90%] mt-5'>Authentic celebrity co-ownership, deep brand-building experience, unrivalled access to high-affinity audiences. The talent and brand side of the operating model.</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="w-full rounded-sm  overflow-hidden aspect-6/7">
                        <div data-img-effect className="w-full h-full">
                            <img className='cover' src="/images/team/kaushik.png" alt="" />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h4 className='capitalize font-semibold leading-none'>Kaushik Sundararajan</h4>
                        <h6 className=''>Co-founder • disrptve</h6>
                        <p className='leading-tight  w-[90%] mt-5'>15+ years across marketing and brand strategy. Ran Omnikon for a decade before co-founding DISRPTVE Communications. Founder’s mindset, agency-built execution.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CoFounders