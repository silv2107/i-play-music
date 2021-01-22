import React from "react";
import CategoryField from "../components/CategoryField";
import Header from "../components/Header";
import MainHeader from "../components/MainHeader";

function Categories(){
    return (
        <>
            <Header>Categories</Header>
            <MainHeader>Categories</MainHeader>
            <main className="categoryMain">
                <CategoryField title="Alternative" theBackgroundColor="red"/>
                <CategoryField title="Alternative" theBackgroundColor="yellow"/> 
                <CategoryField title="Alternative" theBackgroundColor="green"/> 
                <CategoryField title="Alternative" theBackgroundColor="pink"/> 
                <CategoryField title="Alternative" theBackgroundColor="blue"/> 
                <CategoryField title="Alternative" theBackgroundColor="orange"/> 
            </main>
            
        </>
    )
}

export default Categories;