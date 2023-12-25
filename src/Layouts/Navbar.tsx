import { Link } from "react-router-dom";
import Logo from "../Components/Logo";
import "./Navbar.scss";
import AccountInfo from "../Components/AccountInfo";

export type Link = {
	name: string;
	to: string;
};

interface Props {
	links: Link[];
	logoTo: string;
}

export default function Navbar({ links, logoTo }: Props) {
	function renderLinks() {
		return links.map(link => {
			return (
				<>
					<Link to={link.to} className="nav__link">
						{link.name}
					</Link>
				</>
			);
		});
	}

	return (
		<nav className="nav">
			<div className="nav__container">
				<div className="nav__left">
					<Link to="/" className="nav__logo">
						<Logo to={logoTo} />
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
