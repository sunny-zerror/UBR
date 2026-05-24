import React from 'react'

const Button = ({ text ,className }) => {
  return (
    <>
      <button className={`group block w-fit  text-white text-sm px-4 border hover:text-[#191b1d] border-transparent hover:border-[#191b1d] py-2.5 relative overflow-hidden rounded-full transition-all duration-300 ${className}`}>
        <span className='absolute w-full h-full z-[-1] bg-[#F20908]  inset-0 group-hover:-top-full transition-all duration-300'></span>
        {text}
      </button>
    </>
  )
}

export default Button