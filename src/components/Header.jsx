import logo from "../assets/images/logo.png";
import { FaBars } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";
import { GiIsland } from "react-icons/gi";
import { FaCalendarDay } from "react-icons/fa";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";
import { SlNotebook } from "react-icons/sl";

function Header() {
    return (
        <header>
            <div className="top">
            <div className="logo_section">
                <img id='logo' src={logo} ></img>
                <div className="icons">
                <FaBars className="icon"></FaBars>
                <FaUserCircle className="icon"></FaUserCircle>
                </div>
            </div>

            <div className="search">
                <input text=' ' placeholder='Start your search'></input>
                <FaSistrix className="search_icon"></FaSistrix>
            </div>
            </div>
          

            <div className="categories">
                <div class="select">
                    <FaCalendarDay className="select_icon" /> <p>Events</p>
                </div>
                <div class="select">
                    <GiIsland className="select_icon" /> <p>Holidays</p>
                </div>
                <div class="select">
                    <FaPlaneDeparture className="select_icon" /> <p>Flights</p>
                </div>
                <div class="select">
                    <BsBuilding className="select_icon" /> <p>Hotels</p>
                </div>
                <div class="select">
                    <SlNotebook className="select_icon" /> <p>Blog</p>
                </div>
            </div>

            <div className="carousel">
                <div class="selection">
                    <p>Ticketsasa.com</p> <FaAngleRight className="arrow" /> 
                </div>
                <div class="selection">
                    <p>Hotels</p> <FaAngleRight className="arrow" /> 
                </div>
                <div class="selection">
                    <p>Nairobi</p> <FaAngleRight className="arrow" /> 
                </div>
                <div class="selection">
                    <p>Luxurious Beach Retreat at Silver Palm Spa and Resort</p> 
                </div>
            </div>
        </header>
    )
}

export default Header