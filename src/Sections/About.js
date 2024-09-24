import React from "react";
import { useParallax } from "react-scroll-parallax";

const About = () => {
	const easingcurve = [0.1, 1, 1, 0.1];
	const { ref: parallaxLeft } = useParallax({
		translateX: [-100, 85],
		opacity: [2, 0],
		easing: easingcurve,
	});

	const { ref: parallaxRight } = useParallax({
		translateX: [100, -85],
		opacity: [2, 0],
		easing: easingcurve,
	});

	return (
		<>
			{
				// eslint-disable-next-line
				<a className="anchor" id="About" />
			}

			<div className="About">
				<div ref={parallaxLeft}>
					<h2 className="about-introduction">
						<span className="accent2">&#123;</span>A
						<span className="accent2">&#125; </span>
						Little More About Me
						<span className="accent2">:</span>
					</h2>
				</div>
				<hr className="about-break" />
				<div ref={parallaxRight}>
					<p className="about-description">
						Hi! My name is Manan and I’m currently pursuing a B.S. in Computer-Science + Economics and a Minor in Math at the University of Illinois Urbana-Champaign (UIUC). I have experience in a variety of CS sub-disciplines such as Full-Stack Development, I love exploring new industries and learning how to apply my skills to them. However, I am currently interested in gaining some more experience in fintech.
						<br />
						<br />
						I've worked with people from various backgrounds and am always eager to meet someone new. Feel free to reach out to me to talk about anything!
						<br />
						<br />
						In my free time I love cooking, playing video games, and hanging out with friends. I am always down to grab a bite or go for a walk!
					</p>
				</div>
			</div>
		</>
	);
};

export default About;
