import React from "react";
import FeaturedMain from "../components/FeaturedMain";
import Header from "../components/Header";
import MainHeader from "../components/MainHeader";

function Featured(){
    return (
        <>
            <Header>Featured</Header>
            <MainHeader theColor="transparent">Featured</MainHeader>
            <FeaturedMain/>
        </>
    )
}

export default Featured;