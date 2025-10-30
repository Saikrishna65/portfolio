"use client";

import React, { useEffect, useState } from "react";
import SectionFollower from "./SectionFollower";
import FadeInFromBottom from "./FadeInFromBottom";

interface Skill {
  key: string;
  label: string;
  image: string;
}

const skills: Skill[] = [
  { key: "javascript", label: "JavaScript", image: "/images/javaScript.webp" },
  { key: "html", label: "HTML", image: "/images/HTML.webp" },
  { key: "css", label: "CSS", image: "/images/css.webp" },
  { key: "tailwind", label: "Tailwind CSS", image: "/images/tailwind.webp" },
  { key: "react", label: "React.js", image: "/images/react.webp" },
  { key: "next", label: "Next.js", image: "/images/next.svg" },
  {
    key: "responsive",
    label: "Responsive",
    image: "/images/responsive.webp",
  },
  { key: "gsap", label: "GSAP", image: "/images/gsap.webp" },
  { key: "typescript", label: "TypeScript", image: "/images/typeScript.webp" },
  { key: "node", label: "Node.js", image: "/images/node.webp" },
  { key: "express", label: "Express.js", image: "/images/express.webp" },
  { key: "mongodb", label: "MongoDB", image: "/images/mongoDB.webp" },
  { key: "rest", label: "REST API", image: "/images/restAPI.webp" },
  { key: "socketio", label: "Socket.io", image: "/images/socket.webp" },
  { key: "git", label: "GitHub", image: "/images/github.webp" },
  { key: "postman", label: "Postman", image: "/images/postman.webp" },
];

const Skills: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cols = isMobile ? 2 : 4;

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white flex flex-col"
    >
      {/* Title */}
      <FadeInFromBottom>
        <h2 className="text-4xl md:text-6xl lg:text-8xl pl-5 md:pl-20 pt-10 font-spacegrotesk">
          WHAT I WORK WITH
        </h2>
      </FadeInFromBottom>

      {/* Skills Grid */}
      <div className="flex-1 w-full px-5 md:px-20 pt-10 md:pt-20 grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-10">
        {skills.map((skill, index) => {
          const isFirstRow = index < cols;
          return (
            <FadeInFromBottom delay={0.2} key={index}>
              <SectionFollower key={skill.key} imageUrl={skill.image}>
                <div
                  className={`h-20 md:h-24 w-full flex flex-col justify-center items-center text-center cursor-pointer 
                border-b border-white/70 ${isFirstRow ? "border-t" : ""}`}
                >
                  <div className="text-base md:text-xl font-medium tracking-wide">
                    {skill.label}
                  </div>
                </div>
              </SectionFollower>
            </FadeInFromBottom>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
