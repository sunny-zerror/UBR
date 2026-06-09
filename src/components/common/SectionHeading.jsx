import React from 'react'

const SectionHeading = ({ btnText, btnOutline, heading, desc }) => {
    return (
        <>
            <div className='container'>
                <h6 className='text-xs mb-2 uppercase'>[{btnText}]</h6>
                <div className="md:grid grid-cols-6">
                    <h2 data-para-effect className=' col-span-4 md:w-[75%] leading-none md:md:font-semibold  '>  {heading}</h2>
                    <div className=" max-sm:mt-2 col-span-2 flex pb-3 items-end">
                        <div className=' leading-tight md:text-xl  '>  {desc}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionHeading