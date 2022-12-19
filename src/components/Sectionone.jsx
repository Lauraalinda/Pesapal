import {BsPencil} from "react-icons/bs";
import {AiOutlineHeart} from "react-icons/ai";
import hotel1 from "../assets/images/hotel1.png";
import hotel2 from "../assets/images/hotel2.jpeg";
import hotel3 from "../assets/images/hotel3.jpeg";
import hotel4 from "../assets/images/hotel4.jpeg";
import hotel5 from "../assets/images/hotel5.jpeg";
import { FaFacebookSquare} from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

function Sectionone() {
    return (
        <section>
            <div className="top">
                <div className="left_side">
                    <h1>Crowne Plaza Nairobi Airport</h1>
                    <p>Embakasi</p>
                    <div className="review">
                        <div className="save">
                        <p><BsPencil className="review_icon"/>Review</p>
                        </div>
                        <div className="save">
                        <p><AiOutlineHeart className="review_icon"/>Save</p>
                        </div>
                        <div className="save">
                        <p>Share<FaFacebookSquare className="facebook"/><FaTwitterSquare className="twitter"/></p>
                        </div>
                    </div>
                </div>
                <div className="right_side">
                    <h3><span>$169</span>$147</h3>
                    <p>per night</p>
                    <h4>Total: $294</h4>
                    <button className="rooms">View Rooms</button>
                </div>
            </div>

            <div className="details">
               <p>Photos</p>
               <p>Ammenities</p>
               <p>Packages</p>
               <p>Description</p>
               <p>Features</p>
               <p>Location</p>
               <p>Fine Print</p>
            </div>

            <div className="images">
                <div className="firstrowimages">
                <img id="hotel1" src={hotel1}></img>
                </div>
                <div className="secondrowimages">
                <img src={hotel2}></img>
                <img src={hotel3}></img>
                <img src={hotel4}></img>
                <img src={hotel5}></img>
                </div>
            </div>
        </section>
    )
}

export default Sectionone