import React from 'react'
import DotButton from './DotButton'

const SectionHeading = ({ btnText, btnOutline, heading }) => {
    return (
        <>
            <div className='container'>
                <div data-para-effect className="absolute translate-y-3.5">
                    <span className=' pr-44 uppercase text-xs aeonik pointer-events-none'>[{btnText}]</span> 
                </div>
                <h2 data-heading-effect className='capitalize'> <span className=' pr-44 uppercase text-xs aeonik opacity-0 pointer-events-none'>[{btnText}]</span> {heading}</h2>
            </div>
        </>
    )
}

export default SectionHeading