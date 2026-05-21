"use client";
import { RiArrowDownSLine } from '@remixicon/react';
import React, { useState } from 'react'
import DotButton from '../common/DotButton';

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
    return (
        <>
            <div className="container my-24">
                <div className="w-full grid grid-cols-2">
                    <div className="">
                        <div className="w-1/2 space-y-5">
                            <DotButton text="get in touch" />
                            <h2 className='capitalize'>Fill the form</h2>
                        </div>
                    </div>
                    <div className=" space-y-8 h-full relative">
                        <form className="space-y-10">
                            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 gap-x-10">
                                <div className="space-y-2">
                                    <label className="text-xs font-medium uppercase  text-[#0f1219b3]">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="John Anderson"
                                        className="mt-2  heading-font w-full border-b border-black/20  placeholder:text-[#0f121980] text-[#0f1219b3] outline-none placeholder:text-[#0f1219b3] focus:border-black/20 "
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-medium uppercase  text-[#0f1219b3]">
                                        Email
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="john.anderson@gmail.com"
                                        className="mt-2  heading-font w-full border-b border-black/20  placeholder:text-[#0f121980] text-[#0f1219b3] outline-none placeholder:text-[#0f1219b3] focus:border-black/20 "
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 gap-x-10">
                                <div className="space-y-3">
                                    <label className="text-xs font-medium uppercase  text-[#0f1219b3]">
                                        Company or brand
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="john.anderson@gmail.com"
                                        className=" mt-2 heading-font w-full border-b border-black/20  placeholder:text-[#0f121980] text-[#0f1219b3] outline-none placeholder:text-[#0f1219b3] focus:border-black/20 "
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-medium uppercase  text-[#0f1219b3]">
                                        Stage
                                    </label>

                                    <div className="relative  mt-2">
                                        <select
                                            value={inquiry}
                                            onChange={(e) => setInquiry(e.target.value)}
                                            className=" cursor-pointer   heading-font w-full appearance-none border-b border-black/20  placeholder:text-[#0f121980] text-[#111827] outline-none focus:border-black/20 "
                                        >
                                            {stageOptions.map((option) => (
                                                <option key={option.value} value={option.value}>
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
                                <label className="text-xs font-medium uppercase  text-[#0f1219b3]">
                                    What are you looking for?
                                </label>

                                <div className="relative mt-2">
                                    <select
                                        value={inquiry}
                                        onChange={(e) => setInquiry(e.target.value)}
                                        className=" cursor-pointer heading-font w-full appearance-none border-b border-black/20  placeholder:text-[#0f121980] text-[#111827] outline-none focus:border-black/20 "
                                    >
                                        {serviceOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
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
                                <label className="text-xs font-medium uppercase  text-[#0f1219b3]">
                                    Tell us a bit more
                                </label>

                                <textarea
                                    rows={7}
                                    placeholder="category, traction, what you need, etc."
                                    required
                                    className=" mt-2 heading-font w-full resize-none border-b border-black/20  placeholder:text-[#0f121980]  text-[#0f1219b3] outline-none placeholder:text-[#0f1219b3] focus:border-black/20 "
                                />
                            </div>

                        </form>
                        <button className='bg-[#F20908] font-medium text-white text-sm px-5 py-3 rounded-full'>Send Message</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm