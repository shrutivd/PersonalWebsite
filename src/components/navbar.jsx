import { Link } from "react-router-dom";
import Hamburger from "./hamburger";

function Navbar() {
	return (
		<>
			<nav className="navbar">
				<ul className="nav-list">
					<li className="item">
						<Link className="flex-item" to="/PersonalWebsite/about">
							About
						</Link>
					</li>

					<li className="item">
						<Link className="flex-item" to="/PersonalWebsite/education">
							Education
						</Link>
					</li>
					<li className="item">
						<Link className="flex-item" to="/PersonalWebsite/experience">
							Experience
						</Link>
					</li>
					<li className="item">
						<Link className="flex-item" to="/PersonalWebsite/project">
							Project
						</Link>
					</li>
					<li className="item">
						<Link className="flex-item" to="/PersonalWebsite/skills">
							Skills
						</Link>
					</li>
					<li className="item">
						<Link className="flex-item" to="/PersonalWebsite/contact">
							Contact
						</Link>
					</li>
				</ul>
				
					<div className="hamburger">
						<Hamburger />
					</div>
				
			</nav>
		</>
	);
}

export default Navbar;
