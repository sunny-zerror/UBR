"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useRef } from 'react'
gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {

    const containerRef = useRef()
    useGSAP(() => {

        gsap.to(".img_cv", {
            opacity:1,
            delay:1
        })

        gsap.fromTo(".img_cv", {
            y: -200,
        }, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
            y: 200,
            ease:"none"
        });
    }, { scope: containerRef })
    return (
        <div ref={containerRef} className='w-full bg-black! aspect-video overflow-hidden'>
            <img className=' img_cv opacity-0 cover' src="https://plus.unsplash.com/premium_photo-1673326630848-fecf43ae8db1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
    )
}

export default VideoSection