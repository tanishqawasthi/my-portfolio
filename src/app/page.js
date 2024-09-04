import Navbar from "@/components/elements/Navbar";
import ExpTimeline from "@/components/elements/ExpTimeline";
import Socials from "@/components/elements/Socials";
import TechStack from "@/components/elements/TechStack";
import About from "@/components/elements/About";
import Hero from "@/components/elements/Hero";
import ContactMe from "@/components/elements/ContactMe";



export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Navbar />
      <TechStack />
      <ExpTimeline />
      <ContactMe />
      <Socials/>
    </div>
  );
}
