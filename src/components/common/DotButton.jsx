import React from 'react'

const DotButton = ({text , className}) => {
  return (
    <>
      <h6 className={`border text-white border-[#F20908] bg-[#F20908] w-fit rounded-full px-3 py-2 pb-1.75 leading-none pl-3 ${className} `}><span className=''>•</span>&nbsp; {text}</h6>
    </>
  )
}

export default DotButton