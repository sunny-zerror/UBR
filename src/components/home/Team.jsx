import React from 'react'
import DotButton from '../common/DotButton'
import SectionHeading from '../common/SectionHeading'

const Team = () => {
    return (
        <div className='pt-24 space-y-16'>
            <SectionHeading
                btnText={"The Team"}
                heading={"An embedded operating team."}
                desc={"Operators, strategists and creatives, assembled to solve India's specific challenges."}
            />
            <div className="container grid grid-cols-3 gap-x-5">
                <div className="space-y-4">
                    <div className="w-full rounded-sm  overflow-hidden aspect-6/7">
                        <img  data-img-effect className='cover' src="/images/team/binoy.png" alt="" />
                    </div>
                    <div className="space-y-1">
                        <h4 className='capitalize leading-none'>Binoy Khimji</h4>
                        <h6 className='opacity-80'>Co-founder • UBR</h6>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="w-full rounded-sm  overflow-hidden aspect-6/7">
                        <img  data-img-effect className='cover' src="/images/team/ashish.png" alt="" />
                    </div>
                    <div className="space-y-1">
                        <h4 className='capitalize leading-none'>Ashish Chowdhry</h4>
                        <h6 className='opacity-80'>Co-founder • disrptve</h6>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="w-full rounded-sm  overflow-hidden aspect-6/7">
                        <img  data-img-effect className='cover' src="/images/team/kaushik.png" alt="" />
                    </div>
                    <div className="space-y-1">
                        <h4 className='capitalize leading-none'>Kaushik Sundararajan</h4>
                        <h6 className='opacity-80'>Co-founder • disrptve</h6>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Team