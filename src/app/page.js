import Image from 'next/image'
import Hero from '../components/Hero'
import Services from '@/components/Services'
import Banner from '@/components/Banner'
import Bmi from '@/components/Bmi'
import MeetTrainer from '@/components/MeetTrainer/MeetTrainer'

export default function Home() {
  return (
    <div >
      <Banner />
      <Services />
      <Bmi />
      <MeetTrainer />
    </div>
  )
}
