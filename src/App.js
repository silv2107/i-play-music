import "./App.css";
import React from "react";
import { Router } from "@reach/router";
import Navigation from "./components/Navigation";
import Albums from "./pages/Albums";
import Playlists from "./pages/Playlists";
import Featured from "./pages/Featured";
import Categories from "./pages/Categories";
import Player from "./pages/Player";
import Login from "./pages/Login";
import Callback from "./pages/Callback";
import TokenContext from "./TokenContext";
import { useState } from "react";

function App() {
	var tokenState = useState(null);

	return (
		
		<div className="App">
			<TokenContext.Provider value={tokenState}>
				<Navigation />
				<Router>
					<Login default />
					<Callback path="/callback" />
					<Albums path="/albums" />
					<Playlists path="/playlists" />
					<Playlists path="/playlists/:id" />
					<Featured path="/featured" />
					<Categories path="/categories" />
					<Player path="/player/:id" />
				</Router>
			</TokenContext.Provider>
		</div>
	);
}

export default App;
