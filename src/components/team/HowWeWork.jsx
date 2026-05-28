import React from 'react'
import DotButton from '../common/DotButton'
import SectionHeading from '../common/SectionHeading';

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
        <div className=' night_bg text-white   py-12 md:py-24 space-y-5 md:space-y-16'>
            <SectionHeading
                btnText="How we work"
                heading="Co-founders, not consultants."
                desc="We embed across all five pillars from day one. Equity-aligned. Vested against KPIs. Same room as the founder, same target on the wall." />
            <div className="container">
                {valuesData.map((item, i) => (
                    <div key={i} className="md:grid grid-cols-6 border-b  pb-3 mb-7 md:mb-10 border-white/50  justify-between">
                        <div className=" col-span-4 space-y-2 md:space-y-20">
                            <h6>{item.label}</h6>
                            <h4 className='leading-none md:font-semibold w-[70%]'>{item.title}</h4>
                        </div>
                        <div className=" max-sm:mt-8 col-span-2 flex items-end">
                            <p className='leading-tight md:text-lg'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HowWeWork