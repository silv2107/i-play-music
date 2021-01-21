import React from "react";
import "./FeaturedMain.scss";
import FeaturedCard from "./FeaturedCard" ;


function FeaturedMain(){
    return (
        <main className="featuredMain">
            <FeaturedCard image="./images/featured.png" album="THE GREATEST SHOWMAN" genre="Soundtrack"/>
            <FeaturedCard image="./images/featured.png" album="THE GREATEST SHOWMAN" genre="Soundtrack"/>
            <FeaturedCard image="./images/featured.png" album="THE GREATEST SHOWMAN" genre="Soundtrack"/>
        </main>
    )
}

export default FeaturedMain;