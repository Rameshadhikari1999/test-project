import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import AboutImg from "../assets/image/about.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
    gsap.from("#about-img", {
      scrollTrigger: {
        trigger: "#about-img",
        start: "top 80%",
        scrub: true,
        markers: false, // Set to true if you want to see the scroll markers
      },
      x: -2500,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });
    gsap.from("#about-content", {
      scrollTrigger: {
        trigger: "#about-content",
        start: "top 60%",
        scrub: true,
        markers: false, // Set to true if you want to see the scroll markers
      },
      y: -200,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      stagger: 0.3
    });
  });
  return (
    <div id="about" className="w-full h-fit mt-10">

      {/* heading  */}
      <h1
        id="about-header"
        className="text-5xl font-bold font-mono text-center opacity-1 py-5 relative flex items-center justify-center gap-2"
      >
        <span className="w-10 md:w-20 h-1 bg-purple-600"></span>
        About Me
        <span className="w-10 md:w-20 h-1 bg-purple-600"></span>
      </h1>

      {/* content */}
      <div className=" px-10 w-full flex flex-col md:flex-row items-center justify-between">
        <div className="p-5 ml-10">
          <img
            id="about-img"
            src={AboutImg}
            className="max-h-[400px] md:max-h-[900px] mr-20 rounded-xl "
            alt="about"
          />
        </div>
        <div id="about-content" className="flex flex-col justify-center items-center">
          <h2 className="ml-10 text-4xl font-bold font-mono text-left text-purple-600">
            I'M RAMESH ADHIKARI
          </h2>
          <p className="py-5 ml-12 md:w-1/2 text-justify font-serif font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            libero quo tempore neque ratione reiciendis. Voluptatibus fugit
            expedita consectetur quo dolore voluptas ipsa. Quisquam a eius ea
            facere mollitia, similique tenetur fuga cupiditate in aliquid,
            accusamus nobis eveniet distinctio atque?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
