import React from "react";
import Header from "../components/Header";
import "./Player.scss";
import "./PlayerSlider.scss";
import imgBackground from "./soundBackground.png";
import TokenContext from "../TokenContext";
import { useState, useEffect, useContext } from "react";
import axios from "axios";


function Player(props){
    var id = props.id
    
    var [token] = useContext(TokenContext);//access token vdvnkvnklsvnklsdlvnsnvsl
	var [content, setContent] = useState([]);
	// var arr = useState("hi");
	// var content = arr[0];
	// var setContent = arr[1];

	useEffect(function() {
        
		axios.get(`https://api.spotify.com/v1/tracks/${id}`, {
			headers: {
				"Authorization": "Bearer " + token.access_token
			}
		})
        .then(response => {
            setContent(response.data)// det er et array, normalt response.data er objekt
            //console.log(content[0].track.id); // name - divide it into two variables (song name and artist name)
            //console.log(content.tracks.items[0].track.duration_ms);// time - make two variable (min and sec)
        });
        
	
    }, [token,id, setContent]);

    var displayer = {
        visibility: "hidden"
    }

    var songName = content.name
    var artistName = content.artists && content.artists[0].name

    //formating time from ms to minutes and seconds
    var minSec = (content.duration_ms/1000)/60
    var min = Math.floor((content.duration_ms/1000)/60)
    var sec = Math.floor((minSec % min)*100*.6)
    var time = min + ": " + sec

    return (
        <article className="playerWrapper">
            <Header theModifier={displayer}>Playing</Header>
            <main style={{backgroundImage:`url(${imgBackground})`}} className="soundPhotoWrapper">
                <img src="/images/asset.png" alt="soundForeground"/>
            </main>
            <footer className="songContentWrapper">
                <section className="songContent">
                    <h4 className="songContent__title">{songName}</h4>
                    <p className="songContent__name">{artistName}</p>
                </section>
                <section className="playerRange">
                    <input className="playerRange__bar" type="range"/>
                    <article className="playerRange__time">
                        <p>0:00</p>
                        <p>{time}</p>
                    </article>
                </section>
                <section className="playerButtons">
                    <button className="playerButtons__button">
                        <img src="/images/skipLeft.png" alt=""/>
                    </button>
                    <button className="playerButtons__button">
                        <img src="/images/fastForwardLeft.png" alt=""/>
                    </button>
                    <button className="playerButtons__button playerButtons__buttonPlay">
                        <img src="/images/playIcon1.png" alt=""/>
                    </button>
                    <button className="playerButtons__button">
                        <img src="/images/fastForwardRight.png" alt=""/>
                    </button>
                    <button className="playerButtons__button">
                        <img src="/images/skipRight.png" alt=""/>
                    </button>  
                </section>
            </footer>
        </article>
    )
}

export default Player;