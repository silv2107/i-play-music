import React from "react";
import Header from "../components/Header";
import "./Player.scss";
import "./PlayerSlider.scss";
import imgBackground from "./soundBackground.png";

function Player(){
    var displayer = {
        visibility: "hidden"
    }
    return (
        <article className="playerWrapper">
            <Header theModifier={displayer}>Playing</Header>
            <main style={{backgroundImage:`url(${imgBackground})`}} className="soundPhotoWrapper">
                <img src="./images/asset.png" alt="soundForeground"/>
            </main>
            <footer className="songContentWrapper">
                <section className="songContent">
                    <h4 className="songContent__title">Don't call me up</h4>
                    <p className="songContent__name">Mabel</p>
                </section>
                <section className="playerRange">
                    <input className="playerRange__bar" type="range"/>
                    <article className="playerRange__time">
                        <p>0:00</p>
                        <p>3:45</p>
                    </article>
                </section>
                <section className="playerButtons">
                    <button className="playerButtons__button">
                        <img src="./images/skipLeft.png" alt=""/>
                    </button>
                    <button className="playerButtons__button">
                        <img src="./images/fastForwardLeft.png" alt=""/>
                    </button>
                    <button className="playerButtons__button playerButtons__buttonPlay">
                        <img src="./images/playIcon1.png" alt=""/>
                    </button>
                    <button className="playerButtons__button">
                        <img src="./images/fastForwardRight.png" alt=""/>
                    </button>
                    <button className="playerButtons__button">
                        <img src="./images/skipRight.png" alt=""/>
                    </button>  
                </section>
            </footer>
        </article>
    )
}

export default Player;