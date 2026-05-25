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
            <video loop autoPlay muted playsInline className=' img_cv opacity-0 cover' src="https://www.disrptve.com/video/show_reel.mp4" alt="" />
        </div>
    )
}

export default VideoSection