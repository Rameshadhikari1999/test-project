import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Heading = ({title}) => {
    useGSAP(() => {
        gsap.from("#about-header", {
            scrollTrigger: {
              trigger: "#about-header",
              start: "top 80%",
              scrub: true,
              markers: false, // Set to true if you want to see the scroll markers
            },
            x: 1000,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          });
    })
  return (
      <h1
        id="about-header"
        className="text-5xl font-bold font-mono text-center opacity-1 py-5 relative flex items-center justify-center gap-2"
      >
        <span className="w-10 md:w-20 h-1 bg-purple-600"></span>
        {title}
        <span className="w-10 md:w-20 h-1 bg-purple-600"></span>
      </h1>
  )
}

export default Heading
