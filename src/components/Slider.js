import React from "react";
import { Link } from "@reach/router";



function SliderImg({image, imageDescription}){
    return(
        <article className="sliderContainer">
            <Link to="/" className="sliderContainer__imgLink"><img src={image} alt={imageDescription}/></Link>
        </article>
    )
}

export default SliderImg;