import { RiCloseLine } from '@remixicon/react';
import React from 'react'
import Button from '../common/Button';
import { Link } from 'next-view-transitions';
import { WorkData } from '@/store/WorkData';

export const WorksList = () => {
    return (
        <>
            <div className="container pt-24 space-y-20">
                {WorkData.map((item, i) => (
                    <div key={i} className=" border-b pb-20 border-black/10 last:border-none last:pb-0 w-full items-stretch grid grid-cols-5">
                        <div className="col-span-2 flex flex-col justify-between">
                            <div className="">
                                <h3 data-heading-effect className="capitalize leading-15!  ">{item.title}</h3>
                                <h6 className="opacity-80">{item.category}</h6>
                            </div>
                            <div className="space-y-4">
                                <p className='leading-tight text-xl w-[80%]'>{item.description}</p>
                                <div className="relative flex flex-wrap gap-2">
                                    {item.services.map((tag, i) => (
                                        <div key={i} className="rounded-md font-medium  px-4 py-2 bg-[#F8F8F8]">
                                            <p className=" text-sm uppercase">
                                                {tag}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <Link href={`/work/${item.slug}`} className='w-fit block'>
                                    <Button text={"See Case Study"} className="mt-5" />
                                </Link>
                            </div>
                        </div>
                        <div className={`col-span-3 aspect-video center ${item.classname}`}>
                            <div data-img-effect className="w-full h-full center">
                                <img className='' src={item.image} alt="" />
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </>
    )
}
