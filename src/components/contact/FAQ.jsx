"use client";
import { RiCloseLine } from '@remixicon/react';
import React, { useState } from 'react'

const faqData = [
    {
        id: 1,
        question: "What services are offered?",
        answer:
            "We design and build modern, high-performing websites using Framer and custom components."
    },
    {
        id: 2,
        question: "Who is this for?",
        answer:
            "Ideal for startups, agencies, creators, and teams needing a professional digital presence."
    },
    {
        id: 3,
        question: "How do projects start?",
        answer:
            "Projects begin with clear requirements, goals, and timelines to ensure smooth execution."
    },
    {
        id: 4,
        question: "How long is the delivery time?",
        answer:
            "Timelines vary by scope, but most projects are completed within two to four weeks."
    },
    {
        id: 5,
        question: "Is Framer required?",
        answer:
            "Yes, all templates and builds are optimized specifically for Framer workflows."
    }
];
const FAQ = () => {

    const [openFaqId, setOpenFaqId] = useState(null);

    return (
        <>
            <div className=" pt-12 md:pt-24 container md:grid grid-cols-2">
                <div className="w-full">
                    <h3 data-para-effect className=' leading-tight md:md:font-semibold capitalize'>FAQs</h3>
                </div>
                <div className="w-full max-sm:mt-10 ">
                    {faqData.map((item, i) => (
                        <div
                            key={i}
                            onClick={() =>
                                setOpenFaqId((prev) => (prev === item.id ? null : item.id))
                            }
                            className={`hover:pl-3 transition-all duration-300 w-full cursor-pointer border-b pt-4 border-black/10 ${openFaqId === item.id ? "pl-3" : ""} `}>
                            <div className="w-full pb-4 flex justify-between">
                                <h5 className=''>{item.question}</h5>
                                <RiCloseLine className={`transition-all duration-300 ${openFaqId === item.id ? "rotate-0" : "rotate-45"}`} />
                            </div>
                            <div className={` w-full h-0 transition-all duration-300 ${openFaqId === item.id ? "h-20" : "h-0"} overflow-hidden`}>
                                <p className=' leading-tight text-lg opacity-80 w-[80%]'>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default FAQ