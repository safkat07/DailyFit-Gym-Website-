import Image from "next/image";
import banner from "../../public/images/hero/hero-img.jpg";
import { FiArrowRight } from "react-icons/fi"
import Mainbutton from "./Mainbutton";

export default function Banner() {
  return (
    <div className="h-screen text-secondary-0 font-mainfont">
      <div className="banner">
        <div className="overlay">
          <div className=" flex items-center justify-center h-[100vh] leading-none flex-col gap-5 md:text-[6vw] text-[8.5vw]" >
            <p className=" font-bold text-secondary-0">MAKE YOUR BODY</p>
            <p className=" text-optional-0"> FIT & PERFECT</p>
            <Mainbutton text={"Our Classes"} icon={<FiArrowRight className=" text-3xl " />} />
          </div>
        </div>
      </div>
    </div>
  );
}
