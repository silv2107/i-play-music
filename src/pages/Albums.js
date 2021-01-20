import React from "react";
import Header from "../components/Header";
import MainHeader from "../components/MainHeader";
import "./Albums.scss";

function Albums(){
    return (
        <article className="albumsWrapper">
            <Header>Album</Header>
            <MainHeader>Album</MainHeader>
        </article>
    )
}

export default Albums;