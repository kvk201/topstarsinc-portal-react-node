import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = () => {
    return(
        <nav className="navbar">
            <h1>Topstars portal</h1>
            <div className="links">
                <Link to="/">All Companies</Link>
                <Link to="/create" style={{}}>Add company</Link></div>
        </nav>
    );
}
export default NavBar;