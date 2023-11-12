import "./Navbar.scss";
import LinkButton from "../Components/LinkButton";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="nav">
            <div className="nav__container">
                <div className="nav__left">
                    <Link to="/" className="nav__logo">
                        CE Tracker
                    </Link>
                </div>
                <div className="nav__right">
                    <ul className="nav__list">
                        <li>
                            <LinkButton to="login">Log in</LinkButton>
                        </li>
                        <li>
                            <LinkButton to="signup" variation="primary">
                                Sign up
                            </LinkButton>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
