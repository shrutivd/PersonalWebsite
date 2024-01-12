import React from "react";
import "../../css/style.css";
import "../../css/work/experience.css"

function Experience() {
	return (
		<div className="about">
			<div className="company">
				<div className="widmlabs">
					<h2 className="role">Software Test Engineer</h2>
					<h2>Wisdmlabs</h2>
					<h3>Responsibilites:</h3>
					<p>Setup a Linux-based test bench for software testing.</p>
					<p>
						Leveraged various software testing paradigms and managed support
						request.
					</p>
				</div>
				<div className="colossus">
					<h2 className="role">Quality Analyst</h2>
					<h2>Colossus Nexus Pvt. Ltd.</h2>
					<h3>Responsibilites:</h3>
					<p>
						Drafted and executed test plans, identified, and logged defects.
					</p>
					<p>
						Acted as a subject matter expert for major customers, provided
						operations training, led support meetings, and managed support
						tickets and defect resolutions.
					</p>
				</div>
				<div className="seed">
					<h2 className="role">Software Tester</h2>
					<h2>Seed Management Services Pvt. Ltd.</h2>
					<h3>Responsibilites:</h3>
					<p>
						Conducted exploratory testing, compatibility testing, UI testing and
						database testing.
					</p>
					<p>
						Documented and executed test plans for Sales Module and Assess tax
						Module, logged defects, and followed through until resolved.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Experience;
