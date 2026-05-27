"use client"
import React from 'react'
import DotButton from '../common/DotButton'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'
import { useGSAP } from '@gsap/react'
import ColorBends from '../animation/ColorBends'
gsap.registerPlugin(ScrollTrigger, SplitText)

const SectionHero = ({ btnText, heading, desc }) => {
    useGSAP(() => {
        const heading_split = SplitText.create(".heading_split", {
            type: "lines",
            linesClass: "split-line"
        });
        const paragraph_split = SplitText.create(".paragraph_split", {
            type: "lines",
            linesClass: "split-line"
        });

        [...heading_split.lines, ...paragraph_split.lines].forEach((line) => {
            const wrapper = document.createElement("div");

            wrapper.classList.add("line-wrapper");

            line.parentNode.insertBefore(wrapper, line);
            wrapper.appendChild(line);
        });

        gsap.set([heading_split.lines, paragraph_split.lines], { yPercent: 100 });

        const tl = gsap.timeline({
            delay: .5
        })
        tl.to(".content_box", {
            opacity: 1,
            duration: 0.01
        })
        tl.to(".border_bar", {
            height: "100%",
            stagger: 0.2
        });
        tl.to(heading_split.lines, {
            yPercent: 0,
            duration: 0.8,
            ease: "expo.out",
            stagger: 0.05,
        }, "<");
        tl.to(paragraph_split.lines, {
            yPercent: 0,
            duration: 0.8,
            ease: "expo.out",
            stagger: 0.05,
        }, "<+0.2");
        tl.to([".blink_btn",], {
            opacity: 1,
            stagger: 0.15
        }, "<");

    });

    useGSAP(() => {

        gsap.to(".hero_bg", {
            opacity: 1,
            delay: 1.5
        })

        gsap.to(".hero_bg", {
            scrollTrigger: {
                trigger: ".content_box",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
            y: 200,
            ease: "none"
        });
    })
    return (
        <div className=" content_box w-full ">
            <div className='container h-[60vh]! overflow-hidden items-end flex pb-16'>
                <div className="gradient h-full w-full absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent from-[80%] to-white to-[100%]"></div>
                <div className="w-full h-full hero_bg opacity-0 absolute inset-0 z-[-1] ">
                    <ColorBends
                        colors={["#111184", "#111184", "#111184", "#111184"]}
                        rotation={100}
                        speed={0.2}
                        scale={1}
                        frequency={1.5}
                        warpStrength={1}
                        mouseInfluence={1}
                        noise={0}
                        parallax={0.5}
                        iterations={1}
                        intensity={1.5}
                        bandWidth={6}
                        transparent
                        autoRotate={0}
                    />
                </div>
                <div className="space-y-5 w-full  relative z-10 ">
                    <h1 className=' heading_split w-[80%] leading-none capitalize'>{heading}</h1>
                    <p className=' paragraph_split w-[45%] leading-tight'>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default SectionHero