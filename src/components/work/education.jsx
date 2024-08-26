import React from "react";
import "../../css/style.css";
import "../../css/work/education.css";



function Education() {

	return (
		<div className="about">
			<div className="college">
			<div className="psu">
			<h2 className="college_name">Portland State university</h2>
			<h3>Grad Prep in Computer Science :</h3>
			<div className="details">
				<p>06/2021 - 12/2022</p>
				<p>GPA: 3.62</p>
				<p>Data Structure, Programming Systems, Computer Systems and Programming, Operationg Systems</p>
			</div>
			<h3>Master in Computer Science :</h3>
			<div className="details">
				<p>01/2023 - 06/2024</p>
				<p>GPA: 3.74</p>
				<p>Intro to web developement, Frontend Web Tech, Full Stack, Database Management Systems, Software Engineering</p>
			</div>
			</div>
			<div className="sppu">
			<h2 className="college_name">Savitribai Phule Pune University</h2>
			<h3>Master of Science in Electronics :</h3>
			<div className="details">
				<p>2014 - 2016</p>
				<p>Equivalent GPA: 4.0 </p>
			</div>
			</div>
			<div className="bamu">			
			<h2 className="college_name">Babasaheb Ambedkar Marathwada University</h2>
			<h3>Bachelor of Science in Electronics :</h3>
			<div className="details">
				<p>2011 - 2014</p>
				<p>Equivalent GPA: 4.0</p>
			</div>		
			</div>	
			</div>
		</div>
	);
}

export default Education;
