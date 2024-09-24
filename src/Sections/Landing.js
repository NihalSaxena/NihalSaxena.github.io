import React, { useEffect } from "react";
// import { Fade } from "react-reveal";
import { Parallax } from "react-scroll-parallax";
import WebPortrait from "../Components/WebPortrait";
import {
	SlEnvolope,
	SlSocialLinkedin,
	SlSocialGithub,
} from "react-icons/sl";
// import SocialMedia from "../Components/SocialMedia";

const Landing = () => {

	useEffect(() => {
		const typingElement = document.querySelector(".landing-role.anim-typewriter");
		typingElement.addEventListener("animationend", () => {
			typingElement.classList.add("anim-typewriter-done");
		});
	}, []);

	return (
		<>
			{
				// eslint-disable-next-line
				<a className="anchor" id="Landing" />
			}
			<div className="Landing" font-montserrat>
				<Parallax className="landing-text-parallax-wrapper" speed={30}>
					<div className="landing-text pt-14">
						<h3 style={{ color: "black" }} className="landing-introduction fly-in-left" >
							👋  I'm Nihal
						</h3>

						<h3 style={{ textAlign: "center" }} className="landing-role anim-typewriter">
							Prod Engineer • Tech Leader • Startup Enthusiast
						</h3>
						<h4 style={{ textAlign: "left" }} className="landing-about-intro fly-in-bottom">
							What I'm Up to Currently:
						</h4>
						<h4 style={{ textAlign: "left" }} className="landing-about fly-in-bottom">
							🎓 MCS, BS in Computer Science @ UIUC
						</h4>
						<h4 style={{ textAlign: "left" }} className="landing-about fly-in-bottom">
							🧠 SWE Intern @ Synchron
						</h4>
						<h4 style={{ textAlign: "left" }} className="landing-about fly-in-bottom">
							🌐 Director @ Disruption Lab
						</h4>
						<h4 style={{ textAlign: "left" }} className="landing-about fly-in-bottom">
							🚀 President @ Founders - Illinois Entrepreneurs
						</h4>
					</div>
				</Parallax>

				<Parallax speed={20}>
					<WebPortrait />


					<h4 className="contact-socials">
						<a className="contact-social-media-icon" href="nihal.saxena25@gmail.com">
							<SlEnvolope />
						</a>
						<a className="contact-social-media-icon" href="https://www.linkedin.com/in/nihal-saxena/">
							<SlSocialLinkedin />
						</a>
						<a className="contact-social-media-icon" href="https://github.com/NihalSaxena" >
							<SlSocialGithub />
						</a>
					</h4>
				</Parallax>
			</div>
		</>
	);
};

export default Landing;
