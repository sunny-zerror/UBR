import { RiCloseLine } from '@remixicon/react'
import React from 'react'
import DotButton from '../common/DotButton'

const SelectedWork = () => {
    return (
        <>
            <div className='container py-24 space-y-5'>
                <DotButton text="Selected work"/>
                <div className="grid grid-cols-2 items-end ">
                    <h2 className='capitalize'>Brands we have <br /> backed.</h2>
                    <div className="flex justify-end">
                        <p className='w-[60%] leading-tight '>Capital and celebrity, structured as a single move. Strategic advisory anchored to talent. A full-stack engagement that compounds.</p>
                    </div>
                </div>
            </div>
            <div className="container grid grid-cols-2 gap-x-5 gap-y-10">
                <div className="w-full space-y-4 group cursor-pointer">
                    <div className="w-full center aspect-video overflow-hidden rounded-sm  bg-[#E1DFD2]">
                        <img className='group-hover:scale-110 transition-all duration-300' src="/images/work/brand-peep.png" alt="" />
                    </div>
                    <div className="">
                        <h6 className='text-blue'>fundraise + ambassador</h6>
                    <h4 className='capitalize leading-none  flex items-center gap-x-2'>Peep <RiCloseLine /> Triptii Dimri</h4>
                    </div>
                </div>
                <div className="w-full space-y-4 group cursor-pointer">
                    <div className="w-full center aspect-video overflow-hidden rounded-sm  bg-[#1F3352]">
                        <img className='group-hover:scale-110 transition-all duration-300' src="/images/work/brand-kaai.png" alt="" />
                    </div>
                    <div className="">
                        <h6 className='text-blue'>advisory + ambassador</h6>
                    <h4 className='capitalize leading-none  flex items-center gap-x-2'>Kaai <RiCloseLine /> Tiger Shroff</h4>
                    </div>
                </div>
                <div className="w-full space-y-4 group cursor-pointer">
                    <div className="w-full center aspect-video overflow-hidden rounded-sm  bg-[#EBE2D9]">
                        <img className='group-hover:scale-110 transition-all duration-300' src="/images/work/brand-trudys.png" alt="" />
                    </div>
                    <div className="">
                        <h6 className='text-blue'>advisory + ambassador</h6>
                    <h4 className='capitalize leading-none  flex items-center gap-x-2'>Trudy's <RiCloseLine /> Athiya Shetty</h4>
                    </div>
                </div>
                <div className="w-full space-y-4 group cursor-pointer">
                    <div className="w-full center aspect-video overflow-hidden rounded-sm  bg-[#000000]">
                        <img className='group-hover:scale-110 transition-all duration-300' src="/images/work/brand-sports-stadium.png" alt="" />
                    </div>
                    <div className="">
                        <h6 className='text-blue'>fundraise + ambassador</h6>
                    <h4 className='capitalize leading-none  flex items-center gap-x-2'>Sports Stadium </h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelectedWork