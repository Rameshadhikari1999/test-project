import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useGSAP(() => {
    gsap.from("#contact-header", {
      scrollTrigger: {
        trigger: "#contact-header",
        start: "top 80%", // Adjusted start position
        end: "bottom 20%",
        scrub: true,
        markers: false, // Set to true if you want to see the scroll markers
      },
      x: -200,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });
  }, []);

  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: 37.7749,
    lng: -122.4194
  };

  return (
    <div id="contact" className="w-full py-5">
      <h1
        id="contact-header"
        className="text-5xl font-bold font-mono text-center opacity-1 py-5 relative flex items-center justify-center gap-2"
      >
        <span className="w-10 md:w-20 h-1 bg-purple-600"></span>
        Contact Us
        <span className="w-10 md:w-20 h-1 bg-purple-600"></span>
      </h1>

      <div className="w-full flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-1/2 p-5">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={10}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
        <div className="w-full md:w-1/2 p-5">
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Name" className="p-2 border rounded" />
            <input type="email" placeholder="Email" className="p-2 border rounded" />
            <textarea placeholder="Message" className="p-2 border rounded h-32"></textarea>
            <button type="submit" className="p-2 bg-purple-600 text-white rounded hover:bg-purple-700">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
