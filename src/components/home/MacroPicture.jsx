"use client";
import React, { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SectionHeading from '../common/SectionHeading';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);

const statsData = [
    {
        value: "$4.3T",
        suffix: "T",
        title: "Consumer market by 2030",
        img: "/images/home/scroll_img/img1.avif",
        description:
            "India's spending becomes the world's second largest, expanding 46% from 2024.",
    },
    {
        value: "$600B",
        suffix: "B",
        title: "Brand unlock",
        img: "/images/home/scroll_img/img2.avif",
        description:
            "Structural shift from unbranded retail creates white space for new players.",
    },
    {
        value: "28",
        suffix: "",
        title: "Median age",
        img: "/images/home/scroll_img/img3.avif",
        description:
            "Versus 39 in China. A young, aspirational population drives global consumption.",
    },
    {
        value: "3x",
        suffix: "X",
        title: "E-commerce users by 2030",
        img: "/images/home/scroll_img/img4.avif",
        description:
            "Online shoppers more than triple, building a vast accessible marketplace.",
    },
    {
        value: "$350B",
        suffix: "B",
        title: "Digital GMV by 2030",
        img: "/images/home/scroll_img/img5.avif",
        description:
            "Reaches the same scale as Brazil's full retail sector today.",
    },
];

const MacroPicture = () => {

    const cardRef = useRef();
    const imageRefs = useRef([]);
    const containerRef = useRef();
    const containerRef2 = useRef();

    useGSAP(() => {

        if (window.innerWidth < 750) return

        const card = cardRef.current;

        const maxRotate = 8;

        const handleMove = (e) => {
            const rect = card.getBoundingClientRect();

            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;

            const rotateY = -6 + (x - 0.5) * maxRotate;
            const rotateX = 15 - (y - 0.5) * maxRotate;

            gsap.to(card, {
                rotateX,
                rotateY,
                duration: 0.6,
                ease: "power3.out",
            });

            gsap.to(imageRefs.current, {
                x: (x - 0.5),
                y: (y - 0.5),
                duration: 0.8,
                ease: "power3.out",
            });
        };

        const handleLeave = () => {
            gsap.to(card, {
                rotateX: 15,
                rotateY: -6,
                duration: 1,
                ease: "elastic.out(1,0.4)",
            });

            gsap.to(imageRefs.current, {
                x: 0,
                y: 0,
                duration: 1,
                ease: "power3.out",
            });
        };

        containerRef.current.addEventListener("mousemove", handleMove);
        containerRef.current.addEventListener("mouseleave", handleLeave);

        return () => {
            containerRef.current.removeEventListener("mousemove", handleMove);
            containerRef.current.removeEventListener("mouseleave", handleLeave);
        };
    }, { scope: containerRef });

    useGSAP(() => {
        const total = statsData.length - 1;

        gsap.set(imageRefs.current, {
            opacity: 0,
        });

        gsap.set(imageRefs.current[0], {
            opacity: 1,
        });

        gsap.to(".anim_y", {
            yPercent: -80,
            ease: "none",

            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: `bottom bottom`,
                scrub: true,
                // markers:true,

                snap: {
                    snapTo: 1 / total,
                    duration: 0.4,
                    ease: "power2.inOut",
                },

                onUpdate: (self) => {
                    const index = Math.round(
                        self.progress * total
                    );

                    imageRefs.current.forEach((img, i) => {
                        gsap.to(img, {
                            opacity: i === index ? 1 : 0,
                            duration: 0.2,
                            overwrite: true,
                        });
                    });
                },
            },
        });
    }, { scope: containerRef });

    useGSAP(() => {
        const total = statsData.length - 1;

        gsap.set(imageRefs.current, {
            opacity: 0,
        });

        gsap.set(imageRefs.current[0], {
            opacity: 1,
        });

        gsap.to(".anim_y", {
            yPercent: -80,
            ease: "none",

            scrollTrigger: {
                trigger: containerRef2.current,
                start: "top top",
                end: `bottom bottom`,
                scrub: true,
                // markers:true,

                snap: {
                    snapTo: 1 / total,
                    duration: 0.4,
                    ease: "power2.inOut",
                },

                onUpdate: (self) => {
                    const index = Math.round(
                        self.progress * total
                    );

                    imageRefs.current.forEach((img, i) => {
                        gsap.to(img, {
                            opacity: i === index ? 1 : 0,
                            duration: 0.2,
                            overwrite: true,
                        });
                    });
                },
            },
        });
    }, { scope: containerRef2 });

    return (
        <>
            <div className=' hidden md:block'>
                <div className=" pt-12 md:pt-24 border-t border-black/50">
                    <SectionHeading
                        btnText={"The context"}
                        heading={
                            <>India's consumer market <br /> is about to double.</>
                        }
                        desc={<>
                            <div className="space-y-2">
                                <p>
                                    The doubling market will not save the current playbook.
                                </p>
                                <p>
                                    CAC is broken, margins are leaking, 90% of new D2C brands fail in year one.
                                </p>
                                <p className='highlight'>
                                    The winners will be the brands that find a different model before the wave breaks.
                                </p>
                            </div>
                        </>}
                    />
                </div>
                <div ref={containerRef} className=' cont_deskt_mov container w-full  relative h-[250vh]! '>
                    <div className=" sticky top-0 w-full h-screen  center ">

                        <div className=" max-sm:hidden absolute left-1/2 top-1/2 -translate-y-30 text-center -translate-x-1/2">
                            <div className="anim_y">
                                {statsData.map((row, rowIndex) => (
                                    <div key={rowIndex} className=" h-44 lg:h-60 center">
                                        <p className=' text-5xl lg:text-9xl leading-none font-bold'>{row.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 max-sm:gap-y-8 md:grid-cols-12 ">
                            <div className="col-span-4 relative center ">
                                <div className="w-full h-28 text-center overflow-hidden">
                                    <div className="anim_y">
                                        {statsData.map((row, rowIndex) => (
                                            <div key={rowIndex} className=" h-28 center">
                                                <h3 className=' leading-none   font-semibold'>{row.title}</h3>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className=" col-span-4 relative  ">
                                <div className="lg:perspective-[40rem]  lg:transform-3d">
                                    <div
                                        ref={cardRef}
                                        className="w-full aspect-4/3 lg:rotate-x-15 lg:-rotate-y-6 transform-3d rounded-xl overflow-hidden relative bg-[#4688F0]"
                                    >
                                        {statsData.map((item, i) => (
                                            <Image
                                                fill
                                                key={i}
                                                ref={(el) => (imageRefs.current[i] = el)}
                                                src={item.img}
                                                alt={item.title}
                                                className="absolute inset-0 w-full h-full object-cover will-change-transform"
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className=" absolute w-full aspect-4/3 inset-0 z-[99] text-white center text-center">
                                    <div className="w-full h-44 lg:h-60 text-center overflow-hidden">
                                        <div className="anim_y">
                                            {statsData.map((row, rowIndex) => (
                                                <div key={rowIndex} className=" h-44 lg:h-60 center">
                                                    <p className=' text-5xl lg:text-9xl leading-none font-bold'>{row.value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 relative center">
                                <div className="w-full h-16 text-center overflow-hidden">
                                    <div className="anim_y">
                                        {statsData.map((row, rowIndex) => (
                                            <div key={rowIndex} className=" h-16 center w-[80%] mx-auto">
                                                <p className=' lg:text-xl leading-none '>{row.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className=' md:hidden'>
                <div ref={containerRef2} className='  w-full  relative h-[250vh]! '>
                    <div className=" sticky top-0 w-full h-screen flex flex-col justify-center gap-y-10 ">

                        <div className="">
                            <SectionHeading
                                btnText={"The context"}
                                heading={
                                    <>India's consumer market  is about to double.</>
                                }
                                desc={<>
                                    <div className="space-y-2">
                                        <p>
                                            The doubling market will not save the current playbook.
                                        </p>
                                        <p>
                                            CAC is broken, margins are leaking, 90% of new D2C brands fail in year one.
                                        </p>
                                        <p className='highlight'>
                                            The winners will be the brands that find a different model before the wave breaks.
                                        </p>
                                    </div>
                                </>}
                            />
                        </div>

                        <div className="padding grid grid-cols-1 max-sm:gap-y-2 md:grid-cols-12 ">
                            <div className="col-span-4 relative center ">
                                <div className="w-full h-16 text-center overflow-hidden">
                                    <div className="anim_y">
                                        {statsData.map((row, rowIndex) => (
                                            <div key={rowIndex} className=" h-16 center">
                                                <h3 className=' leading-none   font-semibold'>{row.title}</h3>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className=" col-span-4 relative  ">
                                <div className="md:perspective-[40rem]  md:transform-3d">
                                    <div
                                        className="w-full aspect-video md:rotate-x-15 md:-rotate-y-6 transform-3d rounded-xl overflow-hidden relative bg-[#4688F0]"
                                    >
                                        {statsData.map((item, i) => (
                                            <Image
                                                fill
                                                key={i}
                                                ref={(el) => (imageRefs.current[i] = el)}
                                                src={item.img}
                                                alt={item.title}
                                                className="absolute inset-0 w-full h-full object-cover will-change-transform"
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className=" absolute w-full aspect-video inset-0 z-[99] text-white center text-center">
                                    <div className="w-full h-44 text-center overflow-hidden">
                                        <div className="anim_y">
                                            {statsData.map((row, rowIndex) => (
                                                <div key={rowIndex} className=" h-44 center">
                                                    <p className=' text-7xl leading-none font-bold'>{row.value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 relative center">
                                <div className="w-full h-16 text-center overflow-hidden">
                                    <div className="anim_y">
                                        {statsData.map((row, rowIndex) => (
                                            <div key={rowIndex} className=" h-16 center w-full mx-auto">
                                                <p className=' text-xl leading-none '>{row.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default MacroPicture