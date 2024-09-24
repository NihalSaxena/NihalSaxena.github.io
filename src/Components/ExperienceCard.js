import React from "react";

const ExperienceCard = ({
	title = "empty card",
	description = "this is a short description for an empty card",
	collapse = "this is a long description for an empty card.this is a long description for an empty card.this is a long description for an empty card.this is a long description for an empty card.this is a long description for an empty card.this is a long description for an empty card.this is a long description for an empty card.this is a long description for an empty card.this is a long description for an empty card.this is a long description for an empty card.",
	tags = ["empty tag", "empty tag", "empty tag", "empty tag", "empty tag"],
}) => {
	return (
		<div className="ExperienceCard">
			<h4 className="experience-card-title">{title}</h4>
			<p className="experience-card-description">{description}</p>
			<div className="experience-card-collapse">{collapse}</div>
			<ul className="experience-card-tags">
				{tags.map((tag, index) => {
					return (
						<li key={index} className="experience-card-tag">
							<span className="experience-card-tag-content">{tag}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ExperienceCard;
