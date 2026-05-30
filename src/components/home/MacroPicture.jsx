import React from 'react'
import SectionHeading from '../common/SectionHeading';

const statsData = [
    [
        {
            value: "$4.3",
            suffix: "T",
            title: "Consumer market by 2030",
            description:
                "India's spending becomes the world's second largest, expanding 46% from 2024.",
        },
        {
            value: "$600",
            suffix: "B",
            title: "Brand unlock",
            description:
                "Structural shift from unbranded retail creates white space for new players.",
        },
        {
            value: "28",
            suffix: "",
            title: "Median age",
            description:
                "Versus 39 in China. A young, aspirational population drives global consumption.",
        },
    ],
    [
        {
            value: "3",
            suffix: "X",
            title: "E-commerce users by 2030",
            description:
                "Online shoppers more than triple, building a vast accessible marketplace.",
        },
        {
            value: "$350",
            suffix: "B",
            title: "Digital GMV by 2030",
            description:
                "Reaches the same scale as Brazil's full retail sector today.",
        },
    ],
];
const MacroPicture = () => {
    return (
        <div className='w-full py-12 md:py-12 md:py-24  pb-10 border-t border-black/50  bg-[#FFFFFF]'>
            <SectionHeading
                btnText={"The context"}
                heading={
                    "India's consumer market is about to double."
                }
                desc={"The winners will be the brands that built the right operating model before the wave broke."}
            />

            <div className="container space-y-8 mt-5 md:mt-16">
                {statsData.flat().map((item, index) => (
                    <div
                        key={index}
                        className="w-full border-b pb-3 border-black/20 last:border-none grid grid-cols-6 items-stretch"
                    >
                        <div className=' col-span-2 flex items-center md:col-span-4'>
                            <p data-para-effect className=" aeonik   md:leading-24 text-4xl md:text-8xl">
                                {item.value}

                                {item.suffix && (
                                    <span className=" text-2xl md:text-5xl">{item.suffix}</span>
                                )}
                            </p>
                        </div>

                        <div className=" col-span-4 md:col-span-2 flex flex-col justify-between">
                            <p className=" max-sm:mb-2 leading-tight  uppercase ">
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

export default MacroPicture