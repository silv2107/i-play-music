import React from "react";
import { Link, navigate } from "@reach/router";

function SliderImg({ image, imageDescription, item }) {
	//throw new Error("SliderError");
	return (
		<article className="sliderContainer" onClick={() => navigate("/playlists/" + item.id)}>
			<Link to="/" className="sliderContainer__imgLink">
				<img src={image} alt={imageDescription} />
			</Link>
		</article>
	);
}

export default SliderImg;
