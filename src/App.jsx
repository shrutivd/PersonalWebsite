import "./App.css";
import { Route, Routes } from "react-router-dom";

import About from "./components/aboutMe/about";
import Navbar from "./components/navbar";
import Project from "./components/courseProjects/project";
import Education from "./components/work/education";
import Experience from "./components/work/experience";
import Contact from "./components/contactMe/contact";
import Skills from "./components/skills/skills";
import Hamburger from "./components/hamburger";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<About />} />
				<Route path="/PersonalWebsite/about" element={<About />} />
				<Route path="/PersonalWebsite/education" element={<Education />} />
				<Route path="/PersonalWebsite/experience" element={<Experience />} />
				<Route path="/PersonalWebsite/project" element={<Project />} />
				<Route path="/PersonalWebsite/skills" element={<Skills />} />
				<Route path="/PersonalWebsite/contact" element={<Contact />} />
				<Route path="/PersonalWebsite/contact" element={<Hamburger />} />
			</Routes>
		</>
	);
}

export default App;
