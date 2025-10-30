import React from "react";
import FadeInFromBottom from "./FadeInFromBottom";

const About = () => {
  return (
    <div className="relative w-full h-[70vh] md:h-screen bg-black flex flex-col items-center justify-center px-3 md:px-25">
      <div className="absolute left-10 top-10 md:left-30 md:top-10 text-white text-3xl md:text-5xl font-[space] font-semibold">
        <FadeInFromBottom>About</FadeInFromBottom>
      </div>
      <FadeInFromBottom delay={0.3}>
        <div className="text-white text-lg md:text-4xl font-[space] md:leading-13 text-center">
          Hi, I'm Sai Krishna Mangina — a passionate full-stack developer driven
          by curiosity and creativity. I enjoy crafting clean, efficient, and
          user-focused web experiences.{" "}
          <span className="font-semibold text-[#00CAFF] italic">
            I specialize in the front end, ensuring every solution I create is a
            perfect mix of elegant design and real-world usability.
          </span>{" "}
          I love turning ideas into impactful digital products.
        </div>
      </FadeInFromBottom>
    </div>
  );
};

export default About;
