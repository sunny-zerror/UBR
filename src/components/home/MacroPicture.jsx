"use client";
import React, { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SectionHeading from '../common/SectionHeading';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const statsData = [
    {
        value: "$4.3",
        suffix: "T",
        title: "Consumer market by 2030",
        img: "/images/home/scroll_img/img1.webp",
        description:
            "India's spending becomes the world's second largest, expanding 46% from 2024.",
    },
    {
        value: "$600",
        suffix: "B",
        title: "Brand unlock",
        img: "/images/home/scroll_img/img2.webp",
        description:
            "Structural shift from unbranded retail creates white space for new players.",
    },
    {
        value: "28",
        suffix: "",
        title: "Median age",
        img: "/images/home/scroll_img/img3.webp",
        description:
            "Versus 39 in China. A young, aspirational population drives global consumption.",
    },
    {
        value: "3",
        suffix: "X",
        title: "E-commerce users by 2030",
        img: "/images/home/scroll_img/img4.webp",
        description:
            "Online shoppers more than triple, building a vast accessible marketplace.",
    },
    {
        value: "$350",
        suffix: "B",
        title: "Digital GMV by 2030",
        img: "/images/home/scroll_img/img5.webp",
        description:
            "Reaches the same scale as Brazil's full retail sector today.",
    },
];

const MacroPicture = () => {

    const cardRef = useRef();
    const imageRefs = useRef([]);
    const containerRef = useRef();

    useGSAP(() => {
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
                            duration: 0.5,
                            overwrite: true,
                        });
                    });
                },
            },
        });
    }, { scope: containerRef });

    return (
        <>
            <div className=" pt-12 md:pt-24 border-t border-black/50">
                <SectionHeading
                    btnText={"The context"}
                    heading={
                        <>India's consumer market <br/> is about to double.</>
                    }
                    desc={"The doubling market will not save the current playbook. CAC is broken, margins are leaking, 90% of new D2C brands fail in year one. The winners will be the brands that find a different model before the wave breaks."}
                />
            </div>
            <div ref={containerRef} className=' container w-full  relative h-[250vh]! '>
                <div className=" sticky top-0 w-full h-screen  center ">

                    <div className=" absolute left-1/2 top-1/2 text-center -translate-x-1/2">
                        <div className="anim_y">

                            {statsData.map((row, rowIndex) => (
                                <div key={rowIndex} className="">
                                    <p className=' text-9xl h-56'>{row.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-12 ">
                        <div className="col-span-4 relative center ">
                            <div className="w-full h-28 text-center overflow-hidden">
                                <div className="anim_y">
                                    {statsData.map((row, rowIndex) => (
                                        <div key={rowIndex} className=" h-28 center">
                                            <h3 className=' leading-none capitalize font-semibold'>{row.title}</h3>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className=" col-span-4 relative  ">
                            <div className="perspective-[40rem] transform-3d">
                                <div
                                    ref={cardRef}
                                    className="w-full aspect-4/3 transform-3d rounded-xl overflow-hidden relative"
                                    style={{
                                        transform:
                                            "rotateX(15deg) rotateY(-6deg)",
                                    }}
                                >
                                    {statsData.map((item, i) => (
                                        <img
                                            key={i}
                                            ref={(el) => (imageRefs.current[i] = el)}
                                            src={item.img}
                                            alt=""
                                            className="absolute inset-0 w-full h-full object-cover will-change-transform"
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className=" absolute w-full aspect-4/3 inset-0 z-[99] text-white center text-center">
                                <div className="w-full h-56 text-center overflow-hidden">
                                    <div className="anim_y">
                                        {statsData.map((row, rowIndex) => (
                                            <div key={rowIndex} className=" h-56 center">
                                                <p className=' text-9xl leading-none'>{row.value}</p>
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
                                            <p className=' text-lg leading-none opacity-80'>{row.description}</p>
                                        </div>
                                    ))}
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