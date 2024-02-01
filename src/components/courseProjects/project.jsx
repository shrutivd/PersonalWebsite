import "../../css/style.css";
import "../../css/courseProjects/project.css";

function Project() {
	return (
		<>
			<div className="about">
				<div className="projects">
					<h2 className="project">Stock Market webpage application:</h2>
					<p className="para_1">
						Collaborated within a team to develop a centralized webpage for
						stock market data, encompassing components such as "top gainers,"
						"top losers," "commodities," "currencies," "bonds," and "news."
						Integrated APIs from alpha vantage and other sources to retrieve
						essential data, managing data quality in instances of non-ideal data
						states. Employed pull requests (PR) for transparent communication of
						updates and corrections, ensuring a collaborative workflow with team
						members' approval required before merging changes into the main
						codebase.
						
						<a className="know" href="https://github.com/halltim91/stonks">
							<i className="fa fa-github"></i> Go to github
						</a>
					</p>

					<h2 className="project">Potluck Planner:</h2>

					<p className="para_1">
						Designed and developed a full stack “Potluck Planner” website using
						Typescript, hosted on VMware. Implemented secure user authentication
						and login functionality using Firebase. Created a user-friendly
						interface for creating new potluck events with host and guest roles
						and a microservice to handle food recommendations. Developed a
						role-based authorization system to manage edit and delete
						permissions for both new potluck events and menu items changes.
						Leveraged Tailwind CSS and DaisyUI to enhance the website's design
						and aesthetics, providing a modern and visually appealing user
						interface. Learned and implemented CI/CD process using Github.
						<a
							className="know"
							href="https://github.com/Yashaswi0506/Potluck-Planner"
						>
							<i className="fa fa-github"></i> Go to github
						</a>
					</p>

					<h2 className="projec">Web Development Project:</h2>

					<p className="para_1">
						Created a personal resume website showcasing photo and introduction,
						featuring tabs for contact information, Experience & Education, and
						Projects. Leveraged CSS, HTML, and JavaScript to develop an engaging
						and interactive user interface. Designed responsive layouts for
						seamless browsing across devices, ensuring a user-friendly
						experience.
						<a className="know" href="https://github.com/shrutivd/Web_Dev_Project">
							<i className="fa fa-github"></i> Go to github
						</a>
					</p>

					<h2 className="project">
						Cloud Run Application with API Integration:
					</h2>

					<p className="para_1">
						Built an application to show recommended places to visit by search
						query. Developed a containerized Cloud Run application and
						integrated google places API to get the ratings of the place and
						leveraged static maps to show the approximate location.
					</p>

					<h2 className="project">Voice Assistant application:</h2>

					<p className="para_1">
						Developed a final project, “Movie Guide”, as an Alexa Skill, showing
						proficiency in voice technology. Programmed the project using
						Node.js, highlighting technical skills in backend development.
						Successfully integrated APIs to source and display relevant data,
						demonstrating practical API integration skills. Gained valuable
						experience in Dialogflow through continuous application during
						coursework, enhancing conversational interface aptitude.
					</p>

					<h2 className="project">Internet Relay Chat:</h2>

					<p className="para_1">
						Developed a robust client-server bidirectional communication
						application in Java. Leveraged socket connections with TCP/IP
						protocol and multithreading to ensure efficient, reliable, and
						concurrent communication. Implemented features liked, personal
						messaging, broadcast messaging, login/logout notification, and
						encrypted messaging.
						<a className="know" href="https://github.com/shrutivd/InternetRelayChat">
							<i className="fa fa-github"></i> Go to github
						</a>
					</p>

					<h2 className="project">DBMS project:</h2>

					<p className="para_1">
						Designed and implemented a car database using PostgreSQL, optimizing
						data organization by segregating information into multiple tables
						for improved readability and data integrity. Developed SQL queries
						to retrieve specific car information efficiently. Created a seamless
						connection to database enabling, smooth data retrieval and
						visualization using python and matplotlib and documented it in
						jupyter notebook.
						<a className="know" href="https://github.com/shrutivd/DBMS-project">
							<i className="fa fa-github"></i> Go to github
						</a>
					</p>
				</div>
			</div>
		</>
	);
}

export default Project;
