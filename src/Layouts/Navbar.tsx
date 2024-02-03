import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Components/Logo";
import "./Navbar.scss";
import UserAccount from "../Components/UserAccount";

export type Link = {
    name: string;
    to: string;
};

interface Props {
    links: Link[];
    iconGoTo?: string;
}

export default function Navbar({ links, iconGoTo = "/" }: Props) {
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
                    <Link to={iconGoTo} className="nav__logo">
                        <Logo />
                    </Link>
                </div>
                <div className="nav__center">{renderLinks()}</div>
                <div className="nav__right">
                    <UserAccount />
                </div>
            </div>
        </nav>
    );
}
