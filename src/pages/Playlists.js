import React from "react";
import Header from "../components/Header";
import MainHeader from "../components/MainHeader";
import SliderImg from "../components/Slider";
import "./Albums.scss";
import "./Playlists.scss";
import Image from "./sound-wave.png";
import SongSetUp from "../components/SongSetUp";
import TokenContext from "../TokenContext";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

function Playlists(props) {
	var id = props.id;
	var myStyleContainer = {
		background: "linear-gradient(90deg,#EE0979 0%, #FF6A00 45%)",
		borderRadius: "50%",
		width: "25px",
		height: "25px",
	};

	var myStyleImg = {
		width: "7px",
		height: "7px",
	};

	var myGridSize = {
		gridTemplateColumns: "15% 55% 35%",
	};

	var [token] = useContext(TokenContext); //access token vdvnkvnklsvnklsdlvnsnvsl
	var [content, setContent] = useState([]);

	// var arr = useState("hi");
	// var content = arr[0];
	// var setContent = arr[1];
	useEffect(
		function () {
			if (id)
				axios
					.get(`https://api.spotify.com/v1/playlists/${id}`, {
						headers: {
							Authorization: "Bearer " + token.access_token,
						},
					})
					.then((response) => {
						setContent(response.data); // det response.data.tracks.items er et array, normalt response.data er objekt
						console.log(response.data); // name - divide it into two variables (song name and artist name)
						//console.log(content.tracks.items[0].track.duration_ms);// time - make two variable (min and sec)
					});
			// console.log(content.images[0].url);
		},
		[token, id, setContent]
	);

	var theImage = content.images ? content.images[0].url : null; //ternary operator that checks whether content.images exists or not

	return (
		<article style={{ backgroundImage: `url(${Image})` }} className="albumsWrapper playlistWrapper">
			<Header theColor={"white"} symbolColor="white" brightness="brightness(100)">
				Playlists
			</Header>
			<MainHeader theColor="white">Playlists</MainHeader>
			<section className="headerFooter__slider">
				<SliderImg image="/images/featured.png" imageDescription="nameOfSong" />
				<SliderImg image={theImage} imageDescription="nameOfSong" />
				<SliderImg image="/images/featured.png" imageDescription="nameOfSong" />
			</section>
			<section className="titleFooter">
				<h5 className="titleFooter__title">Top 50 Rock Ballads</h5>
			</section>
			<main className="songMain songPlaylist">
				{content.tracks?.items.map((item) => {
					var trackID = item.track.id;
					var minSec = item.track.duration_ms / 1000 / 60;
					var min = Math.floor(item.track.duration_ms / 1000 / 60);
					var sec = Math.floor((minSec % min) * 100 * 0.6);
					var time = min + ": " + sec;
					return (
						<SongSetUp
							key={item.track.id}
							trackID={trackID}
							gridSize={myGridSize}
							styleContainer={myStyleContainer}
							styleImg={myStyleImg}
							image="/icons/playIcon.svg"
							imageDescription="song"
							title={item.track.name}
							author={item.track.artists[0].name}
							amount={time}
						/>
					);
				})}
			</main>
			<footer className="playlistFooter">
				<button className="playlistFooter__button">LISTEN ALL</button>
			</footer>
		</article>
	);
}

export default Playlists;
