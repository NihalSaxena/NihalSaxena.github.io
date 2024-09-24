import React from "react";
import ExperienceCard from "../Components/ExperienceCard";
import { useParallax } from "react-scroll-parallax";
import { Timeline } from "rsuite";

const Experience = () => {
	const easingcurve = [0.1, 1, 1, 0.1];
	const { ref } = useParallax({
		translateY: [70, -60],
		easing: easingcurve,
	});
	return (
		<div className="Experience">
			{
				// eslint-disable-next-line
				<a className="anchor" id="Experience" />
			}

			<h2 className="experience-title">
				<span className="accent">&#123;</span>E
				<span className="accent">&#125;</span>
				xperience
				<span className="accent">.</span>
			</h2>

			<div className="experiences" ref={ref}>
				<ExperienceCard
					title="Synchrony"
					description="Synchrony is a Fortune 200 financial company that provides consumer financing. At Synchrony I worked on the Product Incubation Team which was tasked with rapidly researching, building, and testing POCs of new products and services."
					collapse={
						<Timeline align="left">
							<Timeline.Item>
								<h4>Project Live (Present)</h4>
								<ul>
									<li>
										Spearheaded the end-to-end development
										of a live commerce financing POC,
										working independently to conceptualize,
										design, and implement innovative
										solutions for Synchrony’s attempt at
										breaking into the $526.72 billion global
										industry.
									</li>
									<li>
										Engaged in direct collaboration with
										high-level executives, including the
										Head of Product Incubation, actively
										challenging existing assumptions and
										proposing alternative approaches,
										resulting in the adoption of novel
										technologies and methodologies in the
										POCs
									</li>
								</ul>
							</Timeline.Item>
							<Timeline.Item>
								<h4>GPT-search (Present)</h4>
								<ul>
									<li>
										Engineered a POC that revolutionized the
										partner brands’ product ecosystem by
										creating a consolidated marketplace,
										enabling users to effortlessly search
										for products using reverse image search
										and GPT-powered technology.
									</li>
								</ul>
							</Timeline.Item>
						</Timeline>
					}
					tags={["Rapid Prototyping", "OpenCV", "GPT"]}
				/>

				<ExperienceCard
					title="Disruption Lab"
					description="Disruption Lab is an academic organization on campus that uses emerging tech to build solutions for clients nationwide. While with Disruption Lab, I have worked on many projects with different teams in a variety of roles to build solutions for external clients."
					collapse={
						<Timeline align="left">
							<Timeline.Item>
								<h4>Technical Lead @ OSF (Present)</h4>
								<ul>
									<li>
										Built a decentralized healthcare data
										exchange platform that leverages
										differential privacy to enable
										researchers to securely query data while
										maintaining privacy and data integrity
									</li>
									<li>
										Acted as scrum master for a team of 5
										SWE's
									</li>
									<li>
										Assigned trainings and exercises to
										ensure SWEs were equipped with the
										necessary knowledge and skills to
										complete the project adeptly and
										punctually
									</li>
									<li>
										Completed project ahead of schedule
										while also adding additional non-scoped
										features.
									</li>
									<li>
										Prioritized SWE engagement and achieved
										a 100% team attendance rate to all
										social and technical events.
									</li>
								</ul>
							</Timeline.Item>
							<Timeline.Item>
								<h4>SWE @ Seed2Sale</h4>
								<ul>
									<li>
										Built a decentralized application to
										house and access Seed 2 Sale tracking
										information for a government agency
									</li>
									<li>
										Used Solidity to build smart contracts
										to handle supply chain logistics
									</li>
									<li>
										Suggested an alteration to delegation of
										task to improve efficiency and complete
										project on time
									</li>
									<li>Followed Agile MethodoloFgy</li>
								</ul>
							</Timeline.Item>
							<Timeline.Item>
								<h4>SWE @ UIUCCollab</h4>
								<ul>
									<li>
										Reviewed website design and proposed UI
										changes
									</li>
									<li>
										Built an intuitive research platform for
										the Office of the Vice-Chancellor of
										Diversity, Equity, & Inclusion
									</li>
									<li>Followed Agile Methodolgy</li>
								</ul>
							</Timeline.Item>
						</Timeline>
					}
					tags={[
						"Leadership",
						"Blockchain",
						"RestAPI",
						"Data Solutions",
						"Agile",
					]}
				/>
				<ExperienceCard
					title="iBioFab"
					description='iBioFab is a startup on campus that aims to leverage computation and robotics to create worlds first "Living Foundry". I worked on various pipelines for complex biological calculations'
					collapse={
						<Timeline align="left">
							<Timeline.Item>
								<h4>CRISPR-COPIES (Present)</h4>
								<ul>
									<li>
										Built a full-stack application to obtain
										genome-wide intergenic sites for
										CRISPR/Cas-facilitated gene integration
									</li>
									<li>
										Used redux to maintain state and error
										check 20+ input parameters ensure input
										validity.
									</li>
									<li>
										Co-Authored a forthcoming publication
										detailing the computation and
										development behind the Crispr-Copies
										tool
									</li>
								</ul>
							</Timeline.Item>

							<Timeline.Item>
								<h4>Site Directed Mutagensis</h4>
								<ul>
									<li>
										Built a full-stack application for
										design of polymerase chain reaction
										(PCR) primers for use in site-directed
										mutagenesis (SDM)
									</li>
									<li>
										Designed an API to generate robotic
										worklists from a SDM PCR Primer library
										created by python scripts taking DNA
										sequences as input.
									</li>
								</ul>
							</Timeline.Item>
						</Timeline>
					}
					tags={["React.js", "Node.js", "Redux", "AWS"]}
				/>
				<ExperienceCard
					title="Aurobindo"
					description="Aurobindo Pharma Ltd. is an Indian multinational pharmaceutical manufacturing company. During my time at Aurobindo, I worked closely with senior managment on multiple warehouse logistic projects for Aurobindo's largest distribution facility"
					collapse={
						<Timeline align="left">
							<Timeline.Item>
								<h4>Warehouse Automation</h4>
								<ul>
									<li>
										Assisted senior managment in the
										planning of a $5.7 million robotic
										automation project
									</li>
									<li>
										Proposed cost-effective changes in order
										to better optimize workflow via
										implementation of time- saving
										quality-of-life changes to the original
										design
									</li>
									<li>
										Identified fatal design errors and
										proposed minimal-cost solutions
									</li>
								</ul>
							</Timeline.Item>
							<Timeline.Item>
								<h4>
									Warehouse KPI Data analysis/visualization
								</h4>
								<ul>
									<li>
										Created and automated data-analysis
										reports regarding labor
										costs/productivity for Aurbindo's
										largest department
									</li>
									<li>
										Created and automated multiple
										dashboards for various KPI's
									</li>
									<li>
										Automated the collection, cleaning, and
										analysis of data.
									</li>
									<li>
										Identified potential bottlenecks in the
										warehouse's inbound/outbound processes
									</li>
									<li>
										Suggested changes in operations to
										better utilize working hours and cut
										down on overtime costs
									</li>
								</ul>
							</Timeline.Item>
						</Timeline>
					}
					tags={[
						"SQL",
						"VBA",
						"Excel",
						"Data Modeling",
						"Data Visualization",
					]}
				/>
			</div>
		</div>
	);
};

export default Experience;
