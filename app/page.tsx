import About from "./components/About";
import FadeInFromBottom from "./components/FadeInFromBottom";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";

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

      <div className="relative h-[150px] overflow-x-hidden bg-black">
        <div className="absolute top-1/2 left-0 z-10 w-full -translate-y-1/2">
          <Marquee
            phrases={techPhrases}
            containerClass="bg-[#00CAFF] h-16 rotate-6 md:rotate-3"
            textClass="text-2xl mx-6 font-semibold font-outfit"
          />
        </div>
        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2">
          <Marquee containerClass="bg-white h-16" />
        </div>
      </div>

      <About />
      <Skills />
      <div className="h-screen w-full bg-black"></div>
    </div>
  );
}
