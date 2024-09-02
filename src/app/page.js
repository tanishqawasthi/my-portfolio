import Navbar from "@/components/elements/Navbar";
import ExpTimeline from "@/components/elements/ExpTimeline";
import Socials from "@/components/elements/Socials";
import TechStack from "@/components/elements/TechStack";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <TechStack />
      <ExpTimeline />
      <Socials/>
    </div>
  );
}
