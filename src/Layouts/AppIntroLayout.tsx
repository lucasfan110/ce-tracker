import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar, { Link } from "./Navbar";

interface Props {
    children?: React.ReactNode;
}

const LINKS: Link[] = [
    {
        name: "Dashboard",
        to: "/dashboard",
    },
    {
        name: "Help",
        to: "/help",
    },
];

export default function AppIntroLayout({ children }: Props) {
    return (
        <>
            <Navbar links={LINKS} />
            {children ?? <Outlet />}
            <ScrollRestoration />
        </>
    );
}
