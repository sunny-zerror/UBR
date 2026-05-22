import { RiCloseLine } from '@remixicon/react'
import React from 'react'
import DotButton from '../common/DotButton'
import SectionHeading from '../common/SectionHeading'

const SelectedWork = () => {
    return (
        <div className='py-24 space-y-16  border-b border-black/10'>
            <SectionHeading
                btnText="Selected work"
                heading="Brands we have backed."
                desc="Capital and celebrity, structured as a single move. Strategic advisory anchored to talent. A full-stack engagement that compounds."
            />
            <div className="container grid grid-cols-2 gap-x-5 gap-y-10">
                <div className=" w-full space-y-4 group cursor-pointer">
                    <div className="w-full center aspect-video overflow-hidden rounded-sm  bg-[#E1DFD2]">
                        <div  data-img-effect className="w-full h-full center">
                        <img className='group-hover:scale-110 transition-all duration-300' src="/images/work/brand-peep.png" alt="" />
                        </div>
                    </div>
                    <div className="">
                        <h6 className='opacity-80'>fundraise + ambassador</h6>
                        <h4 className='capitalize  flex items-center gap-x-2'>Peep <RiCloseLine /> Triptii Dimri</h4>
                    </div>
                </div>
                <div className="w-full space-y-4 group cursor-pointer">
                    <div className="w-full center aspect-video overflow-hidden rounded-sm  bg-[#1F3352]">
                        <div  data-img-effect className="w-full h-full center">
                        <img className='group-hover:scale-110 transition-all duration-300' src="/images/work/brand-kaai.png" alt="" />
                        </div>
                    </div>
                    <div className="">
                        <h6 className='opacity-80'>advisory + ambassador</h6>
                        <h4 className='capitalize  flex items-center gap-x-2'>Kaai <RiCloseLine /> Tiger Shroff</h4>
                    </div>
                </div>
                <div className="w-full space-y-4 group cursor-pointer">
                    <div className="w-full center aspect-video overflow-hidden rounded-sm  bg-[#EBE2D9]">
                        <div  data-img-effect className="w-full h-full center">
                        <img className='group-hover:scale-110 transition-all duration-300' src="/images/work/brand-trudys.png" alt="" />
                        </div>
                    </div>
                    <div className="">
                        <h6 className='opacity-80'>advisory + ambassador</h6>
                        <h4 className='capitalize  flex items-center gap-x-2'>Trudy's <RiCloseLine /> Athiya Shetty</h4>
                    </div>
                </div>
                <div className="w-full space-y-4 group cursor-pointer">
                    <div className="w-full center aspect-video overflow-hidden rounded-sm  bg-[#000000]">
                        <div  data-img-effect className="w-full h-full center">
                        <img className='group-hover:scale-110 transition-all duration-300' src="/images/work/brand-sports-stadium.png" alt="" />
                        </div>
                    </div>
                    <div className="">
                        <h6 className='opacity-80'>fundraise + ambassador</h6>
                        <h4 className='capitalize  flex items-center gap-x-2'>Sports Stadium </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectedWork