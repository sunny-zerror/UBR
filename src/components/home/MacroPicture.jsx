import React from 'react'
import DotButton from '../common/DotButton'

export const statsData = [
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
        <div className='w-full  pb-12 bg-[#CDCECF]'>
            <div className='container pt-24  space-y-5'>
                <DotButton text="The macro picture" />
                <div className="grid grid-cols-2 items-end ">
                    <h2 className='capitalize'>All signals point to a once-in-a-generation moment.</h2>
                    <div className="flex justify-end">
                        <p className='w-[60%] leading-tight '>Five tailwinds are converging to create an unprecedented environment for building consumer brands in India. The next decade will be defined by the model that captures India 1.</p>
                    </div>
                </div>
            </div>
            <div className="container space-y-10  mt-24">

                {statsData.flat().map((item, index) => (
                    <div
                        key={index}
                        className="w-full border-b pb-3 border-black/10 last:border-none grid grid-cols-2 items-stretch"
                    >
                        <div>
                            <p className="font-medium tracking-tight text-white text-9xl">
                                {item.value}

                                {item.suffix && (
                                    <span className="text-5xl">{item.suffix}</span>
                                )}
                            </p>
                        </div>

                        <div className="flex justify-end">
                            <div className="w-[60%] flex flex-col justify-between">
                                <p className="text-xl font-medium uppercase opacity-80">
                                    {item.title}
                                </p>

                                <p className="opacity-60 leading-tight">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default MacroPicture