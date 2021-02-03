import React from "react";
import { Link } from "@reach/router";
import "./Navigation.scss";


function Navigation(){
    return(
        <nav className="navWrapper">
                <ul className="navigation">
                    <li className="navigation__item">
                        <Link to="/albums" className="primaryNavigation__link"><img  src="./icons/albums.svg" alt="albums icon"/></Link>
                    </li>
                    <li className="navigation__item">
                        <Link to="/playlists" className="primaryNavigation__link"><img src="./icons/playlists.svg" alt="playlists icon"/></Link>
                    </li>
                    <li className="navigation__item">
                        <Link to="/featured" className="primaryNavigation__link"><div><img src="./icons/featured.svg" alt="featured icon"/></div></Link>
                    </li>
                    <li className="navigation__item">
                        <button className="navigation__button"><img src="./icons/colorTheme.svg" alt="colorTheme icon"/></button>
                    </li>
                    <li className="navigation__item">
                        <Link to="/categories" className="primaryNavigation__link"><img className="navigation__category"  src="./icons/category.svg" alt="category icon"/></Link>
                    </li>
                    
                </ul>
            </nav>
    )
}

export default Navigation;