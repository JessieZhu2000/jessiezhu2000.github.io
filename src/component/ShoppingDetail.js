import React from "react"

import "../css/ShoppingDetail.css"
import {Link} from "react-router-dom";
import DogLeash from "../img/product/dogleash.png";
import FoodFeeder from "../img/product/foodfeeder.jpeg";
import DogCollar from "../img/product/dogcollar.jpeg";
import Pendant from "../img/product/pendant.jpeg";
import PooBag from "../img/product/poobag.jpeg";
import PooBagDispenser from "../img/product/poobagdispenser.jpeg";
import JumpingBall from "../img/product/jumpingball.jpeg";

const ShoppingDetail = () => {
    return (
        <>
            <div className="shoppingDetail">
                <h2>Product Category</h2>
                <table>
                    <th>Product</th>
                    <th>Description</th>
                    <th>Cost</th>
                    <th>Action</th>
                    <tr>
                        <td><img src={DogLeash} className="product-image" alt=""/>
                        </td>
                        <td>Grey Hands Free Dog Leash, Adjustable Waist Belt and Dual-Handle
                            Retractable Bungee Leash, Jogging Dog Leash with Reflective Stitching
                            (Green Handle)
                        </td>
                        <td>£5</td>
                        <td>
                            <button><Link to="https://buy.stripe.com/3cs8zZbbdao0cRa000">Buy
                                Now</Link></button>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={DogCollar} className="product-image" alt=""/>
                        </td>
                        <td>LED Glow-In-The-Dark Pet Collar For Small And Medium Dogs, Keep Your Pet
                            Safe And Visible During Night Walks
                        </td>
                        <td>£5</td>
                        <td>
                            <button><Link to="https://buy.stripe.com/8wMeYn4MPeEg8AU3ch">Buy
                                Now</Link></button>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={Pendant} className="product-image" alt=""/>
                        </td>
                        <td>Pendant For Pet, Personalized With Name, Phone Number, Dog ID Tag, Keychain Pendant, For Pet Lovers
                        </td>
                        <td>£3</td>
                        <td>
                            <button><Link to="https://buy.stripe.com/28o3fFenpcw86sMcMQ">Buy
                                Now</Link></button>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={FoodFeeder} className="product-image"  alt=""/>
                        </td>
                        <td>Interactive Dog Chew Toy Ball - Durable Plastic Treat Dispenser for
                            Dental Health - Elasticity Food Ball Pet Accessory for Medium Breeds -
                            1PC Without Battery
                        </td>
                        <td>£5</td>
                        <td>
                            <button><Link to="https://buy.stripe.com/14kbMbgvx53G18s8wC">Buy
                                Now</Link></button>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={PooBag} className="product-image" alt=""/>
                        </td>
                        <td>Bulk Value, Extra Thick Leak-Proof Dog Poop Bags, 10 Rolls - Durable Pet
                            Waste Disposal Bags for Cats & Dogs
                        </td>
                        <td>£5</td>
                        <td>
                            <button><Link to="https://buy.stripe.com/28o4jJdjleEgeZieUX">Buy
                                Now</Link></button>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={PooBagDispenser} className="product-image" alt=""/>
                        </td>
                        <td>Canvas Dog Poop Bag Dispenser - Portable Pet Waste Carrier for Outdoor
                            Walks
                        </td>
                        <td>£5</td>
                        <td>
                            <button><Link to="https://buy.stripe.com/fZe2bB1AD8fSdVeeV1">Buy
                                Now</Link></button>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={JumpingBall} className="product-image" alt=""/>
                        </td>
                        <td>Interactive Dog Bouncing Ball Toy - USB Rechargeable, Durable
                            Thermoplastic Rubber, Suitable for All Breeds
                        </td>
                        <td>£5</td>
                        <td>
                            <button><Link to="https://buy.stripe.com/fZe8zZfrt0Nq7wQcMN">Buy
                                Now</Link></button>
                        </td>
                    </tr>
                </table>

            </div>
        </>
    )
}
export default ShoppingDetail
