"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useRef } from 'react'
import DotButton from '../common/DotButton';
gsap.registerPlugin(ScrollTrigger);

const OurThesis = () => {

    const containerRef = useRef()

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
        tl.to([".circ_1",".circ_3"], {
            transform:"translateX(0)",
            opacity:0
        })
        tl.to([".circ_2",".circ_4"], {
            transform:"translateY(0)",
            opacity:0
        },"<")
        tl.to(".circ_5", {
            opacity:0
        },"<")
        tl.to(".circ_6", {
            opacity:1
        },"<")

    }, { scope: containerRef });
    return (
        <div ref={containerRef} className=' border-b border-black/10 w-full h-[300vh] relative'>
            <div className="container h-screen sticky! top-0 flex ">
                <div className="w-1/2 h-screen flex flex-col gap-y-10 justify-center">
                    <DotButton text="Our thesis" />
                    <h2 className='capitalize'>We replace <br /> paid CAC with <br />  trust CAC.</h2>
                    <p className='text-lg leading-tight w-[80%] '>UBR × DISRPTVE is a venture builder that installs a complete operating system for profitable scaling, whether you are launching a new brand or reigniting an established one.</p>
                </div>
                <div className="w-1/2 h-screen center relative">
                    <div className=" circ_1 scale-0 opacity-0 size-[18rem] -translate-x-[14rem] absolute border rounded-full center">
                        <p className=' text-xl font-medium uppercase'>Talent</p>
                    </div>
                    <div className=" circ_2 scale-0 opacity-0 size-[18rem] -translate-y-[14rem] absolute border rounded-full center">
                        <p className=' text-xl font-medium uppercase'>Capital</p>
                    </div>
                    <div className="circ_3  scale-0 opacity-0 size-[18rem] translate-x-[14rem] absolute border rounded-full center">
                        <p className=' text-xl font-medium uppercase'>Design</p>
                    </div>
                    <div className=" circ_4 scale-0 opacity-0 size-[18rem] translate-y-[14rem] absolute border rounded-full center">
                        <p className=' text-xl font-medium uppercase'>Strategy</p>
                    </div>
                    <div className=" circ_5  size-[18rem] absolute border rounded-full center">
                        <p className=' text-xl font-medium uppercase'>Distribution</p>
                    </div>
                    <div className=" circ_6 opacity-0 size-[18rem]  absolute border rounded-full center">
                        <p className=' text-xl font-medium uppercase'>Sustainable Scale</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurThesis