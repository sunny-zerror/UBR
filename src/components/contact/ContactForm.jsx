"use client";
import { RiArrowDownLine, RiArrowDownSLine } from '@remixicon/react';
import React, { useState } from 'react'
import DotButton from '../common/DotButton';
import Button from '../common/Button';

const foundersData = [
    {
        role: "Co-Founder",
        company: "UBR",
        name: "Binoy Khimji",
        email: "binoykhimji@gmail.com",
    },
    {
        role: "Co-Founder",
        company: "DISRPTVE",
        name: "Ashish Chowdhry",
        email: "ashish@disrptve.com",
    },
    {
        role: "Co-Founder",
        company: "DISRPTVE",
        name: "Kaushik Sundararajan",
        email: "kaushik@disrptve.com",
    },
];

const stageOptions = [
    {
        label: "Idea / pre-launch",
        value: "idea-pre-launch",
    },
    {
        label: "Early traction (under ₹5Cr ARR)",
        value: "early-traction",
    },
    {
        label: "Scaling (₹5–50Cr ARR)",
        value: "scaling",
    },
    {
        label: "Established (₹50Cr+ ARR)",
        value: "established",
    },
    {
        label: "Investor / Retailer",
        value: "investor-retailer",
    },
    {
        label: "Talent / Creator",
        value: "talent-creator",
    },
    {
        label: "Other",
        value: "other",
    },
];

const serviceOptions = [
    {
        label: "Venture Build (full-stack, equity co-owner)",
        value: "venture-build",
    },
    {
        label: "Strategic Advisory + Talent (equity)",
        value: "strategic-advisory-talent",
    },
    {
        label: "Fundraise (success fee)",
        value: "fundraise",
    },
    {
        label: "Sweat-Equity Hybrid",
        value: "sweat-equity-hybrid",
    },
    {
        label: "Not sure yet",
        value: "not-sure-yet",
    },
];

const ContactForm = () => {
    const [inquiry, setInquiry] = useState("General Inquiry");
    const [stage, setStage] = useState("");
    const [service, setService] = useState("");
    return (
        <>
            <div className="container my-12 md:my-24">
                <div className="w-full grid grid-cols-1 md:grid-cols-2">
                    <div className=" md:pr-32 space-y-5">
                        <DotButton text="Direct" className={"md:ml-5"} />
                        <div className=" w-full   space-y-4 ">
                            {foundersData.map((item, index) => (
                                <div
                                    key={index}
                                    className=" relative transition-all duration-300  border-b pb-2 md:p-5 flex w-full  justify-between group cursor-pointer border-black/10  hover:text-white  "
                                >
                                    <div className="absolute bg-[#473eae] group-hover:h-full w-full z-[-1] left-0 h-0 bottom-0 transition-all duration-300"></div>
                                    <div className="space-y-5">
                                        <div className="">
                                            <h6 className="flex items-center gap-2  text-sm uppercase ">
                                                <span>{item.role}</span>
                                                <span>•</span>
                                                <span>{item.company}</span>
                                            </h6>
                                            <h5 className="">
                                                {item.name}
                                            </h5>
                                        </div>
                                        <a
                                            href={`mailto:${item.email}`}
                                            className="inline-block  "
                                        >
                                            {item.email}
                                        </a>
                                    </div>
                                    <div className={`size-10 center rounded-full border border-black/10 group-hover:bg-[#ffffff] group-hover:text-[#000063] transition-all duration-300`}>
                                        <RiArrowDownLine size={18} className='group-hover:-rotate-[135deg] -rotate-90 transition-all duration-300' />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className=" max-sm:mt-12 space-y-5 md:space-y-8  h-full relative">
                        <DotButton text="start a conversation" />
                        <form className=" space-y-5 md:space-y-10">
                            <div className="grid grid-cols-1  md:grid-cols-2 gap-5 md:gap-10">
                                <div className="space-y-2">
                                    <label className="text-xs aeonik font-medium uppercase  ">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="John Anderson"
                                        className="mt-2  heading-font w-full border-b border-black/20  placeholder:text-[#0f121980]  outline-none  focus:border-black/20 "
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs aeonik font-medium uppercase  ">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="john.anderson@gmail.com"
                                        className="mt-2  heading-font w-full border-b border-black/20  placeholder:text-[#0f121980]  outline-none  focus:border-black/20 "
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1  md:grid-cols-2 gap-5 md:gap-10">
                                <div className="space-y-3">
                                    <label className="text-xs aeonik font-medium uppercase  ">
                                        Company or brand
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="john.anderson@gmail.com"
                                        className=" mt-2 heading-font w-full border-b border-black/20  placeholder:text-[#0f121980]  outline-none  focus:border-black/20 "
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs aeonik font-medium uppercase ">
                                        Stage
                                    </label>

                                    <div className="relative mt-2">
                                        <select
                                            value={stage}
                                            onChange={(e) => setStage(e.target.value)}
                                            className={`cursor-pointer heading-font w-full appearance-none border-b border-black/20 outline-none focus:border-black/20 ${stage ? "text-[#111827]" : "text-[#0f121980] "
                                                }`}
                                        >
                                            <option value="" disabled>
                                                Select Stage
                                            </option>

                                            {stageOptions.map((option) => (
                                                <option
                                                    key={option.value}
                                                    value={option.value}
                                                    className="text-[#111827]"
                                                >
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>

                                        <RiArrowDownSLine
                                            size={18}
                                            className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#4b5563]"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs aeonik font-medium uppercase ">
                                    What are you looking for?
                                </label>

                                <div className="relative mt-2">
                                    <select
                                        value={service}
                                        onChange={(e) => setService(e.target.value)}
                                        className={`cursor-pointer heading-font w-full appearance-none border-b border-black/20 outline-none focus:border-black/20 ${service ? "text-[#111827]" : "text-[#0f121980] "
                                            }`}
                                    >
                                        <option value="" disabled>
                                            Select Service
                                        </option>

                                        {serviceOptions.map((option) => (
                                            <option
                                                key={option.value}
                                                value={option.value}
                                                className="text-[#111827]"
                                            >
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>

                                    <RiArrowDownSLine
                                        size={18}
                                        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#4b5563]"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs aeonik font-medium uppercase  ">
                                    Tell us a bit more
                                </label>

                                <textarea
                                    rows={7}
                                    placeholder="Category, traction, what you need, etc."
                                    required
                                    className=" mt-2 heading-font w-full resize-none border-b border-black/20  placeholder:text-[#0f121980]   outline-none  focus:border-black/20 "
                                />
                            </div>

                        </form>
                        <Button text='Send Message' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm