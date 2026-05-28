import Clients from "@/components/home/Clients";
import Hero from "@/components/home/Hero";
import MacroPicture from "@/components/home/MacroPicture";
import OurThesis from "@/components/home/OurThesis";
import Playbook from "@/components/home/Playbook";
import SelectedWork from "@/components/home/SelectedWork";
import VideoSection from "@/components/home/VideoSection";
import WhatWeDo from "@/components/home/WhatWeDo";
import WhoWeAre from "@/components/home/WhoWeAre";
import { createPageMetadata } from "@/lib/seo";

const HomePage = () => {
  return (
    <>
    <Hero />
    <WhoWeAre/>
    <MacroPicture/>
    {/* <OurThesis/> */}
    <WhatWeDo/>
    <Playbook/>
    <SelectedWork/>
    <Clients/>
    </>
  );
};

export default HomePage;

export async function generateMetadata() {
  return createPageMetadata("/");
}
