import React from 'react'

const ContactHero = () => {
  return (
   <div className='container bg-blue pb-32 h-screen border-b mb-24 border-black/30 flex justify-end flex-col gap-y-7'>
      <img className='w-[60%] opacity-50 right-0 absolute top-1/2 -translate-y-1/2 z-[-1]' src="https://cdn.prod.website-files.com/667d8d81555e958a89e78d90/667d8d81555e958a89e78e30_map-rest.webp" alt="" />
      <h6 className=''>contact</h6>
      <h1 className=''>Let’s build <br /> something.</h1>
      <p className='text-lg leading-tight w-1/2'>Founders, talent partners, investors and retailers, we’d like to hear from you. Tell us where you are and we’ll come back within two working days.</p>
    </div>
  )
}

export default ContactHero