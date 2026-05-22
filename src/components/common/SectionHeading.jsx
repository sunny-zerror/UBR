import React from 'react'
import DotButton from './DotButton'

const SectionHeading = ({ btnText, btnOutline, heading, desc }) => {
    return (
        <>
            <div className='container items-stretch grid  grid-cols-6'>
                <div className="col-span-4  space-y-5">
                    <DotButton text={btnText} theme={btnOutline} />
                    <h2 data-heading-effect className='capitalize w-[60%] '>{heading}</h2>
                </div>
                <div className=" col-span-2 flex items-end ">
                    <p data-para-effect className=' text-xl leading-tight '>{desc}</p>
                </div>
            </div>
        </>
    )
}

export default SectionHeading