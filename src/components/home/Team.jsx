import React from 'react'

const Team = () => {
    return (
        <>
            <div className='container py-24 mt-24 border-t border-black/30 space-y-5'>
                <h6 className='text-blue'>The team</h6>
                <div className="grid grid-cols-2 items-end ">
                    <h2>An embedded <br /> operating team.</h2>
                    <div className="flex justify-end">
                        <p className='w-[60%] leading-tight '>Operators, strategists and creatives, assembled to solve India's specific challenges.</p>
                    </div>
                </div>
            </div>
            <div className="container grid grid-cols-3 gap-x-5">
                <div className="space-y-4">
                    <div className="w-full rounded-sm  overflow-hidden aspect-6/7">
                        <img className='cover' src="/images/team/binoy.png" alt="" />
                    </div>
                    <div className="">
                        <h6 className='text-blue'>Co-founder • UBR</h6>
                        <h4 className='capitalize leading-none'>Binoy Khimji</h4>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="w-full rounded-sm  overflow-hidden aspect-6/7">
                        <img className='cover' src="/images/team/ashish.png" alt="" />
                    </div>
                    <div className="">
                        <h6 className='text-blue'>Co-founder • disrptve</h6>
                        <h4 className='capitalize leading-none'>Ashish Chowdhry</h4>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="w-full rounded-sm  overflow-hidden aspect-6/7">
                        <img className='cover' src="/images/team/kaushik.png" alt="" />
                    </div>
                    <div className="">
                        <h6 className='text-blue'>Co-founder • disrptve</h6>
                        <h4 className='capitalize leading-none'>Kaushik Sundararajan</h4>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Team