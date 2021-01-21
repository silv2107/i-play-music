import React from "react";
import CategoryField from "./CategoryField";
import "./CategoryMain.scss";

function CategoryMain(){
    return (
        <main className="categoryMain">
           <CategoryField title="Alternative" theBackgroundColor="red"/> 
           <CategoryField title="Alternative" theBackgroundColor="yellow"/> 
           <CategoryField title="Alternative" theBackgroundColor="green"/> 
           <CategoryField title="Alternative" theBackgroundColor="pink"/> 
           <CategoryField title="Alternative" theBackgroundColor="blue"/> 
           <CategoryField title="Alternative" theBackgroundColor="orange"/> 


        </main>
    )
}

export default CategoryMain;