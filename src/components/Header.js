import React from "react";
import "./Header.scss";

function Header({children}){
    return(
        <article className="header">
            <button className="header__button"><img src="./icons/arrowBack.svg" alt="arrow back icon"/></button>
            <h4 className="header__title">{children}</h4>
            <div className="header__search"><img src="./icons/search.svg" alt="search icon"/></div>
        </article>
    )
}

export default Header;