import { RiCloseLine } from '@remixicon/react';
import React from 'react'
import Button from '../common/Button';

export const caseStudiesData = [
    {
        id: "01",
        category: "Fundraise + Brand Ambassador",
        img: "/images/work/brand-peep.png",
        classname: "bg-[#E1DFD2]",
        title: "Peep × Triptii Dimri",
        description:
            "Two moves, structured as one. Capital and celebrity timed to give the round visible runway and fund the campaign that followed.",
        tags: ["Capital", "Talent", "Strategy"],
    },

    {
        id: "02",
        category: "Strategic Advisory + Brand Ambassador",
        img: "/images/work/brand-kaai.png",
        classname: "bg-[#1F3352]",
        title: "KAAI × Tiger Shroff",
        description:
            "Mass-premium reach anchored to a strategic seat. Performance, energy and aspiration in a single signing.",
        tags: ["Strategy", "Talent", "Brand"],
    },

    {
        id: "03",
        category: "Strategic Advisory + Brand Ambassador",
        img: "/images/work/brand-trudys.png",
        classname: "bg-[#EBE2D9]",
        title: "House of Trudy’s × Athiya Shetty",
        description:
            "A considered fit, not a stunt signing. Quiet luxury mapped to a strategic anchor for product, retail and narrative.",
        tags: ["Strategy", "Talent", "Brand"],
    },

    {
        id: "04",
        category: "Fundraise + Strategic Advisory",
        img: "/images/work/brand-sports-stadium.png",
        classname: "bg-[#000000]",
        title: "Sports Stadium",
        description:
            "Capital in the door. Then a long-term seat at the table for the rollout, category positioning and growth strategy.",
        tags: ["Capital", "Strategy", "Brand"],
    },
];

export const WorksList = () => {
    return (
        <>
            <div className="container pt-24 space-y-20">
                {caseStudiesData.map((item, i) => (
                    <div key={i} className=" border-b pb-20 border-black/10 last:border-none last:pb-0 w-full items-stretch grid grid-cols-5">
                        <div className="col-span-2 flex flex-col justify-between">
                            <div className="space-y-2">
                                <h3 className="capitalize  ">{item.title}</h3>
                                <h6 className="opacity-80">{item.category}</h6>
                            </div>
                            <div className="space-y-4">
                                <p className='leading-tight text-xl w-[80%]'>{item.description}</p>
                                <div className="relative flex flex-wrap gap-2">
                                    {item.tags.map((tag, i) => (
                                        <div key={i} className="rounded-md font-medium  px-4 py-2 bg-[#F8F8F8]">
                                            <p className=" text-sm uppercase">
                                                {tag}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <Button text={"See Case Study"} className="mt-5" />
                            </div>
                        </div>
                        <div className={`col-span-3 aspect-video center ${item.classname}`}>
                            <div data-img-effect className="w-full h-full center">
                                <img className='' src={item.img} alt="" />
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </>
    )
}
