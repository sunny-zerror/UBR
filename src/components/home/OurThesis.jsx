"use client";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef } from 'react'
import DotButton from '../common/DotButton';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const OurThesis = () => {
    const containerRef = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            },
        })
        tl.to(".circ_1", {
            opacity: 1,
            scale: 1
        })
        tl.to(".circ_2", {
            opacity: 1,
            scale: 1
        })
        tl.to(".circ_3", {
            opacity: 1,
            scale: 1
        })
        tl.to(".circ_4", {
            opacity: 1,
            scale: 1
        })
        tl.to([".circ_1", ".circ_3"], {
            transform: "translateX(0)",
            opacity: 0
        })
        tl.to([".circ_2", ".circ_4"], {
            transform: "translateY(0)",
            opacity: 0
        }, "<")
        tl.to(".circ_5", {
            opacity: 0
        }, "<")
        tl.to(".spn_1", {
            transform: "translateY(-100%)"
        }, "<")
        tl.to(".circ_6", {
            opacity: 1
        }, "<")
        tl.to(".spn_2", {
            transform: "translateY(0%)"
        }, "<")

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className=' border-b border-white/50  text-white w-full h-[300vh] relative'>
            <div className="container h-screen sticky! overflow-hidden top-0 md:flex ">
                {/* <img className=' absolute inset-0 cover opacity-50  object-top' src="https://images.stripeassets.com/fzn2n1nzq965/5dQAw5oJf3TOO1Jt6IKDRH/f391594c11f38d821259acdd3412a7a6/platform-graphic-background_2x.png?w=2460&fm=webp&q=90" alt="img" /> */}
                <div className=" w-full md:w-1/2 h-[50vh] md:h-screen flex flex-col gap-y-5 md:gap-y-20 justify-center">
                    <div className="space-y-5">
                        <DotButton text="The Outcome" className={"text-white!"} />
                        <h3 data-para-effect className='capitalize md:font-semibold leading-tight'>Built to scale brands <br /> the right way.</h3>
                    </div>
                    <p data-para-effect className='md:text-lg opacity-60 leading-tight md:w-[80%] '>Old playbook: buy customers, build the brand later. We invert it. The talent we bring into a brand as a co-owner already owns the audience the brand wants to sell to. <br /> <br /> Trust shows up before the spend. CAC bends. Repeat purchase rises. The brand stops renting attention and starts owning it.
<br /> <br /> But trust alone is not a business. To turn it into profitable scale, five capabilities have to work as one.</p>
                </div>
                <div className=" w-full md:w-1/2 h-[50vh] md:h-screen center relative">
                    <div className=" circ_1 scale-0 opacity-0 size-40 md:size-72 -translate-x-32 md:-translate-x-56 absolute border border-white rounded-full center">
                        <div className=' text-sm md:text-xl md:font-semibold aeonik  uppercase block w-fit overflow-hidden'>
                            <p className='spn_1'>
                                Talent
                            </p>
                        </div>
                    </div>
                    <div className=" circ_2 scale-0 opacity-0 size-40 md:size-72 -translate-y-32 md:-translate-y-56 absolute border border-white rounded-full center">
                        <div className=' text-sm md:text-xl md:font-semibold aeonik  uppercase block w-fit overflow-hidden'>
                            <p className='spn_1'>
                                Capital
                            </p>
                        </div>
                    </div>
                    <div className="circ_3  scale-0 opacity-0 size-40 md:size-72 translate-x-32 md:translate-x-56 absolute border border-white rounded-full center">
                        <div className=' text-sm md:text-xl md:font-semibold aeonik  uppercase block w-fit overflow-hidden'>
                            <p className='spn_1'>
                                Design
                            </p>
                        </div>
                    </div>
                    <div className=" circ_4 scale-0 opacity-0 size-40 md:size-72 translate-y-32 md:translate-y-56 absolute border border-white rounded-full center">
                        <div className=' text-sm md:text-xl md:font-semibold aeonik  uppercase block w-fit overflow-hidden'>
                            <p className='spn_1'>
                                Strategy
                            </p>
                        </div>
                    </div>
                    <div className=" circ_5  size-40 md:size-72 absolute border border-white rounded-full center">
                        <div className=' text-sm md:text-xl md:font-semibold aeonik  uppercase block w-fit overflow-hidden'>
                            <p className='spn_1'>
                                Distribution
                            </p>
                        </div>
                    </div>
                    <div className=" circ_6 opacity-0 size-40 md:size-72  absolute border border-white rounded-full center">
                        <div className=' text-sm md:text-xl md:font-semibold aeonik  uppercase block w-fit overflow-hidden'>
                            <p className='spn_2 translate-y-full'>
                                Sustainable
                                Scale
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurThesis