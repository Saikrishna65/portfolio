import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";

const techPhrases = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "HTML",
  "Node.js",
  "Express",
  "MongoDB",
  "Socket.io",
];

export default async function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div>
      <Sidebar />
      <Hero />

      <div className="relative h-32 overflow-x-hidden md:h-40">
        <div className="absolute top-1/2 left-0 z-10 w-full -translate-y-1/2">
          <Marquee
            phrases={techPhrases}
            containerClass="bg-[#00CAFF] h-14 lg:h-16 rotate-6 md:rotate-3 2xl:rotate-3"
            textClass="text-[clamp(1rem,3vw,1.5rem)] mx-6 2xl:mx-10 font-semibold font-outfit"
          />
        </div>
        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2">
          <Marquee containerClass="bg-white h-14 lg:h-16" />
        </div>
      </div>

      <About />
      <Projects />
      <Contact />
    </div>
  );
}
