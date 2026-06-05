import React from 'react'
import DotButton from '../common/DotButton'
import SectionHeading from '../common/SectionHeading';

const principlesData = [
    {
        id: "01",
        title: "Real traction comes from real action.",
        description:
            "We prioritise disciplined execution and measurable results over industry buzz.",
    },
    {
        id: "02",
        title: "Hungry brands outpace heritage.",
        description:
            "Agility, authenticity and a P&L-first mindset are the ultimate competitive advantages.",
    },
    {
        id: "03",
        title: "Storytelling is the strongest differentiator.",
        description:
            "We build authentic emotional connection, a moat capital can’t cross.",
    },
    {
        id: "04",
        title: "Shared wins demand true partnership.",
        description:
            "We embed as co-founders, not consultants. We are only successful when you are.",
    },
    {
        id: "05",
        title: "Made to last, not just to exit.",
        description:
            "Our goal is to create iconic, profitable, and enduring assets.",
    },
];
const TheMindset = () => {
    return (
        <div className='w-full py-12 md:py-24 border-b pb-10 border-black/50 '>
            <SectionHeading
                btnText="The Mindset"
                heading="An operating system for profitable scale. "
                desc="In India's complex market, long-term value isn't created by venture capital alone. It is created by venture building. Five convictions, five phases, five pillars." />

            <div className="container space-y-8  mt-5 md:mt-16">

                {principlesData.flat().map((item, index) => (
                    <div
                        key={index}
                        className="w-full border-b pb-3 border-black/20 last:border-none grid grid-cols-6 items-stretch"
                    >
                        <div className=' col-span-2  md:col-span-4'>
                            <p data-para-effect className=" diagramm   md:leading-24 text-4xl md:text-8xl">
                                {item.id}
                            </p>
                        </div>

                        <div className=" col-span-4 md:col-span-2 flex flex-col justify-between">
                            <p className="   max-sm:mb-2 leading-tight  uppercase  ">
                                {item.title}
                            </p>

                            <p className=" md:w-[80%] opacity-60 leading-5">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default TheMindset