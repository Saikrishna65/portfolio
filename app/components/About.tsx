// import React from "react";
// import ScrollAnimatedText from "./ScrollAnimatedText";
// import FadeInFromBottom from "./FadeInFromBottom";

// const About = () => {
//   return (
//     <section id="about" className="text-white px-5 md:px-20 pb-20 md:pb-30">
//       <div className="font-bold font-[space] text-[clamp(1.5rem,4vw,6rem)]">
//         <ScrollAnimatedText
//           text="ABOUT ME"
//           triggerStart="top 50%"
//           triggerEnd="top 20%"
//         />
//       </div>

//       <div
//         className="
//           mx-auto
//           mt-5
//           text-[clamp(1rem,2.5vw,4rem)]
//           leading-[1.7]
//           font-[space]
//           text-center
//         "
//       >
//         <FadeInFromBottom delay={0.3}>
//           Hi, I'm Sai Krishna — a passionate full-stack developer driven by
//           curiosity and creativity. I enjoy crafting clean, efficient, and
//           user-focused web experiences.{" "}
//           <span className="font-semibold text-[#00CAFF] italic">
//             I specialize in the front end, ensuring every solution I create is a
//             perfect mix of elegant design and real-world usability.
//           </span>{" "}
//           I love turning ideas into impactful digital products.
//         </FadeInFromBottom>
//       </div>
//     </section>
//   );
// };

// export default About;

"use client";

import React from "react";
import ScrollAnimatedText from "./ScrollAnimatedText";
import FadeInFromBottom from "./FadeInFromBottom";

const About = () => {
  return (
    <div className="w-full mt-16 bg-gren-300 flex flex-col gap-3 md:gap-10 items-center justify-center bg-gren-300">
      <div className="font-bold text-white text-center font-[space] text-[clamp(1.8rem,4vw,6rem)]">
        <ScrollAnimatedText
          text="ABOUT ME"
          triggerStart="top 60%"
          triggerEnd="top 20%"
        />
      </div>
      <FadeInFromBottom delay={0.3}>
        <div className="w-full text-white italic text-[clamp(1rem,2.5vw,5rem)] text-center px-3 md:px-30 font-[space] leading-[1.3]">
          <h2>
            I’m a full-stack developer who likes building things that feel
            smooth, look simple, and work properly{" "}
            <span className="text-gray-400 opacity-60">
              (after multiple tries)
            </span>
            .
          </h2>
          <h2>
            Currently obsessed with animations, performance, and making the web
            less boring.
          </h2>
        </div>
      </FadeInFromBottom>
    </div>
  );
};

export default About;
