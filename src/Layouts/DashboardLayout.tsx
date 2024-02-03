import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar, { Link } from "./Navbar";

interface Props {
    children?: React.ReactNode;
}

const LINKS: Link[] = [
    {
        name: "About Us",
        to: "about-us",
    },
    {
        name: "Resources",
        to: "resources",
    },
];

export default function DashboardLayout({ children }: Props) {
    return (
        <>
            <Navbar links={LINKS} iconGoTo="/dashboard" />
            <div className="u-container">{children ?? <Outlet />}</div>
            <ScrollRestoration />
        </>
    );
}
