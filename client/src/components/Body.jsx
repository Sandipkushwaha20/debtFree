import Footer from "./Footer"
import Meter from "./Meter"
import Navbar from "./Navbar"
import {Outlet} from "react-router-dom"
const Body = () =>{
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Body