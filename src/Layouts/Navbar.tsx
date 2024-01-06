import React from "react";
import { Link } from "react-router-dom";
import AccountInfo from "../Components/AccountInfo";
import Logo from "../Components/Logo";
import "./Navbar.scss";

export type Link = {
    name: string;
    to: string;
};

interface Props {
    links: Link[];
}

export default function Navbar({ links }: Props) {
    function renderLinks() {
        return links.map(link => {
            return (
                <React.Fragment key={link.to}>
                    <Link to={link.to} className="nav__link">
                        {link.name}
                    </Link>
                </React.Fragment>
            );
        });
    }

    return (
        <nav className="nav">
            <div className="nav__container">
                <div className="nav__left">
                    <Link to="/" className="nav__logo">
                        <Logo />
                    </Link>
                </div>
                <div className="nav__center">{renderLinks()}</div>
                <div className="nav__right">
                    <AccountInfo />
                </div>
            </div>
        </nav>
    );
}
