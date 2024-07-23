import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import ServiceContent from "../assets/Content.js";

const Service = () => {
  useGSAP(() => {

    const directions = ['top', 'left', 'right', 'bottom'];
    const boxes = document.querySelectorAll('.box');

    gsap.from("#service-header", {
      scrollTrigger: {
        trigger: "#service-header",
        start: "top 80%",
        scrub: true,
        markers: false, // Set to true if you want to see the scroll markers
      },
      x: -1000,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });

    boxes.forEach((box, i) => {
        const direction = directions[i % directions.length];
        
        const config = {
          scrollTrigger: {
            trigger: box,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            markers: false, // Set to true if you want to see the scroll markers
          },
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        };

        switch (direction) {
            case 'top':
              config.y = -200;
              break;
            case 'left':
              config.x = -200;
              break;
            case 'right':
              config.x = 200;
              break;
            case 'bottom':
              config.y = 200;
              break;
            default:
              break;
          }
    
          gsap.from(box, config);
    });
  });
  return (
    <div id="services" className="w-full pb-10">
      <h1
        id="service-header"
        className="text-5xl font-bold font-mono text-center opacity-1 py-5 relative flex items-center justify-center gap-2"
      >
        <span className="w-10 md:w-20 h-1 bg-purple-600"></span>
        Services
        <span className="w-10 md:w-20 h-1 bg-purple-600"></span>
      </h1>

      <div className="flex flex-col flex-wrap gap-5 md:flex-row items-center justify-center">
        {ServiceContent.map((item, index) => (
          <div key={index} className="box w-full md:w-1/4 p-5 flex items-center justify-center flex-wrap shadow-md shadow-gray-700 rounded-lg">
            <img src={item.img} className="w-full rounded-sm hover:scale-105 hover:rotate-6" alt="image" />  
            <h3 className="text-2xl my-2 font-bold font-mono text-left text-purple-600">{item.title}</h3>
            <p className="py-2 text-justify font-serif font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="py-10"></div>
    </div>
  );
};

export default Service;
