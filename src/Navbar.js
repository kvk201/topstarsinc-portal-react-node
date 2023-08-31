import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = () => {
    return(
        <nav className="navbar">
            <h1>Topstars portal</h1>
            <div className="links">
                <Link to="/">All Entries</Link>
                <Link to="/create" style={{}}>Create New Entry</Link></div>
        </nav>
    );
}
export default NavBar;