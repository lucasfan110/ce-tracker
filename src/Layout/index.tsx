import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./Navbar";

interface Props {
    children?: React.ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Navbar />
            {children ?? <Outlet />}
            <ScrollRestoration />
        </>
    );
}
