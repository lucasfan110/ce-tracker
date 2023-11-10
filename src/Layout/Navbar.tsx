import "./Navbar.scss";
import LinkButton from "../Components/LinkButton";

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
