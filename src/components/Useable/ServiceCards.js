import { TiStopwatch } from "react-icons/ti";
import '../servicecard.css'
export default function ServiceCards() {
    return (
        <div id="serviceCard" className="bg-[#111111] cursor-pointer glass  text-optional-0 group ">
            <div className="px-7  py-10 flex flex-col gap-y-5">
                <p className="md:text-[3.5vw] text-[10vw] text-secondary-0">
                    <TiStopwatch className="transform transition-transform duration-300 group-hover:text-optional-0 group-hover:rotate-[360deg]" />
                </p>
                <p className="text-2xl text-left">
                    Progression
                </p>
                <p className="line-clamp-4 ">
                    They also provode inshights about the profession&apos;s most colorful personalities and powerfull institutions, as Havard universitiy of gym and
                </p>
            </div>
        </div>
    )
}
