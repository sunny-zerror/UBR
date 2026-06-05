import React from 'react'
import SectionHeading from '../common/SectionHeading'
import { RiArrowDownLine } from '@remixicon/react'

const audiencesData = [
  {
    id: "01",
    group: "Founders",
    title: "Pre-launch or early traction",
    description:
      "You have a credible plan or a brand finding its first thousand customers. You want capital and operating help in the same conversation.",
    tags: ["Capital", "Operating help", "0 → 1"],
  },
  {
    id: "02",
    group: "Founders",
    title: "Scaling brands",
    description:
      "Already operating, generating revenue, and ready for the next leg. A partner who can sharpen the P&L, fix the leaky parts, and bring talent and capital to compound what is working.",
    tags: ["P&L", "Talent", "Compounding"],
  },
  {
    id: "03",
    group: "Founders",
    title: "Established brands",
    description:
      "You've built a business. Reignite growth, restructure for profitability, or bring in a celebrity co-owner who can change the brand's trajectory.",
    tags: ["Growth", "Restructure", "Celebrity co-owner"],
  },
  {
    id: "04",
    group: "Talent & Creators",
    title: "Equity, not endorsements",
    description:
      "You want a real stake in a brand you help build — not another one-off campaign.",
    tags: ["Equity", "Co-ownership"],
  },
  {
    id: "05",
    group: "Investors",
    title: "Back consumer ventures",
    description:
      "Back the brands we're building, or co-invest into deals already in motion.",
    tags: ["LP", "Co-invest", "Deal flow"],
  },
];

const WhoWePartner = () => {
  return (
    <div className='pt-24'>
      <SectionHeading
        heading={"Five seats. One table."}
        btnText={"Who we partner with"}
        desc={"Whichever seat you're in, the answer starts the same way — with a direct conversation about what you're building, and what it needs next."}
      />
      <div className="container md:pt-16">

        {audiencesData.map((item, index) => (
          <div key={index} className=" group border-b pt-10 last:border-none border-black/30 w-full grid grid-cols-6">
            <div className="col-span-2 space-y-5">
              <h6>{item.id} </h6>
              <h6> {item.group}</h6>
            </div>
            <div className=" max-sm:pb-5 col-span-4 md:col-span-3 capitalize">
              <h4 className=' md:h-20 leading-tight '>{item.title}</h4>
              <div className="md:h-0 group-hover:h-[10rem] transition-all duration-300 overflow-hidden">
                <p className='  w-full max-sm:mt-2 md:w-[80%] leading-tight text-sm  md:text-lg'>{item.description}</p>
                <div className="flex gap-x-2 mt-5 leading-none">
                  {item.tags.map((tag, index) => (
                    <span key={index} className=' px-2 py-1 text-xs leading-none diagramm uppercase border-black border  transition-all duration-300'>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="max-sm:hidden flex justify-end">
              <div className={` size-8 md:size-10 center rounded-full border border-black/10 group-hover:bg-[#FFFFFF] group-hover:text-[#000000] transition-all duration-300`}>
                <RiArrowDownLine size={16} className='-rotate-[135deg] group-hover:-rotate-90 transition-all duration-300' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhoWePartner