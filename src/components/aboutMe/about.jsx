import "../../css/style.css";
import "../../css/aboutMe/about.css";


function About() {
	return (
		<>
			<div className="about">				
				<div className="text">
					<div className="about_table">
					<img
						className="image"
						src="shruti.jpeg"
						alt="shruti_photo"
						height="300"
						width="200"
					/>
					<h2 className="myname">Shruti Deshmukh</h2>
					<h3 className="status">
						MS CS graduate Student at Portland State University (Software
						Engineering)
					</h3>
					</div>
					<div className="para" id="para">
						<p>
							My educational journey commenced in India, where I earned both my
							Bachelor's and Master's degrees in Electronics from reputable
							universities. In 2020, due to personal reasons, I relocated to the
							USA. To bridge the gap between my electronics background and my
							newfound interest in computer science, I enrolled in the grad prep
							track at Portland State University. Successfully completing the
							program with the required grades, I gained admission to pursue my
							Master's degree at the same institution, with an expected
							graduation in 2024.
						</p>
						<p>
							As I delved into various courses, I discovered a keen interest in
							web development. Aligning my studies with my passion, I started
							taking relevant courses to nurture my skills in this domain. My
							goal is to become a full-stack developer, and the courses I've
							chosen reflect this aspiration. The journey through my master's
							program has been a blend of enjoyment, challenges, and a
							persistent commitment to hard work. I am excited about the
							opportunities that lie ahead as I work towards my career goals in
							web development.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
