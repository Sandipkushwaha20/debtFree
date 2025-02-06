import React from 'react'
import HeroSection from './HomePage/HeroSection'
import CTACard from '../CommonCom/Card'
import DC01 from "../../../public/Icons/Section_Icons/DC01.png"

// import cardData from '../../data/data'
const cardData = [
    {
      icon: "DC01",
      heading: "Debt Counselling",
      para: "Help clients improve their credit scores by providing personalized financial advice",
      link: "/login"
    },
    {
      icon: "IC02",
      heading: "Investment Consulting",
      para: "Provide insights on the best investment opportunities tailored to individual needs",
      link: "/invest"
    },
    {
      icon: "LC03",
      heading: "Loan Consulting",
      para: "Assist clients in finding the best loan options with favorable terms",
      link: "/loans"
    },
    {
      icon: "FC04",
      heading: "Financial Coaching",
      para: "Guide clients in managing their finances effectively for a stable future",
      link: "/coaching"
    }
  ];

const Home = () => {
    // console.log("Kdkdk  ",cardData);
  return (
    <div className='flex flex-col items-center justify-center '>
        {/* HeroSection 01 */}
        <HeroSection/>
        {/* Section 02 */}

        {/* Section 03 */}
        <div className="flex flex-row gap-4">
        {/* console.log(cardData) */}
        {cardData.map((card, index) => (
            <CTACard key={index} icon={card.icon} heading={card.heading} linkto={card.link}>
            <div className="flex items-center justify-between">
                <p className="text-[16px] text-richblack-500">{card.para}</p>
            </div>
            </CTACard>
        ))}
    </div>
        

    </div>
  )
}

export default Home
