import React from "react";
import "./MainHeader.scss";

function MainHeader({ children, theColor }) {
	return (

		<article className="mainHeader">
			<h4 className="mainHeader__title" style={{ WebkitTextFillColor: theColor }}>
				{children}
			</h4>
		</article>
	);
}

export default MainHeader;
