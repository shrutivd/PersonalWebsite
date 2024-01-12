import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
     <nav className="navbar">
			<ul className="nav-list">
				<li className="item">
					<Link className="flex-item"  to="/about">About</Link>
				</li>
				<li className="item">
					<Link className="flex-item" to="/project">Project</Link>
				</li>
				<li className="item">
					<Link className="flex-item" to="/education">Education</Link>
				</li>
				<li className="item">
					<Link className="flex-item" to="/experience">Experience</Link>
				</li>
				<li className="item">
					<Link className="flex-item" to="/skills">Skills</Link>
				</li>				
				<li className="item">
					<Link className="flex-item" to="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
    </>
  )
}

export default Navbar