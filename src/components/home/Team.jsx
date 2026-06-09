import React from 'react'
import DotButton from '../common/DotButton'
import SectionHeading from '../common/SectionHeading'

const Team = () => {
    return (
        <div className='pt-12 md:pt-24 space-y-5 md:space-y-16'>
            <SectionHeading
                btnText={"The Team"}
                heading={
                    "An embedded operating team built for India’s unique consumer landscape, bringing together operators, strategists, and creatives to solve growth, distribution, and brand challenges from the inside."
                }
            />
            <div className="container grid grid-cols-3 gap-x-5">
                <div className="space-y-4">
                    <div className="w-full rounded-sm  overflow-hidden aspect-6/7">
                        <img data-img-effect className='cover' src="/images/team/binoy.png" alt="img" />
                    </div>
                    <div className="space-y-1">
                        <h4 className='  md:font-semibold leading-none'>Binoy Khimji</h4>
                        <h6 className='opacity-80'>Co-founder • UBR</h6>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="w-full rounded-sm  overflow-hidden aspect-6/7">
                        <img data-img-effect className='cover' src="/images/team/ashish.png" alt="img" />
                    </div>
                    <div className="space-y-1">
                        <h4 className='  md:font-semibold leading-none'>Ashish Chowdhry</h4>
                        <h6 className='opacity-80'>Co-founder • disrptve</h6>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="w-full rounded-sm  overflow-hidden aspect-6/7">
                        <img data-img-effect className='cover' src="/images/team/kaushik.png" alt="img" />
                    </div>
                    <div className="space-y-1">
                        <h4 className='  md:font-semibold leading-none'>Kaushik Sundararajan</h4>
                        <h6 className='opacity-80'>Co-founder • disrptve</h6>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Team