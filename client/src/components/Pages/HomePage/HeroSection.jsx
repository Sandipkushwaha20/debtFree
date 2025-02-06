import React from 'react'
import CTAButton from "../../CommonCom/Button";
import { FaArrowRight } from "react-icons/fa";
import Hero from "../../../../public/Images/hero.png"
import speedometer from "../../../../public/Icons/speedometer.png"

const HeroSection = () => {
  return (
    <div>
        <div className="flex flex-col lg:flex-row gap-10 items-center  ">
          
          <div className="lg:w-[50%] flex gap-15 flex-col items-start">
            <h1 className="w-50 text-4xl font-semibold ">
            Caught in 
            Dept trap?
            </h1>

            <p className="font-medium text-[16px] text-justify w-[90%] text-richblack-300">
            Drowning in debt and struggling to keep up? Don’t worry we are here.
            </p>

            <div className="w-fit">
              <CTAButton active={true} linkto={"/login"}>
                <div className="flex items-center gap-3">
                  Check credit score
                  <img src={speedometer} alt="" className="w-5 h-5" />
                </div>
              </CTAButton>
            </div>
          </div>
          <div className="lg:w-[50%]">
            <img
              src={Hero}
              alt="image"
              className="shadow-white shadow-[-20px_-20px_0_0] w-2xl"
            />
          </div>
        </div>
    </div>
  )
}

export default HeroSection