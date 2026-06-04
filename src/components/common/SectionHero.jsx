"use client"
import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'
import { useGSAP } from '@gsap/react'
import ColorBends from '../animation/ColorBends'
import GradientBlinds from '../animation/GradientBlinds';

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
            delay: 1
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
            delay: 0.5
        })
    })
    return (
        <div className=" content_box w-full relative overflow-hidden text-white ">
              <div className="absolute inset-0 z-[-1] hero_bg night_bg_vc  opacity-0">
        <GradientBlinds
          gradientColors={['#FD0816', '#5227FF']}
          angle={0}
          noise={0.1}
          blindCount={25}
          blindMinWidth={60}
          spotlightRadius={0.8}
          spotlightSoftness={1}
          spotlightOpacity={0.5}
          mouseDampening={0.5}
          distortAmount={0}
          shineDirection="right"
          // mixBlendMode="darken"
          color1="#FD0816"
          color2="#5227FF"
        />
      </div>
            <div className='container h-[60vh]! overflow-hidden items-end flex pb-16'>
                <div className="space-y-5 w-full  relative z-10 ">
                    <h1 className=' heading_split md:w-[80%] leading-none capitalize'>{heading}</h1>
                    <p className=' paragraph_split md:w-[45%] leading-tight'>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default SectionHero