import React from "react";
import "./Header.scss";

function Header({children, theColor,brightness, symbolColor, theBackground, theModifier}){
    return(
        <article className="header" style={{backgroundColor:`${theBackground}`}}>
            <button onClick={()=> window.history.back()} className="header__button" style={{color:symbolColor}}>
                &#60;
            </button>
            <h4 className="header__title" style={{color:theColor}}>{children}</h4>
            <div  style={theModifier} className="header__search"><img style={{filter:brightness}} src="./icons/search.svg" alt="search icon"/></div>
        </article>
    )
}

export default Header;