import React from "react";
import FeaturedCard from "../components/FeaturedCard";
import Header from "../components/Header";
import MainHeader from "../components/MainHeader";
import TokenContext from "../TokenContext";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import "../components/FeaturedMain.scss";

function Featured(){
    var [token] = useContext(TokenContext);//access token vdvnkvnklsvnklsdlvnsnvsl
    
    var [content, setContent] = useState([]);

    console.log(content);
    
    // var arr = useState("hi");
	// var content = arr[0];
	// var setContent = arr[1];

	useEffect(function() {
		axios.get("https://api.spotify.com/v1/browse/featured-playlists", {
			headers: {
				"Authorization": "Bearer " + token.access_token
			}
		})
        .then(response => {
            setContent(response.data.playlists.items)// det er et array, normalt response.data er objekt
            //console.log(content[0]); // gem content.playlists.item som en variable arr
        });
        
	
    }, [token, setContent]);
    console.log(content);

    return (
        <>
            <Header>Featured</Header>
            <MainHeader theColor="transparent">Featured</MainHeader>
            <main className="featuredMain">
                { content && content.map(item => {
                    return <FeaturedCard key={item.id} item={item} image={item.images[0].url} album={item.name} genre={item.type}/>
                })}
            </main>
        </>
    )
}

export default Featured;