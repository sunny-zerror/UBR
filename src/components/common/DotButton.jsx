import React from 'react'

const DotButton = ({ text, className, theme }) => {
  return (
    <>
      <p className={` text-white text-xs uppercase  bg-[#F20908] w-fit rounded-full px-3 py-2 pb-1.75 leading-none pl-3 ${className} `}><span className=''>•</span>&nbsp; {text}</p>
    </>
  )
}

export default DotButton