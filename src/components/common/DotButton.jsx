import React from 'react'

const DotButton = ({ text, className }) => {
  return (
    <>
      <span className={` w-fit block text-black font-medium text-xs uppercase ${className} `}> [{text}]</span>
    </>
  )
}

export default DotButton