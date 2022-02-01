import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="c__navbar">
            <div className="c__navbar--logo">
                <img src='/logo192.png' alt="img" />
            </div>
            <div className="c__navbar--menu">
                <div className="c__navbar--menu__element">
                    <Link to="/"><p>Home</p></Link>
                </div>
                <div className="c__navbar--menu__element">
                    <Link to="/posts"><p>Posts</p></Link>
                </div>
                <div className="c__navbar--menu__element">
                    <Link to="/about"><p>About</p></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
