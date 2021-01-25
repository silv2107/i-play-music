import React from "react";
import Header from "../components/Header";
import MainHeader from "../components/MainHeader";
import SliderImg from "../components/Slider";
import "./Albums.scss";
import "./Playlists.scss";
import Image from "./sound-wave.png";
import SongSetUp from "../components/SongSetUp";

function Playlists(){
    var myStyleContainer = {
        background:"linear-gradient(90deg,#EE0979 0%, #FF6A00 45%)",
        borderRadius:"50%",
        width:"25px",
        height:"25px"
    }

    var myStyleImg = {
        width:"7px",
        height:"7px"
    }

    var myGridSize = {
        gridTemplateColumns:"15% 55% 35%"
    }
    return (
        <article style={{backgroundImage:`url(${Image})`}} className="albumsWrapper playlistWrapper">
            <Header theColor={"white"} symbolColor="white" brightness="brightness(100)">Playlists</Header>
            <MainHeader theColor="white">Playlists</MainHeader>
            <section className="headerFooter__slider">
                <SliderImg image="./images/featured.png" imageDescription="nameOfSong"/>
                <SliderImg image="./images/featured1.png" imageDescription="nameOfSong"/>
                <SliderImg image="./images/featured.png" imageDescription="nameOfSong"/>
            </section>
            <section className="titleFooter">
                <h5 className="titleFooter__title">Top 50 Rock Ballads</h5>
            </section>
            <main className="songMain songPlaylist">
                <SongSetUp gridSize={myGridSize} styleContainer={myStyleContainer} styleImg={myStyleImg} image="./icons/playIcon.svg" imageDescription="song" title="Old Town Road" author="Billy Ray Cyrus" amount="3 : 12"/>
                <SongSetUp gridSize={myGridSize} styleContainer={myStyleContainer} styleImg={myStyleImg} image="./icons/playIcon.svg" imageDescription="song" title="Old Town Road" author="Billy Ray Cyrus" amount="3 : 12"/>
                <SongSetUp gridSize={myGridSize} styleContainer={myStyleContainer} styleImg={myStyleImg} image="./icons/playIcon.svg" imageDescription="song" title="Old Town Road" author="Billy Ray Cyrus" amount="3 : 12"/>
                <SongSetUp gridSize={myGridSize} styleContainer={myStyleContainer} styleImg={myStyleImg} image="./icons/playIcon.svg" imageDescription="song" title="Old Town Road" author="Billy Ray Cyrus" amount="3 : 12"/>
                <SongSetUp gridSize={myGridSize} styleContainer={myStyleContainer} styleImg={myStyleImg} image="./icons/playIcon.svg" imageDescription="song" title="Old Town Road" author="Billy Ray Cyrus" amount="3 : 12"/>
                <SongSetUp gridSize={myGridSize} styleContainer={myStyleContainer} styleImg={myStyleImg} image="./icons/playIcon.svg" imageDescription="song" title="Old Town Road" author="Billy Ray Cyrus" amount="3 : 12"/>
                <SongSetUp gridSize={myGridSize} styleContainer={myStyleContainer} styleImg={myStyleImg} image="./icons/playIcon.svg" imageDescription="song" title="Old Town Road" author="Billy Ray Cyrus" amount="3 : 12"/>
            </main>
            <footer className="playlistFooter">
                <button className="playlistFooter__button">
                    LISTEN ALL
                </button>
            </footer>
        </article>

    )
}

export default Playlists;