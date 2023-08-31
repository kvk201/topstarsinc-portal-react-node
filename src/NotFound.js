import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>sorry not found</h2>
            <Link to='/'>Back to homepage</Link>
        </div>
     );
}
 
export default NotFound;