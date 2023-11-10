import { Link } from "react-router-dom";
import "./Navbar.scss";
import Button from "../Components/Button";

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
                            <Link to="login">
                                <Button>Log in</Button>
                            </Link>
                        </li>
                        <li>
                            <Link to="signup">
                                <Button variation="primary">Sign up</Button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
