import React from "react";
import {
	SlSocialInstagram,
	SlSocialLinkedin,
	SlSocialGithub,
} from "react-icons/sl";
import { Fade } from "react-reveal";

const SocialMedia = () => {
	return (
		<div className="svg-container">
			<Fade left cascade>
				<a className="social-media-icon" href="https://github.com/NihalSaxena">
					<SlSocialGithub />
				</a>
				<a className="social-media-icon" href="https://www.linkedin.com/in/Nihal-Saxena/">
					<SlSocialLinkedin />
				</a>
			</Fade>
		</div>
	);
};

export default SocialMedia;
