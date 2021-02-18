import React from "react";
import CategoryField from "../components/CategoryField";
import Header from "../components/Header";
import MainHeader from "../components/MainHeader";
import TokenContext from "../TokenContext";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

function Categories() {
	var [components, setComponents] = useState([]);

	useEffect(function () {
		fetch("./colorData.json")
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				setComponents(data);
			});
	}, []);

	var [token] = useContext(TokenContext); //access token vdvnkvnklsvnklsdlvnsnvsl

	var [content, setContent] = useState([]);

	// var arr = useState("hi");
	// var content = arr[0];
	// var setContent = arr[1];

	useEffect(
		function () {
			axios
				.get("https://api.spotify.com/v1/browse/categories?country=GB", {
					headers: {
						Authorization: "Bearer " + token.access_token,
					},
				})
				.then((response) => {
					setContent(response.data); // det er et array, normalt response.data er objekt
				});
		},
		[token, setContent]
	);

	return (
		<>
			<Header>Categories</Header>
			<MainHeader theColor="transparent">Categories</MainHeader>
			<main className="categoryMain">
				{content.categories?.items.map((item) => {
					var theIndex = content.categories.items.indexOf(item);
					return (
						<CategoryField
							key={item.id}
							title={item.name}
							item={item}
							theBackgroundColor={components.colors && components.colors[theIndex].color}
						/>
					);
				})}
			</main>
		</>
	);
}

export default Categories;
