import React from 'react'
import logo from "../../../public/Images/Logo2.png"
import { Link } from 'react-router-dom'
const Logo = () => {
  return (
      <Link to={"/"} className=' text-black font-bold  mb-8 w-40 mt-5  rounded-lg item-center gap-2 text-3xl flex flex-row'>
            <img src={logo} className="w-40 h-10 "/>
            <p >DebtFree</p>
      </Link>
  )
}

export default Logo
