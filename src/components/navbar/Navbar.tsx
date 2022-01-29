import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/posts">Posts</Link>
            </div>
            <div>
                <Link to="/about">About</Link>
            </div>
        </div>
    );
};

export default Navbar;
