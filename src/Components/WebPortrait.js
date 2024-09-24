import React from "react";
import Portrait from "../Assets/PortraitImage.png";
// import WhiteBG from "../Assets/WhiteBG.svg";

const WebPortrait = () => {
	return (
		<div className="svg-container">
			<img className="landing-portrait" src={Portrait} alt="portrait" />
		</div>
	);
};

export default WebPortrait;
