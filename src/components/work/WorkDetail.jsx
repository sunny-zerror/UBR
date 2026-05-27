"use client"
import React from 'react'
import DotButton from '../common/DotButton'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'
import { useGSAP } from '@gsap/react'
import { RiCloseLine } from '@remixicon/react'
import SectionHeading from '../common/SectionHeading'
import { useParams } from 'next/navigation'
import { WorkData } from '@/store/WorkData'
import { Link } from 'next-view-transitions'
import SectionHero from '../common/SectionHero'
gsap.registerPlugin(ScrollTrigger, SplitText)

const WorkDetail = () => {

  const { slug } = useParams()
  const work = WorkData.find(work => work.slug === slug)

  const remainingWorks = WorkData.filter(work => work.slug !== slug)

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

  return (
    <>
       <SectionHero
        btnText={work.engagement}
        heading={work.title}
        desc={work.description}
      />
  
      <div className={`w-full  center aspect-video ${work.classname}`}>
        <img src={work.image} alt="" />
      </div>
      <div className="container py-24 grid grid-cols-6">
        <div className="col-span-3 grid grid-cols-2 pr-20 ">

          <div className="pr-10">
            <div className=" border-b border-black mb-5">
              <h6 className=''>category</h6>
            </div>
            <p className='text-lg'>{work.category}</p>
          </div>
          <div className="">
            <div className=" border-b border-black mb-5">
              <h6 className=''>Scope</h6>
            </div>
            <p className='text-lg'>{work.scope}</p>
          </div>
          <div className="col-span-2">
            <div className=" border-b border-black mb-5">
              <h6 className=''>Services deployed</h6>
            </div>
            <div className='flex flex-wrap gap-2'>
              {work.services.map((tag, i) => (
                <div key={i} className="rounded-sm font-medium  px-4 py-2 bg-[#0D1738] text-white w-fit]">
                  <p className=" text-xs aeonik uppercase">
                    {tag}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
        <div className="col-span-3 space-y-8">
          <h3 data-para-effect className=' font-semibold leading-13!'>{work.detailHeading}</h3>
          <div className="space-y-4 text-lg leading-tight">
            {work.descArray.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>

      <div className='pt-24 space-y-16  border-t border-black'>
        <SectionHeading
          btnText="More work"
          heading="Other partnerships."
          desc="Capital, advisory and ambassador signings across beauty, fashion and sports." />
        <div className="container grid grid-cols-3 gap-x-3 gap-y-10">
          {remainingWorks.map((item, i) => (
            <Link key={i} href={`/work/${item.slug}`} className=" w-full space-y-4 group cursor-pointer">
              <div className={`w-full center aspect-4/3 overflow-hidden rounded-xs  ${item.classname}`}>
                <div data-img-effect className="w-full h-full center">
                  <img className='group-hover:scale-110 transition-all duration-300' src={item.image} alt="" />
                </div>
              </div>
              <div className="">
                <h6 className=''>{item.engagement}</h6>
                <h5 className='capitalize font-semibold flex items-center gap-x-2 leading-none mt-1'>{item.title}</h5>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default WorkDetail