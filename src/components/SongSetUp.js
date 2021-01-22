import React from "react";
import "./SongSetUp.scss";

function SongSetUp({image, imageDescription, title, author, amount}){
    return(
        <article className="songWrapper">
            <img className="songWrapper__img" src={image} alt={imageDescription}/>
            <section className="songWrapper__content">
                <h5 className="title">{title}</h5>
                <p className="author">{author}</p>
            </section>
            <p className="songWrapper__amount">{amount}</p>
        </article>
    )
}

export default SongSetUp;