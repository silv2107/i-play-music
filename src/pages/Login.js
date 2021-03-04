import querystring from "querystring";

export default function Login() {
	// querystring.stringify makes the object into a string
	var queryParameters = querystring.stringify({
		response_type: "code",
		client_id: "755eadbb40354811852d64a6219a5a6e",
		scope: "user-read-private user-read-email",
		//redirect_uri: "http://localhost:8888/callback",
		redirect_uri: "https://i-play-music-silviu.netlify.app/callback",
		state: "mmmbdfmbdgfrt09tgg3ekmgkrmgrmgekgmegmemtsvmenvwo",
	});

	return (
		<>
			<h1>Login</h1>
			<a href={`https://accounts.spotify.com/authorize?${queryParameters}`}>Log in with Spotify</a>
		</>
	);
}
