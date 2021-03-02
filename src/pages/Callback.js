import axios from "axios";
import { useContext, useEffect } from "react";
import TokenContext from "../TokenContext";
import { navigate } from "@reach/router";

export default function Callback(props) {
	// eslint-disable-next-line
	var setToken = useContext(TokenContext)[1];

	// var tokenState = useContext(TokenContext)
	// var token = tokenState[0]
	// var setToken = tokenState[1]

	var code = new URLSearchParams(props.location.search).get("code");

	useEffect(
		function () {
			axios
				.post(
					"/.netlify/functions/token",
					JSON.stringify({
						code,
					})
				)
				.then((response) => {
					setToken(response.data); // setting the TokenContext available for all pages
					navigate("/featured");
				});
		},
		[setToken, code]
	);

	return null;
}
