"use client";
import { RiArrowDownSLine } from '@remixicon/react';
import React, { useState } from 'react'

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
const ContactForm = () => {
    const [inquiry, setInquiry] = useState("General Inquiry");
    return (
        <>
            <div className="container mb-24">
                <div className="w-full grid grid-cols-5 gap-x-32">
                    <div className="col-span-2">
                        <h6 className='text-blue'>Direct</h6>
                        <div className="grid mt-5 grid-cols-1 gap-5">
                            {foundersData.map((item, index) => (
                                <div
                                    key={index}
                                    className="px-7  space-y-2 py-5 border hover:bg-[#1666BA] transition-colors duration-300 hover:text-white cursor-pointer border-black/20 rounded-lg "
                                >
                                    {/* top */}
                                    <h6 className="flex items-center gap-3 uppercase ">
                                        <span>{item.role}</span>
                                        <span>•</span>
                                        <span>{item.company}</span>
                                    </h6>

                                    {/* name */}
                                    <h5 className="">
                                        {item.name}
                                    </h5>

                                    {/* email */}
                                    <a
                                        href={`mailto:${item.email}`}
                                        className="inline-block  "
                                    >
                                        {item.email}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className=" col-span-3 space-y-8 h-full relative">
                        <form className="space-y-6 mt-4">
                            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="text-xs font-medium uppercase  text-[#0f1219b3]">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="John Anderson"
                                        className="  heading-font w-full border border-black/20 rounded-lg  px-6 py-4 placeholder:text-[#0f121980] text-[#0f1219b3] outline-none placeholder:text-[#0f1219b3] focus:border-black/20 rounded-lg"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-medium uppercase  text-[#0f1219b3]">
                                        Email
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="john.anderson@gmail.com"
                                        className="  heading-font w-full border border-black/20 rounded-lg  px-6 py-4 placeholder:text-[#0f121980] text-[#0f1219b3] outline-none placeholder:text-[#0f1219b3] focus:border-black/20 rounded-lg"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                                <div className="space-y-3">
                                    <label className="text-xs font-medium uppercase  text-[#0f1219b3]">
                                        Company or brand
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="john.anderson@gmail.com"
                                        className="  heading-font w-full border border-black/20 rounded-lg  px-6 py-4 placeholder:text-[#0f121980] text-[#0f1219b3] outline-none placeholder:text-[#0f1219b3] focus:border-black/20 rounded-lg"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-medium uppercase  text-[#0f1219b3]">
                                        Stage
                                    </label>

                                    <div className="relative">
                                        <select
                                            value={inquiry}
                                            onChange={(e) => setInquiry(e.target.value)}
                                            className="  heading-font w-full appearance-none border border-black/20 rounded-lg  px-6 py-4 placeholder:text-[#0f121980] text-[#111827] outline-none focus:border-black/20 rounded-lg"
                                        >
                                            {stageOptions.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>

                                        <RiArrowDownSLine
                                            size={18}
                                            className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 text-[#4b5563]"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs font-medium uppercase  text-[#0f1219b3]">
                                    What are you looking for?
                                </label>

                                <div className="relative">
                                    <select
                                        value={inquiry}
                                        onChange={(e) => setInquiry(e.target.value)}
                                        className="  heading-font w-full appearance-none border border-black/20 rounded-lg  px-6 py-4 placeholder:text-[#0f121980] text-[#111827] outline-none focus:border-black/20 rounded-lg"
                                    >
                                        {serviceOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>

                                    <RiArrowDownSLine
                                        size={18}
                                        className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 text-[#4b5563]"
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
                                    className=" heading-font w-full resize-none border border-black/20 rounded-lg  px-6 py-4 placeholder:text-[#0f121980]  text-[#0f1219b3] outline-none placeholder:text-[#0f1219b3] focus:border-black/20 rounded-lg"
                                />
                            </div>

                        </form>
                                    <button className='bg-black text-white text-sm px-4 py-2.5 rounded-full'>Send Message</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm