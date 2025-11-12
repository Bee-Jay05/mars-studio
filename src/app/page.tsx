import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import MissionData from "@/components/MissionData";
import Projects from "@/components/Projects";
import Quote from "@/components/Quote";
import Services from "@/components/Services";
import Crew from "@/components/Crew";

export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      <MissionData />
      <Projects />
      <Quote />
      <Services />
      <Crew />
    </main>
  );
}
