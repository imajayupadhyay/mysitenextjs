import BackgroundLayer from "./BackgroundLayer";
import ScrollProgress from "./ScrollProgress";
import Hero from "./Hero";
import Marquee from "./Marquee";
import Experience from "./Experience";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Contact from "./Contact";

export default function Portfolio() {
  return (
    <>
      <ScrollProgress />
      <BackgroundLayer />
      <div className="relative z-[1] max-w-[1240px] mx-auto px-7">
        <Hero />
        <Marquee />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </div>
    </>
  );
}
