import { Link } from "react-router-dom";
import LinkButton from "../Components/LinkButton";
import Logo from "../Components/Logo";
import "./Navbar.scss";

export default function Navbar() {
    return (
        <nav className="nav">
            <div className="nav__container">
                <div className="nav__left">
                    <Link to="/" className="nav__logo">
                        <Logo />
                    </Link>
                </div>
                <div className="nav__right">
                    <ul className="nav__list">
                        <li>
                            <LinkButton to="/sign-in">Log in</LinkButton>
                        </li>
                        <li>
                            <LinkButton
                                to="/sign-in?type=signup"
                                variation="primary"
                            >
                                Sign up
                            </LinkButton>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
