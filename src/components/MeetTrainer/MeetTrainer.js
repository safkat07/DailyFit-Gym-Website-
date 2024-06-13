import TrainerCards from "../Useable/TrainerCards";
import img1 from '../../../public/team1.jpg'
import img2 from '../../../public/team2.jpg'
import img3 from '../../../public/team3.jpg'
import img4 from '../../../public/team4.jpg'
import img5 from '../../../public/team5.jpg'
import img6 from '../../../public/team6.jpg'
export default function MeetTrainer() {
    return <div className="h-auto w-full py-20 text-optional-0 bg-[#110E10]">
        <div className="grid justify-center w-full items-center">
            <div className="grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-5 px-10 justify-between items-center">
                <h1 className="lg:text-[2vw] md:text-right text-center text-[5.5vw] px-5 font-mainfont">
                    MEET OUR EXPERT FITNESS TRAINERS
                </h1>
                <TrainerCards trainerName={"John Wick"} trainerImg={img1} trainerType={"Fitnes Trainer"} />
                <TrainerCards trainerName={"Winstoon"} trainerImg={img2} trainerType={"Body Trainer"} />
                <TrainerCards trainerName={"Charon"} trainerImg={img3} trainerType={"Mind Trainer"} />
                <TrainerCards trainerName={"Marcus"} trainerImg={img4} trainerType={"Fitnes Coach"} />
                <TrainerCards trainerName={"Tony Cross"} trainerImg={img5} trainerType={"Great Trainer"} />
                <TrainerCards trainerName={"Carlo Anchelotti"} trainerImg={img6} trainerType={"Team Trainer"} />

            </div>
        </div>
    </div>
}