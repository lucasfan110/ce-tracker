import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar, { Link } from "./Navbar";

interface Props {
    children?: React.ReactNode;
}

const LINKS: Link[] = [
    {
        name: "Dashboard",
        to: "dashboard",
    },
    {
        name: "About Us",
        to: "about-us",
    },
    {
        name: "Resources",
        to: "resources",
    },
];

export default function AppIntroLayout({ children }: Props) {
    /* 
        We need to get user info from the loader 
    */

    return (
        <>
            <Navbar links={LINKS} />
            {children ?? <Outlet />}
            <ScrollRestoration />
        </>
    );
}
