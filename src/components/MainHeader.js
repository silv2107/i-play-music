import React from "react";
import "./MainHeader.scss";

function MainHeader({children}){
    return(
        <article className="mainHeader">
            <h4 className="mainHeader__title">{children}</h4>
        </article>
    )
}

export default MainHeader;