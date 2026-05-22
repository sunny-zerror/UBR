import React from 'react'

const DotButton = ({ text, className, theme }) => {
  return (
    <>
      <p className={`${theme === "outline" && "border-white"} border border-[#191b1d] text-xs uppercase  bg-black w-fit rounded-full px-3 py-2 pb-1.75 leading-none pl-3 ${className} `}><span className=''>•</span>&nbsp; {text}</p>
    </>
  )
}

export default DotButton