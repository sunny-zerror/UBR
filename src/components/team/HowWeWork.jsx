import React from 'react'
import DotButton from '../common/DotButton'

const valuesData = [
    {
        id: "01",
        label: "Embedded",
        title: "Same room. Same target.",
        description:
            "We sit alongside the founder, in operating reviews, board prep and the daily decisions that shape the brand.",
    },

    {
        id: "02",
        label: "Aligned",
        title: "Equity vested on KPIs.",
        description:
            "No commission-on-spend, no padded retainers. We win when you win, on the metrics agreed at the start.",
    },

    {
        id: "03",
        label: "Long Horizon",
        title: "Built to compound.",
        description:
            "We optimise for the value created at year three, not the campaign rendered at month three.",
    },
];
const HowWeWork = () => {
    return (
        <>
            <div className='container border-t border-black/10 mt-24 py-24 pb-16 space-y-5'>
                <DotButton text="How we work" />
                <div className="grid grid-cols-2 items-end ">
                    <h2 className='capitalize'>Co-founders, <br /> not consultants.</h2>
                    <div className="flex justify-end">
                        <p className='w-[60%] leading-tight '>We embed across all five pillars from day one. Equity-aligned. Vested against KPIs. Same room as the founder, same target on the wall.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                {valuesData.map((item, i) => (
                    <div key={i} className="flex border-b pb-3 mb-10 border-black/10  justify-between">
                        <div className="space-y-10">
                            <h6>{item.label}</h6>
                            <h4 className='leading-none w-[70%]'>{item.title}</h4>
                        </div>
                        <div className="w-[30%] flex items-end">
                            <p className='leading-tight text-xl'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default HowWeWork