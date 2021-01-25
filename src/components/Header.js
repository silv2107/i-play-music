import React from "react";
import "./Header.scss";

function Header({children, theColor,brightness, symbolColor, theBackground}){
    return(
        <article className="header" style={{backgroundColor:`${theBackground}`}}>
            <button className="header__button" style={{color:symbolColor}}>
                {/* <img src="./icons/arrowBack.svg" alt="arrow back icon"/> */}
                &#60;
            </button>
            <h4 className="header__title" style={{color:theColor}}>{children}</h4>
            <div className="header__search"><img style={{filter:brightness}} src="./icons/search.svg" alt="search icon"/></div>
        </article>
    )
}

export default Header;