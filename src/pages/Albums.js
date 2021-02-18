import React from "react";
import { Link } from "@reach/router";
import Header from "../components/Header";
import MainHeader from "../components/MainHeader";
import SliderImg from "../components/Slider";
import SongSetUp from "../components/SongSetUp";
import "./Albums.scss";
import TokenContext from "../TokenContext";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

function Albums() {
	var [token] = useContext(TokenContext); //access token vdvnkvnklsvnklsdlvnsnvsl
	var [featuredContent, setFeaturedContent] = useState([]);

	var [content, setContent] = useState([]);

	// var arr = useState("hi");
	// var content = arr[0];
	// var setContent = arr[1];

	useEffect(
		function () {
			axios
				.get("https://api.spotify.com/v1/browse/featured-playlists", {
					headers: {
						Authorization: "Bearer " + token.access_token,
					},
				})
				.then((response) => {
					setFeaturedContent(response.data.playlists.items); // det er et array, normalt response.data er objekt
					//console.log(featuredContent); // gem content.playlists.item som en variable arr
				});
		},
		[token, setFeaturedContent]
	);

	useEffect(
		function () {
			axios
				.get("https://api.spotify.com/v1/browse/new-releases", {
					headers: {
						Authorization: "Bearer " + token.access_token,
					},
				})
				.then((response) => {
					setContent(response.data.albums.items); // det er et array, normalt response.data er objekt
					//console.log(content); // gem content.playlists.item som en variable arr
				});
			//console.log(content);
		},
		[token, setContent]
	);
	return (
		<article className="albumsWrapper">
			<Header>Music</Header>
			<MainHeader theColor="transparent">All Albums</MainHeader>
			<div className="headerFooter">
				<article className="headerFooter__titleViewAll">
					<h5>Featured Albums</h5>
					<Link to="/">View All</Link>
				</article>
				<article className="headerFooter__slider">
					{featuredContent &&
						featuredContent.map((item) => {
							var featuredImage = item.images[0].url;
							//console.log(featuredImage);
							return <SliderImg key={item.id} item={item} image={featuredImage} imageDescription="nameOfSong" />;
						})}
				</article>
				<article className="headerFooter__titleViewAll">
					<h5>New Releases</h5>
					<Link to="/">View All</Link>
				</article>
			</div>
			<main className="songMain">
				{content &&
					content.map((item) => {
						var albumImage = item.images[0].url;
						var albumName = item.name;
						var albumArtist = item.artists[0].name;
						var totalTracks = item.total_tracks;
						return (
							<SongSetUp
								key={item.id}
								image={albumImage}
								imageDescription="song"
								title={albumName}
								author={albumArtist}
								amount={totalTracks + " songs"}
							/>
						);
					})}
			</main>
		</article>
	);
}

export default Albums;
