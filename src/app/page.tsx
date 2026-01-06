import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import MissionData from "@/components/MissionData";
import Projects from "@/components/Projects";
import Quote from "@/components/Quote";
import Services from "@/components/Services";
import Crew from "@/components/Crew";
import Capabilities from "@/components/Capabilities";
import Commlink from "@/components/Commlink";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Commlink />
      <Hero />
      <Mission />
      <MissionData />
      <Projects />
      <Quote />
      <Services />
      <Crew />
      <Capabilities />
      <Footer />
    </main>
  );
}
