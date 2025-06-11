import { Link } from "react-router-dom";
import "../css/Navbar.css"

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Weldy</Link>
        </div>
        <div className="navbar-links">
        
            {/* <Link to="https://www.imdb.com/chart/top/" className="nav-link">Official Site</Link> */}
        </div>
    </nav>
}

export default NavBar