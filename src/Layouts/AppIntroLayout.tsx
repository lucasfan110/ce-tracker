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

export default function AppIntroLayout({ children }: Props) {
	return (
		<>
			<Navbar links={LINKS} logoTo="/" />
			{children ?? <Outlet />}
			<ScrollRestoration />
		</>
	);
}
