import React from "react";
import { navigate } from "@reach/router";

function FeaturedCard({ image, album, genre, item }) {
	return (
		<article className="featuredMain__pageOne" onClick={() => navigate("/playlists/" + item.id)}>
			<img className="featuredBackground" src={image} alt="front page" />
			<img className="featuredDark" src="./images/featuredDark.png" alt="overlay" />
			<h3 className="titleOne">{album}</h3>
			<h6>{genre}</h6>
		</article>
	);
}

export default FeaturedCard;
