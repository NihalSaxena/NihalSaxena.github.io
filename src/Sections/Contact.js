import React from "react";
import {
	SlSocialInstagram,
	SlSocialLinkedin,
	SlSocialGithub,
} from "react-icons/sl";
// import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Contact = () => {
	return (
		<div className="Contact-w-border">
			{
				// eslint-disable-next-line
				<a className="anchor" id="Contact" />
			}
			<svg
				className="wave"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100 10"
				fill="currentColor"
				preserveAspectRatio="none"
			>
				<polygon points="100 0 100 10 0 10" />
			</svg>
			<div className="Contact">
				<h2 className="contact-title">Contact</h2>
				<div className="contact-content">
					<div className="contact-email">
						<h3 className="contact-subheader">Emails:</h3>
						<p>mananjain0416@gmail.com</p>
						<p>mananj2@illinois.edu</p>
					</div>

					<div className="contact-phone">
						<h3 className="contact-subheader">Phone:</h3>
						<p>(732) 397-2654</p>
					</div>
					<div className="contact-socials">
						<h3 className="contact-subheader">Socials:</h3>
						<a
							className="contact-social-media-icon"
							href="https://github.com/Bananamonkey011"
						>
							<SlSocialGithub />
						</a>
						<a
							className="contact-social-media-icon"
							href="https://www.instagram.com/why_is_manan/"
						>
							<SlSocialInstagram />
						</a>
						<a
							className="contact-social-media-icon"
							href="https://www.linkedin.com/in/manan-jain0416/"
						>
							<SlSocialLinkedin />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
