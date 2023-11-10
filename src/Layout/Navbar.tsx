import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
    return (
        <nav className="nav">
            <div className="nav__container">
                <div className="nav__left">
                    <p className="nav__logo">CE Tracker</p>
                </div>
                <div className="nav__right">
                    <ul className="nav__list">
                        <li>
                            <Link to="login" className="btn">
                                Log in
                            </Link>
                        </li>
                        <li>
                            <Link to="signup" className="btn btn--primary">
                                Sign up
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
