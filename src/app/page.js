// import Navbar from "@/components/elements/Navbar";
import ExpTimeline from "@/components/elements/ExpTimeline";
import Socials from "@/components/elements/Socials";
import TechStack from "@/components/elements/TechStack";
import About from "@/components/elements/About";
import Hero from "@/components/elements/Hero";
import ContactMe from "@/components/elements/ContactMe";
import Projects from "@/components/elements/Projects";


export default function Home() {
  return (
    <div className="">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <TechStack />
      <ExpTimeline id="experience" />
      <Projects id="projects" />
      <ContactMe id="contact" />
      <Socials/>
    </div>
  );
}
