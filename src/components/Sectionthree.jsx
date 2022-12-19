import hotel3 from '../assets/images/hotel3.jpeg';
import { BsCircle } from 'react-icons/bs'

function Sectionthree() {
    return (
        <section>
            <div className="sectionthree">
                <h1>Available Packages</h1>

                <div className="checking">
                    <div className="first_content">
                        <div className="content">
                            <p>Check-in</p>
                            <h4>25 Nov 2022<span> Fri After 12:00</span></h4>
                        </div>

                        <div className="content">
                            <p>Check-out</p>
                            <h4>27 Nov 2022<span> Fri After 12:00</span></h4>
                        </div>

                        <button className="change">Change</button>
                    </div>

                    <div className="second_content">
                        <div className="content">
                            <p>Guest</p>
                            <h4>1 Room, 2 Adults</h4>
                        </div>

                        <button className="change">Change</button>
                    </div>

                </div>

                <div className="room_images">
                    <div className="Standard">
                        <img src={hotel3}></img>
                        <div className="standard_details">
                            <h2>Standard Room</h2>
                            <div className="beds">
                                <div className="bed_categories">
                                    <div className="bed_details">
                                        <h4><BsCircle className="circle" />Single Bed</h4>
                                        <p>Price between Tue Jun 07 2022 and Sat Dec 31 2022</p>
                                    </div>
                                    <div className="bed_charge">
                                        <h4>No extra charge</h4>
                                        <p>Per night</p>
                                    </div>
                                </div>
                                <div className="bed_categories">
                                    <div className="bed_details">
                                        <h4><BsCircle className="circle" />Double Bed</h4>
                                        <p>Price between Tue Jun 07 2022 and Sat Dec 31 2022</p>
                                    </div>
                                    <div className="bed_charges">
                                        <h4>+ KES 5000</h4>
                                        <p>Per night</p>
                                    </div>
                                </div>
                                <div className="bed_categories">
                                    <div className="bed_details">
                                        <h4><BsCircle className="circle" />Tripple Bed</h4>
                                        <p>Price between Tue Jun 07 2022 and Sat Dec 31 2022</p>
                                    </div>
                                    <div className="bed_charges">
                                        <h4>+ KES 1,000</h4>
                                        <p>Per night</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="price">
                            <div className="price_left">
                                <h4>$169</h4>
                                <h3>$147</h3>
                                <p>per night</p>
                                <h2>Total: $294</h2>
                            </div>
                            <button className="booknow">Book Now</button>
                        </div>

                    </div>

                    <div className="Standard">
                        <img src={hotel3}></img>
                        <div className="standard_details">
                            <h2>Deluxe Room</h2>
                            <div className="beds">
                                <div className="bed_categories">
                                    <div className="bed_details">
                                        <h4><BsCircle className="circle" />Single Bed</h4>
                                        <p>Price between Tue Jun 07 2022 and Sat Dec 31 2022</p>
                                    </div>
                                    <div className="bed_charge">
                                        <h4>No extra charge</h4>
                                        <p>Per night</p>
                                    </div>
                                </div>
                                <div className="bed_categories">
                                    <div className="bed_details">
                                        <h4><BsCircle className="circle" />Double Bed</h4>
                                        <p>Price between Tue Jun 07 2022 and Sat Dec 31 2022</p>
                                    </div>
                                    <div className="bed_charges">
                                        <h4>+ KES 5000</h4>
                                        <p>Per night</p>
                                    </div>
                                </div>
                                <div className="bed_categories">
                                    <div className="bed_details">
                                        <h4><BsCircle className="circle" />Tripple Bed</h4>
                                        <p>Price between Tue Jun 07 2022 and Sat Dec 31 2022</p>
                                    </div>
                                    <div className="bed_charges">
                                        <h4>+ KES 1,000</h4>
                                        <p>Per night</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="price">
                            <div className="price_left">
                                <h4>$169</h4>
                                <h3>$147</h3>
                                <p>per night</p>

                                <h2>Total: $294</h2>
                            </div>
                            <button className="booknow">Book Now</button>
                        </div>

                    </div>

                    <div className="Standard">
                        <img src={hotel3}></img>
                        <div className="standard_details">
                            <h2>Excecutive Room</h2>
                            <div className="beds">
                                <div className="bed_categories">
                                    <div className="bed_details">
                                        <h4><BsCircle className="circle" />Single Bed</h4>
                                        <p>Price between Tue Jun 07 2022 and Sat Dec 31 2022</p>
                                    </div>
                                    <div className="bed_charge">
                                        <h4>No extra charge</h4>
                                        <p>Per night</p>
                                    </div>
                                </div>
                                <div className="bed_categories">
                                    <div className="bed_details">
                                        <h4><BsCircle className="circle" />Double Bed</h4>
                                        <p>Price between Tue Jun 07 2022 and Sat Dec 31 2022</p>
                                    </div>
                                    <div className="bed_charges">
                                        <h4>+ KES 5000</h4>
                                        <p>Per night</p>
                                    </div>
                                </div>
                                <div className="bed_categories">
                                    <div className="bed_details">
                                        <h4><BsCircle className="circle" />Tripple Bed</h4>
                                        <p>Price between Tue Jun 07 2022 and Sat Dec 31 2022</p>
                                    </div>
                                    <div className="bed_charges">
                                        <h4>+ KES 1,000</h4>
                                        <p>Per night</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="price">
                            <div className="price_left">
                                <h4>$169</h4>
                                <h3>$147</h3>
                                <p>per night</p>

                                <h2>Total: $294</h2>
                            </div>
                            <button className="booknow">Book Now</button>
                        </div>

                    </div>
                </div>

                <div className="description">
                    <h2>Description</h2>
                    <p>A piece of paradise in the midst of Kilifi's untouched coastal beauty. A boutique hotel that royally stands on a cliff boasting
                        a stunning ocean view.Stairs down to a sandy white beach and inviting clear water.</p>

                    <p id="hotelquote">"Hotel is Fully Covid-19 Health Precautions Compliant"</p>
                    <p id="tembeya">"Tembea Kenya"</p>
                </div>

                <div className="description">
                    <h2>Features</h2>
                    <p>All 38 rooms savor have an ocean view designed with a warm and spacious air to entice honeymooners or holiday makers who appreciate architecture precision, privacy, pampering and personal service.</p>

                    <p>The resort has two restaurants and one bar. The restaurants have a selection of seafood, Indian dishes, wood fired dishes and vast vegetarian offers. </p>

                    <p>Overlooking the turquoise blue waters of the Indian Ocean and surrounded by the beautiful palm trees and refreshing cool breeze, true to the meaning of the name,Barizi Spa offers luxurious relaxation experiences and wellness journeys designed to reconnect with your inner being in an oasis of serenity that reflects the soul of Africa.</p>
                </div>
            </div>
        </section>
    )
}

export default Sectionthree