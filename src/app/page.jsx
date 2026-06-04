import Clients from "@/components/home/Clients";
import Hero from "@/components/home/Hero";
import MacroPicture from "@/components/home/MacroPicture";
import OurThesis from "@/components/home/OurThesis";
import SelectedWork from "@/components/home/SelectedWork";
import WhatWeDo from "@/components/home/WhatWeDo";
import { createPageMetadata } from "@/lib/seo";

const HomePage = () => {
  return (
    <>
    <Hero />
    <MacroPicture/>
    <div className="night_bg">
    <OurThesis/>
    <WhatWeDo/>
    </div>
    <SelectedWork/>
    <Clients/>
    </>
  );
};

export default HomePage;

export async function generateMetadata() {
  return createPageMetadata("/");
}
