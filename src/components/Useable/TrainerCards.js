
import Image from "next/image"
import img1 from '../../../public/team2.jpg'
import img2 from '../../../public/team1.jpg'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


export default function TrainerCards({
    trainerName, trainerImg, trainerType,
}) {
    return <div className="border group cursor-pointer relative  backdrop-blur-lg border-optional-0">
        <div className="w-full relative overflow-hidden mx-auto">
            <Image className="mx-auto  overflow-hidden  w-[100%]" src={trainerImg} alt="trainerimg" />
            <div className="glassTrainee  transition-all duration-700 w-[80%] px-5 opacity-0 group-hover:opacity-100 top-3/4 h-16 right-6 absolute">
                <h1 className="text-secondary-0  ">
                    {trainerType}
                </h1>
                <h1 className="text-xl font-bold tracking-wider ">
                    {trainerName}
                </h1>
            </div>
            <div className="bg-[#ffa600c0] py-3 rounded-b-xl px-3 text-optional-0 absolute transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:top-0 -top-7   right-10 ">
                <ul className="flex justify-between flex-col gap-y-4">
                    <li>
                        <FaFacebookF />
                    </li>
                    <li>
                        <FaInstagram />
                    </li>
                    <li>
                        <FaTwitter />
                    </li>
                    <li>
                        <FaYoutube />
                    </li>
                </ul>
            </div>
        </div>

    </div>
}