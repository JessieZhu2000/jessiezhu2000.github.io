import React from "react"

import "../css/ShoppingDetail.css"
import { Link } from "react-router-dom";
import DogLeash from "../img/product/DogLeash.jpeg";
import FoodFeeder from "../img/product/Foodfeeder.jpeg";
import DogCollar from "../img/product/DogCollar.jpeg";
import Pendant from "../img/product/Pendant.jpeg";
import PooBag from "../img/product/Poobag.jpeg";
import PooBagDispenser from "../img/product/Poobagdispenser.jpeg";
import JumpingBall from "../img/product/Jumpingball.jpeg";

const items = [
    {
        name: DogLeash,
        description: 'Grey Hands Free Dog Leash, Adjustable Waist Belt and Dual-Handle Retractable Bungee Leash, Jogging Dog Leash with Reflective Stitching (Gree Handle)',
    cost: '£8',
        buyLink: 'https://buy.stripe.com/3cs8zZbbdao0cRa000',
    },
    {
        name: DogCollar,
        description: 'LED Glow-In-The-Dark Pet Collar For Small And Medium Dogs, Keep Your Pet Safe And Visible During Night Walks',
    cost: '£8',
        buyLink: 'https://buy.stripe.com/8wMeYn4MPeEg8AU3ch',
    },
    {
        name: Pendant,
        description: 'Pendant For Pet, Personalized With Name, Phone Number, Dog ID Tag, Keychain Pendant, For Pet Lovers',
        cost: '£8',
        buyLink: 'https://buy.stripe.com/28o3fFenpcw86sMcMQ',
    },
    {
        name: FoodFeeder,
        description: 'Interactive Dog Chew Toy Ball - Durable Plastic Treat Dispenser for Dental Health - Elasticity Food Ball Pet Accessory for Medium Breeds - 1PC Without Battery',
    cost: '£8',
        buyLink: 'https://buy.stripe.com/14kbMbgvx53G18s8wC',
    },
    {
        name: PooBag,
        description: 'Bulk Value, Extra Thick Leak-Proof Dog Poop Bags, 10 Rolls - Durable Pet Waste Disposal Bags for Cats & Dogs',
    cost: '£8',
        buyLink: 'https://buy.stripe.com/28o4jJdjleEgeZieUX',
    },
    {
        name: PooBagDispenser,
        description: 'Canvas Dog Poop Bag Dispenser - Portable Pet Waste Carrier for Outdoor Walks',
    cost: '£8',
        buyLink: 'https://buy.stripe.com/fZe2bB1AD8fSdVeeV1',
    },
    {
        name: JumpingBall,
        description: 'Interactive Dog Bouncing Ball Toy - USB Rechargeable, Durable Thermoplastic Rubber, Suitable for All Breeds',
    cost: '£8',
        buyLink: 'https://buy.stripe.com/fZe8zZfrt0Nq7wQcMN',
    }

]

const ShoppingDetail = () => {
    return (
        <section className="shoppingSection">
            <header className="shoppingHeader">
                <h2 className="shoppingTitle">Shop Accessories</h2>
                <p className="shoppingSubtitle">Practical, affordable essentials for safer, happier walks & daily enrichment.</p>
            </header>
            <div className="productGrid">
                {items.map(item => (
                    <article key={item.buyLink} className="productCard">
                        <figure className="productImgWrap">
                            <img src={item.name} className="product-image" alt={item.description} loading="lazy" />
                        </figure>
                        <div className="productBody">
                            <p className="productDesc">{item.description}</p>
                            <div className="productMeta">
                                <span className="productPrice">{item.cost}</span>
                                <Link to={item.buyLink} className="buyBtn">Buy</Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};
export default ShoppingDetail
