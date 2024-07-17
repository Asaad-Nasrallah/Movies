import { Link } from "react-router-dom";
import "./NavbarStyle.css"
function Navbar() {
    return ( 
        <>
       <nav className="nav d-flex pt-3 px-5 justify-content-between bg-dark">
        <p className="nav-logo">
          Movies <i className="fa-solid fa-film"></i>
        </p>
        
        <ul className="d-flex gap-4 nav-list">
          <li>
            <Link to="/" className="nav-links"> Home</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-links"> Contact</Link>
          </li>
        </ul>
       </nav>
        </>
     );
}

export default Navbar;