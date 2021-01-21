import React from "react";
import "./FeaturedMain.scss";

function FeaturedCard({image, album, genre}){
    return (
        <article className="featuredMain__pageOne">
            <img src={image} alt="front page"/>
            <img className="featuredDark" src="./images/featuredDark.png" alt="overlay"/>
            <h3 className="titleOne">{album}</h3>
            <h6>{genre}</h6>
        </article>
    )
}

export default FeaturedCard;