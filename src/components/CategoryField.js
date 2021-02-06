import React from "react";
import "./CategoryMain.scss";
import TokenContext from "../TokenContext";
import { useState, useEffect, useContext } from "react";
import axios from "axios";


function CategoryField({title, theBackgroundColor, item}){
    var id = item.id
    var [token] = useContext(TokenContext);
    var [content, setContent] = useState([]);
    var [newContent, newSetContent] = useState(false);

    
	useEffect(function() {
        if(newContent)
		axios.get(`https://api.spotify.com/v1/browse/categories/${id}/playlists`, {
			headers: {
				"Authorization": "Bearer " + token.access_token
			}
		})
        .then(response => {
            setContent(response.data)
        });
        
	
    }, [token, newContent, id, setContent]);

    function genres(){
        newSetContent(true)
    }

    console.log(content);

    return (
        <details className="accordian">
            <summary onClick={genres} className="accordian__categoryBox" style={{backgroundColor:`${theBackgroundColor}`}}>
                <h5>{title}</h5>
                <p>&#8226; &#8226; &#8226;</p>
            </summary>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </details>
        
       
    )
}

export default CategoryField;