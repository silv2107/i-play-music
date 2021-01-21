import React from "react";
import "./CategoryMain.scss";

function CategoryField({title, theBackgroundColor}){
    return (
        <details className="accordian">
            <summary className="accordian__categoryBox" style={{backgroundColor:`${theBackgroundColor}`}}>
                <h5>{title}</h5>
                <p>&#8226; &#8226; &#8226;</p>
            </summary>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </details>
       
    )
}

export default CategoryField;