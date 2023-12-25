import { Outlet, ScrollRestoration } from "react-router-dom";

interface Props {
	children?: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
	return (
		<>
			{children ?? <Outlet />}
			<ScrollRestoration />
		</>
	);
}
