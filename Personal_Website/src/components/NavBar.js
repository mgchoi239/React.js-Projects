import { Link } from "react-router-dom";
import "./NavBar.css";
import "./Image.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-namelogo">
          <Link to="/" className="navbar-logo">
            Min Goo Choi
            <img
              className="photo"
              src="/images/goldenbear.jpg"
              alt="/images/goldenbear.jpg"
            />
          </Link>
        </div>
      </nav>
      <p className="intro-text">
        A Matcha Fanatic and an aspiring Software Developer
      </p>
      <nav className="navbar-container">
        <div>
          <ul className="nav-menu active">
            <li className="nav-item">
              <Link to="/" className="nav-links">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/mile_stones" className="nav-links">
                Mile Stones
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/readings" className="nav-links">
                Readings
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/thoughtsthatcomealong" className="nav-links">
                TTCA
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
