import React from "react";
import "./SongSetUp.scss";

function SongSetUp({image, styleContainer,styleImg, gridSize, imageDescription, title, author, amount}){
    return(
        <article className="songWrapper" style={gridSize}>
            <article style={styleContainer} className="songWrapper__imgContainer">
                <img style={styleImg} className="songWrapper__img" src={image} alt={imageDescription}/>
            </article>
            <section className="songWrapper__content">
                <h5 className="title">{title}</h5>
                <p className="author">{author}</p>
            </section>
            <p className="songWrapper__amount">{amount}</p>
        </article>
    )
}

export default SongSetUp;