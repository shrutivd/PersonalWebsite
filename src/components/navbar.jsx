import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./hamburger";

function Navbar() {
  const [hamburgerVisible, setHamburgerVisible] = useState(false); // Set initial state to false

  function manageHamburger() {
    setHamburgerVisible(!hamburgerVisible); // Toggle visibility on click
  }

  return (
    <>
      <nav className="navbar">
        <div className="hamburger" onClick={manageHamburger}>
          <Hamburger />
        </div>
        <ul className={`nav-list ${hamburgerVisible ? "show" : "hide"}`}> {/* Add dynamic class */}
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
      </nav>
    </>
  );
}

export default Navbar;
