import React from 'react'

const SectionHeading = ({ btnText, btnOutline, heading, desc }) => {
    return (
        <>
            <div className='container'>
                <h6 className='text-xs mb-2 uppercase'>[{btnText}]</h6>
                <div className="grid grid-cols-6 items-end">
                    <h3 data-para-effect className=' col-span-4 w-[60%] leading-tight font-semibold capitalize'>  {heading}</h3>
                    <p data-para-effect className=' col-span-2 pb-3 leading-tight opacity-60 text-lg capitalize'>  {desc}</p>
                </div>
            </div>
        </>
    )
}

export default SectionHeading