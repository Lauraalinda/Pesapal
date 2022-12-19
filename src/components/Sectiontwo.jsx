import { GiHotMeal } from 'react-icons/gi'
import { Ri24HoursFill } from 'react-icons/ri'
import { FaSpa } from 'react-icons/fa'
import { CgGym } from 'react-icons/cg'
import { MdOutlinePool } from 'react-icons/md'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { MdLocalLaundryService } from 'react-icons/md'
import { FaRegSnowflake } from 'react-icons/fa'
import {ImCheckmark} from 'react-icons/im'
import { RiCupFill  } from 'react-icons/ri'
import { FaWifi } from 'react-icons/fa'
import { IoWineSharp } from 'react-icons/io5'
import { FaBriefcase } from 'react-icons/fa'
import { FaAngleRight } from "react-icons/fa";
import {FaParking} from "react-icons/fa";
function Sectiontwo() {
    return (
        <section>
            <div className="ammenities">
                <h1>Ammenities</h1>
                <div className='ammenity'>
                <div class="first-row">
                    <div className="top_row">
                        <p><GiHotMeal className="roomservice" />Room service</p>
                        <p><Ri24HoursFill className="roomservice" />24/7 Room service</p>
                        <p><IoWineSharp className="roomservice" />Bar</p>
                        <p><FaBriefcase className="roomservice" />Business services</p>
                    </div>
                    <div className="top_row">
                        <p><FaSpa  className="roomservice" />Spa</p>
                        <p><CgGym  className="roomservice" />Gym</p>
                        <p><MdOutlinePool className="roomservice" />Pool</p>
                        <p><MdOutlineRestaurantMenu className="roomservice" />Restaurant</p>
                    </div>
                </div>

                <div class="second-row">
                    <div className="top_row">
                    <p><MdLocalLaundryService className="roomservice" />Laundry</p>
                    <p><FaWifi className="roomservice" />Free Wifi</p>
                    <p><FaRegSnowflake className="roomservice" />Air conditioning</p>
                    </div>
                    <div className="top_row">
                    <p><RiCupFill className="roomservice" />Breakfast available</p>
                    <p><ImCheckmark className="roomservice" />Housekeeping</p>
                    <p><FaParking className="roomservice" />Parking included</p>
                    </div>
                </div>
                </div>
                <div className= "seeall">
                <p>See All</p> <FaAngleRight className="rightarrow" /> 
                </div>
            </div>
        </section>
    )
}

export default Sectiontwo