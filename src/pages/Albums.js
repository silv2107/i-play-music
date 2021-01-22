import React from "react";
import { Link } from "@reach/router";
import Header from "../components/Header";
import MainHeader from "../components/MainHeader";
import SliderImg from "../components/Slider";
import SongSetUp from "../components/SongSetUp";
import "./Albums.scss";

function Albums(){
    return (
        <article className="albumsWrapper">
            <Header>Music</Header>
            <MainHeader>All Albums</MainHeader>
            <div className="headerFooter">
                <article className="headerFooter__titleViewAll">
                    <h5>Featured Albums</h5>
                    <Link to="/">View All</Link>
                </article>
                <article className="headerFooter__slider">
                    <SliderImg image="./images/featured.png" imageDescription="nameOfSong"/>
                    <SliderImg image="./images/featured1.png" imageDescription="nameOfSong"/>
                    <SliderImg image="./images/featured.png" imageDescription="nameOfSong"/>
                    <SliderImg image="./images/featured1.png" imageDescription="nameOfSong"/>
                    <SliderImg image="./images/featured1.png" imageDescription="nameOfSong"/>
                    <SliderImg image="./images/featured.png" imageDescription="nameOfSong"/>
                </article>
                <article className="headerFooter__titleViewAll">
                    <h5>New Releases</h5>
                    <Link to="/">View All</Link>
                </article>
            </div>
            <main className="songMain">
                <SongSetUp image="./images/featured.png" imageDescription="song" title="Old Town Road" author="Billy Ray Cyrus" amount="12 songs"/>
                <SongSetUp image="./images/featured.png" imageDescription="song" title="Old Town Road" author="Billy Ray Cyrus" amount="12 songs"/>
                <SongSetUp image="./images/featured.png" imageDescription="song" title="Old Town Road" author="Billy Ray Cyrus" amount="12 songs"/>
                <SongSetUp image="./images/featured.png" imageDescription="song" title="Old Town Road" author="Billy Ray Cyrus" amount="12 songs"/>
            </main>
            

        </article>
    )
}

export default Albums;