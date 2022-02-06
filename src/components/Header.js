import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <div className="logo">
                Ivan Photography
            </div>
            <input type="checkbox" id="click" />
                <label htmlFor="click" className="menu-btn">
                    <i className="fas fa-bars"></i>
                </label>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
        </nav>
    );
};

export default Header;