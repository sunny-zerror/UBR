import { RiCloseLine } from '@remixicon/react'
import React from 'react'
import DotButton from '../common/DotButton'
import SectionHeading from '../common/SectionHeading'
import { Link } from 'next-view-transitions'
import { WorkData } from '@/store/WorkData'

const SelectedWork = () => {
    return (
        <div className='py-24 space-y-16  border-b border-black/10'>
            <SectionHeading
                btnText="Selected work"
                heading="Brands we have backed."
                desc="Capital and celebrity, structured as a single move. Strategic advisory anchored to talent. A full-stack engagement that compounds."
            />
            <div className="container grid grid-cols-2 gap-x-5 gap-y-10">
                {WorkData.map((item, i) => (
                <Link key={i} href={`/work/${item.slug}`} className=" w-full space-y-4 group cursor-pointer">
                    <div className={`w-full center aspect-video overflow-hidden rounded-sm  ${item.classname} `}>
                        <div data-img-effect className="w-full h-full center">
                            <img className='group-hover:scale-110 transition-all duration-300' src={item.image} alt="" />
                        </div>
                    </div>
                    <div className="">
                        <h6 className='opacity-80'>{item.engagement}</h6>
                        <h4 className='capitalize  flex items-center gap-x-2'>{item.title}</h4>
                    </div>
                </Link>
                ))}
            </div>
        </div>
    )
}

export default SelectedWork