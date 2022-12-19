import map from '../assets/images/map.png'
import logo2 from "../assets/images/logo2.png"
import {MdOutlineCopyright} from 'react-icons/md'
import {BsFacebook } from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {BsYoutube} from 'react-icons/bs'
import {BsPinterest} from 'react-icons/bs'
function Sectionfour() {
    return (
        <section>
            <div className="location">
                <h1>Location</h1>
                <img src={map}></img>
            </div>

            <div className="fineprint">
                <h1>Fine Print</h1>
                <div className="print_one">
                    <p>This package is valid till 4th January 2023 and it includes:</p>
                    <ul>
                    <p>Per night stay in a superior room</p>
                    <p>Meals on all-inclusive basis</p>
                    <p>Festive rates apply</p>
                    </ul>
                </div>

                <div className="print_two">
                    <ul>
                    <p>Package excludes;</p>
                    <p>Travel insurance</p>
                    <p>Any other items not mentioned above</p>
                    </ul>
                    <p id="call">Give us a call on <span>+254-705-804-226 </span>  / <span> +254-721-876-190 </span>prior to purchase if further information is needed.</p>

                    <p id="reserve">Reservations are subject to availability. Cancellation/re-scheduling policy applies</p>
                </div>
            </div>

            <div className="footer">
            <div className="footer_content"> 
               <img src={logo2} ></img>
                <div className="footer_top">
                    
                    <div className="footer_details">
                        <h3>Services</h3>
                        <p>Events</p>
                        <p>Holiday Packages</p>
                        <p>Flights</p>
                        <p>Hotels</p>
                    </div>

                    <div className="footer_details">
                        <h3>Using Ticketsasa</h3>
                        <p>Buy a Ticket</p>
                        <p>Buy a Package</p>
                        <p>Sell Your Tickets</p>
                        <p>How To Buy a Package</p>
                        <p>Write a Review</p>
                        <p>FAQs</p>
                    </div>

                    <div className="footer_details">
                        <h3>Quicklinks</h3>
                        <p>Support</p>
                        <p>Pricing</p>
                        <p>Sitemap</p>
                        <p>Privacy</p>
                        <p>Terms & Conditions</p>
                        <p>FAQs</p>
                    </div>

                    <div className="newsletter">
                        <p>Get our newsletter and stay current on deals and specials</p>
                        <div className="inputemail">
                            <input type='email' placeholder='Email Address'></input>
                            <button>Subscribe</button>
                        </div>
                       
                        <p>Get the Tickets app</p>
                        <div className="inputemail">
                            <div className="phonenumber">
                            <input id="code" type='email' placeholder='+254'></input>
                            <input id="number" type='text' placeholder="Your mobile number"></input>
                            </div>
                            <button>Subscribe</button>
                        </div>


                    </div>
                </div>
                </div>
                <div className="footer_bottom">
                    <div className="copy_right">
                    <p><MdOutlineCopyright className="copy"/> 2022 Ticketsasa, a Pesapal company. All rights reserved</p>
                    </div>

                    <div className ="socials">
                        <BsFacebook className="facebooks"/>
                        <AiFillTwitterCircle className="twitters"/>
                        <AiFillInstagram className="instagram"/>
                        <BsYoutube className="youtube"/>
                        <BsPinterest className="pinterest"/>
                    </div>
                </div>
            </div>
           
        </section>
    )
}

export default Sectionfour