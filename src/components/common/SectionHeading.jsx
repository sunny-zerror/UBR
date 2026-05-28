import React from 'react'

const SectionHeading = ({ btnText, btnOutline, heading, desc }) => {
    return (
        <>
            <div className='container'>
                <h6 className='text-xs mb-2 uppercase'>[{btnText}]</h6>
                <div className="md:grid grid-cols-6">
                    <h3 data-para-effect className=' col-span-4 md:w-[75%] leading-tight md:md:font-semibold capitalize'>  {heading}</h3>
                    <div className=" max-sm:mt-2 col-span-2 flex pb-3 items-end">
                        <p data-para-effect className=' leading-tight opacity-60 md:text-lg capitalize'>  {desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionHeading