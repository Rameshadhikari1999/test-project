import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  let MenuList = ["Home", "About", "Services", "Contact"];

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  useGSAP(() => {
    gsap.from("#nav", {
      y: -40,
      opacity: 0,
      duration: 3,
      ease: "elastic",
      stagger: 0.2,
    });
  });


  return (
    <nav className="bg-black bg-fixed fixed flex-shrink-1 overflow-x-hiddens w-[100vw] h-fit z-20 border-b-2 border-gray-700">
      <div className="max-w-screen-xl flex-shrink-1 mx-auto px-4 py-4 md:px-8 md:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              className="font-bold text-purple-600 text-xl md:text-2xl cursor-pointer"
              to="home"
              smooth={true}
              duration={1000}
            >
              Logo
            </Link>
          </div>
          <ul
            className="hidden md:flex items-center gap-6"
            id="nav"
          >
            {/* Navigation Items */}
            {MenuList.map((item, index) => (
              <NavItem key={index} to={item.toLowerCase()}>
                {item}
              </NavItem>
            ))}
          </ul>
          {/* Mobile Menu Button */}
          <div
            onClick={handleMenuClick}
            className="md:hidden text-white cursor-pointer text-4xl"
          >
            <IoMenu />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul
            id="nav"
            className=" w-full h-full flex flex-col gap-4 items-center justify-center pb-5"
            style={{
              transform: isOpen ? "translateY(0)" : "translateY(-100%)",
            }}
          >
             {MenuList.map((item, index) => (
              <NavItem onClick={handleMenuClick} key={index} to={item.toLowerCase()}>
                {item}
              </NavItem>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

// Navigation item component for the main menu
const NavItem = ({ to, children, onClick }) => {
  return (
    <li>
      <Link
        className="font-serif text-red-100 text-lg cursor-pointer hover:text-red-400 focus:text-gray-500 active:text-red-400"
        to={to}
        smooth={true}
        duration={1000}
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );
};

export default Navbar;
