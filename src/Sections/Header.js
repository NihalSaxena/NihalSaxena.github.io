import React, { useEffect, useState } from "react";
import {
	SlSocialInstagram,
	SlSocialLinkedin,
	SlSocialGithub,
} from "react-icons/sl";
import { AiOutlineMenu } from "react-icons/ai";
import { Fade } from "react-reveal";
// import HueSlider from "../Components/HueSlider";

const Header = () => {
	let width = window.screen.width;
	if (width < 700) {
		// return <MobileHeader />;
		return <DesktopHeader />;
	} else {
		return <DesktopHeader />;
	}
};

const DesktopHeader = () => {
	return (
		<div className="Header">
			<ul className="header-nav-bar">
				<h2 className="header-logo">
					<a href="#top">
						NS.
					</a>
				</h2>

				<a href="#Landing">
					<button className="header-nav-item fade-in">Home</button>
				</a>

				<a href="#Experience">
					<button className="header-nav-item fade-in">Experience</button>
				</a>

				<a href="#Projects">
					<button className="header-nav-item fade-in">Projects</button>
				</a>

				<a href="#Contact">
					<button className="header-nav-item fade-in">Contact</button>
				</a>
			</ul>
		</div>
	);
};

// const MobileHeader = () => {
// 	const [showMenu, setShowMenu] = useState(false);

// 	useEffect(() => {
// 		if (showMenu) {
// 			document
// 				.querySelector("body")
// 				.style.setProperty("overflow-y", "hidden");
// 			document.querySelector("body").style.setProperty("height", "100vh");
// 			document
// 				.querySelector(".mobile-header-menu-container")
// 				.style.setProperty("left", "0%");
// 			document
// 				.querySelector(".mobile-header-menu-btn")
// 				.style.setProperty("transform", "rotateZ(90deg)");
// 		} else {
// 			document
// 				.querySelector("body")
// 				.style.setProperty("overflow-y", "visible");
// 			document.querySelector("body").style.setProperty("height", "auto");
// 			document
// 				.querySelector(".mobile-header-menu-container")
// 				.style.setProperty("left", "100%");
// 			document
// 				.querySelector(".mobile-header-menu-btn")
// 				.style.setProperty("transform", "rotateZ(0deg)");
// 		}
// 	}, [showMenu]);

// 	const onClick = () => {
// 		setShowMenu(false);
// 	};
// 	return (
// 		<div className="MobileHeader">
// 			<button
// 				className="mobile-header-menu-btn"
// 				onClick={() => setShowMenu(!showMenu)}
// 			>
// 				<AiOutlineMenu />
// 			</button>
// 			<div className="mobile-header-menu-container">
// 				<ul className="mobile-header-nav-bar">
// 					<Fade left cascade>
// 						<h2 className="header-logo">
// 							<a href="#top">
// 								<span className="accent">&#123;</span>M
// 								<span className="accent">&#125;</span>
// 								anan
// 								<span className="accent">.</span>
// 							</a>
// 						</h2>
// 						<a href="#About">
// 							<button
// 								onClick={onClick}
// 								className="mobile-header-nav-item"
// 							>
// 								About
// 							</button>
// 						</a>

// 						<a href="#Experience">
// 							<button
// 								onClick={onClick}
// 								className="mobile-header-nav-item"
// 							>
// 								Experience
// 							</button>
// 						</a>

// 						<a href="#Projects">
// 							<button
// 								onClick={onClick}
// 								className="mobile-header-nav-item"
// 							>
// 								Projects
// 							</button>
// 						</a>

// 						<a href="#Contact">
// 							<button
// 								onClick={onClick}
// 								className="mobile-header-nav-item"
// 							>
// 								Contact
// 							</button>
// 						</a>
// 						<div className="mobile-header-socials-container">
// 							<a
// 								className="social-media-icon"
// 								href="https://github.com/Bananamonkey011"
// 							>
// 								<SlSocialGithub />
// 							</a>
// 							<a
// 								className="social-media-icon"
// 								href="https://www.instagram.com/why_is_manan/"
// 							>
// 								<SlSocialInstagram />
// 							</a>
// 							<a
// 								className="social-media-icon"
// 								href="https://www.linkedin.com/in/manan-jain0416/"
// 							>
// 								<SlSocialLinkedin />
// 							</a>
// 						</div>
// 						{/* <HueSlider /> */}
// 					</Fade>
// 				</ul>
// 			</div>
// 		</div>
// 	);
// };

export default Header;
