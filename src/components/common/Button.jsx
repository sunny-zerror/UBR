import React from 'react'

const Button = ({ text, className }) => {
  return (
    <>
      <button className={`aeonik text-sm uppercase group block w-fit  text-[#FFFFFF]  px-4 border hover:text-[#000000] border-transparent hover:border-[#000000] hover:bg-[#FFFFFF] py-2.5 relative overflow-hidden  transition-all duration-300 ${className}`}>
        <span className='  absolute w-full h-full z-[-1] bg-[#29227d]  inset-0 group-hover:-top-full transition-all duration-300'></span>
        {text}
      </button>
    </>
  )
}

export default Button