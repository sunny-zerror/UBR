import React from 'react'
import DotButton from '../common/DotButton'

const CoFounders = () => {
    return (
        <>
            <div className='container py-24 pb-16 space-y-5'>
                <DotButton text="Co Founders"/>
                <div className="grid grid-cols-2 items-end ">
                    <h2 className='capitalize'>Three operators.<br /> One model.</h2>
                    <div className="flex justify-end">
                        <p className='w-[60%] leading-tight '>UBR brings disciplined capital and operator discipline. DISRPTVE brings audience ownership and brand-building. Together, the two cultures most consumer ventures struggle to combine.</p>
                    </div>
                </div>
            </div>
            <div className="container grid grid-cols-3 gap-x-5">
                <div className="space-y-4">
                    <div className="w-full rounded-sm  overflow-hidden aspect-6/7">
                        <img className='cover' src="/images/team/binoy.png" alt="" />
                    </div>
                    <div className="space-y-1">
                        <h4 className='capitalize leading-none'>Binoy Khimji</h4>
                        <h6 className='opacity-60'>Co-founder • UBR</h6>
                        <p className='leading-tight opacity-80 w-[90%] mt-5'>Brings disciplined capital, enterprise scaling, and a proven playbook for turning revenue into profit. The P&L rigour and governance side of the model, anchored by the Cornerstone ecosystem.</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="w-full rounded-sm  overflow-hidden aspect-6/7">
                        <img className='cover' src="/images/team/ashish.png" alt="" />
                    </div>
                    <div className="space-y-1">
                        <h4 className='capitalize leading-none'>Ashish Chowdhry</h4>
                        <h6 className='opacity-60'>Co-founder • disrptve</h6>
                        <p className='leading-tight opacity-80 w-[90%] mt-5'>Authentic celebrity co-ownership, deep brand-building experience, unrivalled access to high-affinity audiences. The talent and brand side of the operating model.</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="w-full rounded-sm  overflow-hidden aspect-6/7">
                        <img className='cover' src="/images/team/kaushik.png" alt="" />
                    </div>
                    <div className="space-y-1">
                        <h4 className='capitalize leading-none'>Kaushik Sundararajan</h4>
                        <h6 className='opacity-60'>Co-founder • disrptve</h6>
                        <p className='leading-tight opacity-80 w-[90%] mt-5'>15+ years across marketing and brand strategy. Ran Omnikon for a decade before co-founding DISRPTVE Communications. Founder’s mindset, agency-built execution.</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CoFounders