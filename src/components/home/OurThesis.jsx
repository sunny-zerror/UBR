"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef } from 'react'
import DotButton from '../common/DotButton';
gsap.registerPlugin(ScrollTrigger);

const OurThesis = () => {
    const containerRef = useRef();

    useEffect(() => {
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

    }, []);

    return (
        <div ref={containerRef} className=' border-b border-black/10 w-full h-[300vh] relative'>
            <div className="container h-screen sticky! top-0 flex ">
                <div className="w-1/2 h-screen flex flex-col gap-y-20 justify-center">
                    <div className="space-y-5">
                        <DotButton text="Our thesis" />
                        <h2 data-heading-effect className='capitalize'>We replace paid CAC <br /> with   trust CAC.</h2>
                    </div>
                    <p data-para-effect className='text-xl leading-tight w-[80%] '>UBR × DISRPTVE is a venture builder that installs a complete operating system for profitable scaling, whether you are launching a new brand or reigniting an established one.</p>
                </div>
                <div className="w-1/2 h-screen center relative">
                    <div className=" circ_1 scale-0 opacity-0 size-[18rem] -translate-x-[14rem] absolute border border-[#191b1d] rounded-full center">
                        <div className=' text-xl font-medium  uppercase block w-fit overflow-hidden'>
                            <p className='spn_1'>
                                Talent
                            </p>
                        </div>
                    </div>
                    <div className=" circ_2 scale-0 opacity-0 size-[18rem] -translate-y-[14rem] absolute border border-[#191b1d] rounded-full center">
                        <div className=' text-xl font-medium  uppercase block w-fit overflow-hidden'>
                            <p className='spn_1'>
                                Capital
                            </p>
                        </div>
                    </div>
                    <div className="circ_3  scale-0 opacity-0 size-[18rem] translate-x-[14rem] absolute border border-[#191b1d] rounded-full center">
                        <div className=' text-xl font-medium  uppercase block w-fit overflow-hidden'>
                            <p className='spn_1'>
                                Design
                            </p>
                        </div>
                    </div>
                    <div className=" circ_4 scale-0 opacity-0 size-[18rem] translate-y-[14rem] absolute border border-[#191b1d] rounded-full center">
                        <div className=' text-xl font-medium  uppercase block w-fit overflow-hidden'>
                            <p className='spn_1'>
                                Strategy
                            </p>
                        </div>
                    </div>
                    <div className=" circ_5  size-[18rem] absolute border border-[#191b1d] rounded-full center">
                        <div className=' text-xl font-medium  uppercase block w-fit overflow-hidden'>
                            <p className='spn_1'>
                                Distribution
                            </p>
                        </div>
                    </div>
                    <div className=" circ_6 opacity-0 size-[18rem]  absolute border border-[#191b1d] rounded-full center">
                        <div className=' text-xl font-medium  uppercase block w-fit overflow-hidden'>
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