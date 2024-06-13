"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

import { FiPlusSquare } from "react-icons/fi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { CgGym } from "react-icons/cg";

export default function Navbar() {
  const currentRoute = usePathname();

  const current = "text-red-500 font-bold"

  const [open, setopen] = useState(false);

  const hamburgerClick = () => {
    setopen(!open);
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`z-50  text-xl h-24 fixed top-0 flex transition-all duration-500 justify-between items-center px-5 py-4 w-full  text-optional-0 ${scrolled && "bg-secondary-0  text-optional-0"}`}>
      <div>
        <h3 className="flex gap-2 font-bold lg:text-[2.5vw] md:text-[3.5vw] text-[6vw] text-red-500 items-center justify-center">
          DailyFit <CgGym />
        </h3>
      </div>
      <div>
        <ul className=" flex  items-center space-x-7 navlink ">
          <Link className={currentRoute === "/" ? (current) : ("hover:font-semibold  transition-all duration-500  hover:text-red-500 ")} href={"/"}>
            Home
          </Link>
          <Link className={currentRoute === "/about" ? (current) : ("hover:font-semibold  transition-all duration-500 hover:text-red-500 ")} href={"/about"}>
            About
          </Link>
          <Link
            className={currentRoute === "/pricing" ? (current) : ("hover:font-semibold  transition-all duration-500 hover:text-red-500 ")}
            href={"/pricing"}
          >
            Pricing
          </Link>
          <Link
            className={currentRoute === "/schedule" ? (current) : ("hover:font-semibold  transition-all duration-500 hover:text-red-500 ")}
            href={"/schedule"}
          >
            Schedule
          </Link>
          <Link
            className={currentRoute === "/contact" ? (current) : ("hover:font-semibold  transition-all duration-500 hover:text-red-500 ")}
            href={"/contact"}
          >
            Contact
          </Link>
        </ul>
      </div>

      <div className="join-btn">
        <Link
          href={"/contact"}
          className=" p-2 border-2  hover:bg-red-500 hover:text-white flex gap-3 items-center justify-center"
        >
          <FiPlusSquare className="text-3xl hover:text-red-500 hover:bg-white" />
          Join Class Now
        </Link>
      </div>
      <HiOutlineMenuAlt1
        className="hamburger text-3xl"
        onClick={hamburgerClick}
      />



      <div className={`fixed transition-all duration-700  bg-primary-0  right-0 left-0 ${open ? "top-0 z-[99]" : "-top-[120%]"}`} >
        <span
          className=" text-2xl absolute right-3 top-3 cursor-pointer"
          onClick={() => setopen(false)}
        >
          X
        </span>
        <ul className=" flex flex-col items-center justify-center gap-5  h-[100vh]">
          <Link
            className=" font-semibold hover:text-red-500"
            href={"/"}
            onClick={() => setopen(false)}
          >
            Home
          </Link>
          <Link
            className=" font-semibold hover:text-red-500"
            href={"/about"}
            onClick={() => setopen(false)}
          >
            About
          </Link>
          <Link
            className=" font-semibold hover:text-red-500"
            href={"/pricing"}
            onClick={() => setopen(false)}
          >
            Pricing
          </Link>
          <Link
            className=" font-semibold hover:text-red-500"
            href={"/schedule"}
            onClick={() => setopen(false)}
          >
            Schedule
          </Link>
          <Link
            className=" font-semibold hover:text-red-500"
            href={"/contact"}
            onClick={() => setopen(false)}
          >
            Contact
          </Link>
          <Link
            href={"/contact"}
            className=" p-2 border-2  hover:bg-red-500 hover:text-white flex gap-3 items-center justify-center"
            onClick={() => setopen(false)}
          >
            <FiPlusSquare className="text-3xl hover:text-red-500 hover:bg-white" />
            Join Class Now
          </Link>
        </ul>
      </div>
    </div>
    // </div>
  );
}
