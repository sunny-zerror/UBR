import Clients from "@/components/home/Clients";
import Hero from "@/components/home/Hero";
import MacroPicture from "@/components/home/MacroPicture";
import OurThesis from "@/components/home/OurThesis";
import Playbook from "@/components/home/Playbook";
import SelectedWork from "@/components/home/SelectedWork";
import Team from "@/components/home/Team";
import VideoSection from "@/components/home/VideoSection";
import WhoWeAre from "@/components/home/WhoWeAre";
import { createPageMetadata } from "@/lib/seo";

const HomePage = () => {
  return (
    <>
    <Hero />
    <VideoSection/>
    <MacroPicture/>
    <OurThesis/>
    <WhoWeAre/>
    <Playbook/>
    <SelectedWork/>
    <Clients/>
    <Team/>
    </>
  );
};

export default HomePage;

export async function generateMetadata() {
  return createPageMetadata("/");
}
